---
title: logstash - open source log management
layout: default
---

# What is logstash?

logstash is a tool for managing events and logs. You can use it to collect
logs, parse them, and store them for later use (like, for searching). Speaking
of searching, logstash comes with a web interface for searching and drilling
into all of your logs.

It is fully free and fully open source. The license is New BSD, meaning you are
pretty much free to use it however you want in whatever way.

# Demo

You can see a screencast demonstration here:
http://www.youtube.com/watch?v=Fi7OaiNqPCc (from October 2010)

What's the web interface look like? [http://www.semicomplete.com/images/logstash-20101114.png Screenshot (November 2010)]

# What works?

In general, the foundation of logstash is ready for use. You can ship logs from
files to mongodb, amqp, elasticsearch, etc. There's a web interface that lets
you search (and most importantly, drill down into) logs that uses elasticsearch
as a backend.

As of November 2010, you can ship logs from any source, parse them, get the
right timestamp, index them, and search them. All your logs from all over your
infrastructure in one place - with searching and graphing. Since we can easily
parse text-based logs, you can query for more precise things like, all 404 http
errors, nagios critical alerts in hard state, or mail server faults - all
without accidentally finding logs with the word '404' or 'critical' in the
wrong place.

# Documentation

 * [GettingStartedStandalone] - A guide to collecting logs and running logstash on a single server - should only take you about 10 minutes to get through this guide and be able to search your logs!
 * [GettingStartedCentralized] - A guide to collecting logs from many servers and shipping them to another server for indexing and search.
 * [Roadmap] - roadmap for 1.0
 * [Configuration] - logstash configuration docs 

If you have any questions feel free to email the mailing list. To send email,
you'll need to join the list first. If you know a use case you want logstash to
support, email the list.

# What's next?

This is only the beginning. Got a feature request? Bug report? Use case? Let me
know! 

The mailing list is logstash-users@groups.google.com - Join here:
http://groups.google.com/group/logstash-users/

You can also find support and other users on IRC in #logstash on the freenode
irc network.

The code lives on github now: <https://github.com/logstash/logstash/>

[GettingStartedStandalone]: http://code.google.com/p/logstash/wiki/GettingStartedStandalone
[GettingStartedCentralized]: http://code.google.com/p/logstash/wiki/GettingStartedCentralized
[Roadmap]: http://code.google.com/p/logstash/wiki/Roadmap
[Configuration]: http://code.google.com/p/logstash/wiki/Configuration
