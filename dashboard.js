(function() {
  var description;
  description = {

    "# Requests": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1day&format=json&_salt=1352477600.709&target=stats_counts.recruit.requests",
      TimeSeries: {
        parent: '#g1-1',
	title: "# requests"
      }
    },
    "Bundles Downloaded": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1day&format=json&_salt=1352478526.16&target=stats_counts.recruit.application.bundle.cache.*.*",
      TimeSeries: {
        parent: '#g1-2',
	title: "# bundles"
      }
    },
    "Applicant Contact Us": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1day&format=json&_salt=1352478526.16&target=stats_counts.recruit.applicant.contact.*.*",
      TimeSeries: {
        parent: '#g2-1',
	title: "# applicant contact us"
      }
    },
    "Reference Contact Us": {
      source: "http://stats.oit.uci.edu:8080/render/?from=-1day&format=json&_salt=1352478526.16&target=stats_counts.recruit.reference.contact.*.*",
      TimeSeries: {
        parent: '#g2-2',
	title: "# reference contact us"
      }
    },
  };


  var g = new Graphene;
  g.build(description);


}).call(this);
