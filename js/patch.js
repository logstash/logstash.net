(function() {
  var latest_version = "1.4.2";
  var path = document.location.pathname;
  var docs_path_re = new RegExp("/docs/([^/]+)(/.*|$)");
  
  var match = docs_path_re.exec(path);

  if (match !== null) {
    /* a docs path, check the version */
    version = match[1]
    if (version !== latest_version) {
      /* Not latest version, put a warning. */
      var wrapper = document.querySelector(".content_wrapper");
      var first_child = wrapper.children[0];

      var warning = document.createElement("div");
      var recommended_path = "/docs/" + latest_version + match[2];
      warning.innerHTML = (
        "<p>VERSION NOTICE</p>"
        + "<p>NOTICE: This page documents logstash " + version
        + ", which is NOT the latest stable release. The latest stable release of "
        + "logstash is " + latest_version + ". Unless you are "
        + "here on purpose, you probably want to be viewing the latest "
        + "documentation.</p>"
        + "<p>Go to the latest: <a href=\"" + recommended_path + "\">" 
        + recommended_path + "</a></p>");

      warning.setAttribute("class", "warning");
      wrapper.insertBefore(warning, first_child);
    }                 
  }                   
  
})();
