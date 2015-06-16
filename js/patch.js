(function() {
  var latest_version = "1.5.1";
  var path = document.location.pathname;
  var docs_path_re = new RegExp("/docs/([^/]+)(/.*|$)");
  
  var match = docs_path_re.exec(path);
  
  if (match === null) {
    return;
  }

  /* a docs path, check the version */
  var version = match[1]
  var remainder = match[2]
  if (version !== latest_version) {
    /* Not latest version, put a warning. */
    var wrapper = document.querySelector(".content_wrapper");
    var first_child = wrapper.children[0];

    var default_recommended_path = "/docs/" + latest_version + match[2];
    var recommended_path = default_recommended_path;
    var recommendation = default_recommended_path;
    
    var recommendations = {
      "/output/elasticsearch_http": {
        path: "https://www.elastic.co/guide/en/logstash/current/plugins-outputs-elasticsearch.html",
        text: "The elasticsearch_http plugin has been merged with the elasticsearch output plugin since Logstash 1.5.0."
      },
      "/inputs/collectd": {
        path: "https://www.elastic.co/guide/en/logstash/current/plugins-codecs-collectd.html",
        text: "The collectd input has been moved to a codec which can be used with the udp input."
      },
      "/filters/grep": {
        path: "https://www.elastic.co/guide/en/logstash/current/configuration.html#conditionals",
        text: "The grep filter has been deprecated since Logstash 1.2.0 in favor of the new filter conditionals. You can achieve the same effect of 'drop' filter with conditionals and the <a href=\"https://www.elastic.co/guide/en/logstash/current/plugins-filters-drop.html\">drop filter</a>."
      },
      "/outputs/amqp": {
        path: "https://www.elastic.co/guide/en/logstash/current/plugins-outputs-rabbitmq.html",
        text: "The amqp output was renamed to rabbitmq because specifically RabbitMQ is supported."
      },
      "/inputs/amqp": {
        path: "https://www.elastic.co/guide/en/logstash/current/plugins-inputs-rabbitmq.html",
        text: "The amqp inputs was renamed to rabbitmq because specifically RabbitMQ is supported."
      },
      "/filters/advisor": {
        path: null,
        text: "The advisor plugin is unmaintained and unavailable since Logstash 1.5.0."
      },
      "/filters/grokdiscovery": {
        path: null,
        text: "The grokdiscovery plugin is unmaintained and unavailable since Logstash 1.5.0. For now, if you need something similar, you can try the <a href=\"http://grokdebug.herokuapp.com/\">online grok debugger</a>."
      },
      "/filters/noop": {
        path: "https://www.elastic.co/guide/en/logstash/current/plugins-filters-mutate.html",
        text: "The noop filter was removed in Logstash 1.5.0. Recommend you use the mutate filter instead."
      },
      "/flags": {
        path: "https://www.elastic.co/guide/en/logstash/current/_command_line_flags.html",
        text: ""
      },
      "/release-notes": {
        path: "https://github.com/elastic/logstash/blob/master/CHANGELOG.md",
        text: ""
      },
      "/inputs/gemfire": {
        path: null,
        text: "The gemfire input is no longer maintained"
      }
    }; // recommendations


    var warning = (
      "<p>VERSION NOTICE</p>"
      + "<p>NOTICE: This page documents logstash " + version
      + ", which is NOT the latest stable release. The latest stable release of "
      + "logstash is " + latest_version + ". Unless you are "
      + "here on purpose, you probably want to be viewing the latest "
      + "documentation.</p>")
    info = recommendations[remainder];
    if (info !== undefined) {
      if (info.text !== null) {
        warning += "<p>" + info.text + "</p>";
      }
      recommended_path = info.path;
    }

    if (recommended_path !== null) {
      var link_info = "Go to the latest version of the docs: <a href=\"" + recommended_path + "\">" + recommended_path + "</a>";
      warning += link_info;
    }
    
    var warning_el = document.createElement("div");
    warning_el.innerHTML = warning;

    warning_el.setAttribute("class", "warning");
    wrapper.insertBefore(warning_el, first_child);
  }                 
})();
