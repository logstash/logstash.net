(function() {
  var path = document.location.pathname;

  // Redirect /issues/NNN to jira.
  var issues_match = /\/issues\/[^/]+/.exec(path)
  if (issues_match) {
    document.location.href = "https://logstash.jira.com/browse/LOGSTASH-" + issues[1];
  }
})();
