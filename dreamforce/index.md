---
title: Logstash tutorial @ Dreamforce
layout: content_right
---
# Logstash tutorial @ Dreamforce

## Step 1 - Download

### Download logstash:

* [logstash-1.0.17-monolithic.jar](http://semicomplete.com/files/logstash/logstash-1.0.17-monolithic.jar)

### Requirements:

* java

### The Secret:

logstash is written in JRuby but I release standalone jar files for easy
deployment, so you don't need to download JRuby or most any other dependencies.
I bake as much as possible into the single release file.

## Step 2 - A hello world.

### Download this config file:

* [hello.conf](hello.conf)

### Run it:

    java -jar logstash-1.0.17-monolithic.jar agent -f hello.conf

Type stuff on standard input. Press enter. Watch what event logstash sees.
Press ^C to kill it.

## Step 3 - Add ElasticSearch

### Download this config file:

* [hello-search.conf](hello-search.conf)

### Run it:

    java -jar logstash-1.0.17-monolithic.jar agent -f hello-search.conf

Same config as step 2, but now we are also writing events to ElasticSearch. Do
a search for '*' (all):

    curl http://localhost:9200/_search?pretty=1&q=*

## Step 4 - logstash web

The previous step is good, but a better frontend on elasticsearch would help!

The same config as step 3 is used.

### Run it:

    java -jar logstash-1.0.17-monolithic.jar agent -f hello-search.conf -- web --backend 'elasticsearch:///?local'

The above runs both the agent and the logstash web interface in the same
process. Useful for simple deploys.

### Use it:

Go to the logstash web interface in browser: <http://localhost:9292/>

Type stuff on stdin on the agent, then search for it in the web interface.

## Step 5 - real world example

Let's backfill some old apache logs.  First, let's use grok.

Requirements:

* libgrok [INSTALL notes here](https://github.com/jordansissel/grok/blob/master/INSTALL)

Use the 'grok' logstash filter to parse logs. Once you have libgrok installed,
keep reading below.

### Download

* [apache-parse.conf](apache-parse.conf)
* [apache_log.1](apache_log.1)

### Run it

    java -jar logstash-1.0.17-monolithic.jar agent -f apache-parse.conf

Logstash will now be listening on TCP port 3333. Send an apache log message at it:

    cat apache_log.1 | nc localhost 3333

The expected output can be viewed here: [step-5-output.txt](step-5-output.txt)

## Step 6 - real world example + search

TBD
