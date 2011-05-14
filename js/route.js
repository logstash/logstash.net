//for testing
//var document = {
  //location: { pathname: "/issues/79" },
//};

(function() {
  var path = document.location.pathname;

  window.Route = function() { 
    this.routes = [];
  };

  /* Add a route.
   *
   * Arguments:
   *   path: the path, can include :foo tokens, like:
   *     "/issues/:foo/delete"
   *   callback: function to call if route matches. 
   *     arguments passed to the callback are any captured groups.
   */
  window.Route.prototype.add = function(path, callback) {
    var pattern = path;
    var new_pattern = "";
    while (pattern !== new_pattern) {
      if (new_pattern !== "") {
        pattern = new_pattern;
      }

      new_pattern = pattern.replace(/\/:[A-z]+/, function(token) {
        return "/([^/]+)";
      });
      //console.log(new_pattern);
    };

    var re = new RegExp("^" + pattern + "$");

    this.routes.push(function(pathname) {
      var m = re.exec(pathname)
      if (m) {
        m.shift(); // Skip matched full string
        callback.apply(this, m);
        return true;
      }
      return false;
    });
  } /* function Route#add */

  /* Redirect to a url */
  window.Route.prototype.redirect = function(url) {
    document.location.href = url;
  }; /* function Route#redirect */

  /* Run the routes. Breaks on the first route matched. */
  window.Route.prototype.run = function() {
    /* Try each route */
    for (var r in this.routes) {
      routemethod = this.routes[r]
      //console.log(r + ": " + routemethod());
      //console.log(document.location.pathname);
      if (routemethod(document.location.pathname)) { 
        return;
      }
    }
  }; /* function Route#run */
})();

