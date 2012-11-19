require 'sprockets'
require 'uglifier'
require 'debugger'

set :application, "graphene"
set :repository,  "git@github.com:ucirvine/graphene.git"
set :domain, "stats.oit.uci.edu"
set :use_sudo, false
set :scm, :git
set :scm_verbose, true
set :branch, "qa"
set :git_shallow_clone, 1
set :ssh_options, { forward_agent: true, auth_methods: ["publickey"] }
set :deploy_to, "/opt/graphene"
set :deploy_via, :remote_cache
set :user, "graphene"

# Root directory of application
set :asset_root, Pathname(File.expand_path("..", File.dirname(__FILE__)))
# List of bundles that in turn point to other assets that need to be compiled
set :asset_bundles, %w(js/index.js css/index.css)
# Search for assets in these directories
set :append_paths, ['app', '.']
# Output minified and aggregated files to this directory
set :asset_destination, asset_root.join("build")

server domain, :app, :web


namespace :deploy do
  # override default finalize_update with the logic needed
  # to compile and deploy assets
  task :finalize_update do
    sprockets = ::Sprockets::Environment.new(asset_root)
    append_paths.each do |p|
      sprockets.append_path p
    end
    sprockets.js_compressor = ::Uglifier.new

    asset_bundles.each do |bundle|
      assets = sprockets.find_asset(bundle)
      prefix, basename = assets.pathname.to_s.split('/')[-2..-1]
      FileUtils.mkpath asset_destination

      assets.write_to(asset_destination.join(basename))
    end

    run("mkdir -p build")
    Dir["#{asset_destination}/*"].each do |file|
      top.upload(file, "#{current_release}/build/#{File.basename(file)}")
    end
  end
end

# Cleanup old releases (keeps 5)
after "deploy:restart", "deploy:cleanup"
