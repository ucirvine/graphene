function statsSourceUrl(target, opts) {
  from = opts.from || "-1hour";
  "http://stats.oit.uci.edu:8080/render/?from=" + from + "&format=json&_salt=1352477600.709&target=stats_counts.recruit." + target;
}

(function() {
  var description;
  description = {

    "# Requests": {
      source: statsSourceUrl("requests"),
      TimeSeries: {
        parent: '#g1-1',
        title: "# requests"
      }
    },

    "Bundles Downloaded": {
      source: statsSourceUrl("application.bundle.cache.*.*"),
      TimeSeries: {
        parent: '#g1-2',
        title: "# bundles"
      }
    },

    "Recruitments": {
      source: statsSourceUrl("recruitment.delta", {"from": "-1day"}),
      TimeSeries: {
        parent: '#g1-3',
        title: "recruitments delta"
      }
    },

    "Applicants": {
      source: statsSourceUrl("applicant.delta", {"from": "-1day"}),
      TimeSeries: {
        parent: '#g2-1',
        title: "applicants delta"
      }
    },

    "References": {
      source: statsSourceUrl("reference.delta", {"from": "-1day"}),
      TimeSeries: {
        parent: '#g2-2',
        title: "references delta"
      }
    },

    "Applicant Login": {
      source: statsSourceUrl("applicant.login.success"),
      TimeSeries: {
        parent: '#g2-3',
        title: "# applicant logins"
      }
    },

    "Applicant Login Failures": {
      source: statsSourceUrl("applicant.login.failure"),
      TimeSeries: {
        parent: '#g3-1',
        title: "# applicant login failures"
      }
    },

    "Reference Login": {
      source: statsSourceUrl("reference.login.success"),
      TimeSeries: {
        parent: '#g3-2',
        title: "# reference logins"
      }
    },

    "Reference Login Failures": {
      source: statsSourceUrl("reference.login.failure.*"),
      TimeSeries: {
        parent: '#g3-3',
        title: "# reference login failures"
      }
    },

    "Applicant Forgot Password": {
      source: statsSourceUrl("applicant.forgot.*"),
      TimeSeries: {
        parent: '#g4-1',
        title: "# applicant forgot password"
      }
    },

    "Applicant Contact Us": {
      source: statsSourceUrl("applicant.contact.*.*"),
      TimeSeries: {
        parent: '#g4-2',
        title: "# applicant contact us"
      }
    },

    "Reference Contact Us": {
      source: statsSourceUrl("reference.contact.*.*"),
      TimeSeries: {
        parent: '#g4-3',
        title: "# reference contact us"
      }
    },
  };


  var g = new Graphene;
  g.build(description);


}).call();
