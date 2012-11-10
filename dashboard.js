(function() {
  var description;
  description = {

    "# Requests": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1hour&format=json&_salt=1352477600.709&target=stats_counts.recruit.requests",
      TimeSeries: {
        parent: '#g1-1',
	title: "# requests"
      }
    },

    "Bundles Downloaded": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1hour&format=json&_salt=1352478526.16&target=stats_counts.recruit.application.bundle.cache.*.*",
      TimeSeries: {
        parent: '#g1-2',
	title: "# bundles"
      }
    },

    "Applicant Contact Us": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1hour&format=json&_salt=1352478526.16&target=stats_counts.recruit.applicant.contact.*.*",
      TimeSeries: {
        parent: '#g1-3',
	title: "# applicant contact us"
      }
    },

    "Reference Contact Us": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1hour&format=json&_salt=1352478526.16&target=stats_counts.recruit.reference.contact.*.*",
      TimeSeries: {
        parent: '#g2-1',
	title: "# reference contact us"
      }
    },

    "Applicant Login": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1hour&format=json&_salt=1352478526.16&target=stats_counts.recruit.applicant.login.success",
      TimeSeries: {
        parent: '#g2-2',
	title: "# applicant logins"
      }
    },

    "Applicant Login Failures": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1hour&format=json&_salt=1352478526.16&target=stats_counts.recruit.applicant.login.failure",
      TimeSeries: {
        parent: '#g2-3',
	title: "# applicant login failures"
      }
    },

    "Reference Login": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1hour&format=json&_salt=1352478526.16&target=stats_counts.recruit.reference.login.success",
      TimeSeries: {
        parent: '#g3-1',
	title: "# reference logins"
      }
    },

    "Reference Login Failures": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1hour&format=json&_salt=1352478526.16&target=stats_counts.recruit.reference.login.failure.*",
      TimeSeries: {
        parent: '#g3-2',
	title: "# reference login failures"
      }
    },

    "Applicant Forgot Password": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1hour&format=json&_salt=1352478526.16&target=stats_counts.recruit.applicant.forgot.*",
      TimeSeries: {
        parent: '#g3-3',
	title: "# applicant forgot password"
      }
    },
  };


  var g = new Graphene;
  g.build(description);


}).call(this);
