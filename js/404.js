(function() {
  var path = document.location.pathname;

  /* TODO(sissel): Refactor this to be route-like */

  // Redirect /issues/NNN to jira.
  var issues_match = /^\/issues\/([^/]+)/.exec(path);
  if (issues_match) {
    document.location.href = "https://logstash.jira.com/browse/LOGSTASH-" + issues_match[1];
    return;
  }

  if (path =~ /^\/issues\/?/) {
    document.location.href = "https://logstash.jira.com/"
    return;
  }
})();
