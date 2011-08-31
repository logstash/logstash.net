---
title: Logstash tutorial @ Dreamforce
layout: content_right
---
# Logstash tutorial @ Dreamforce

## Step 1 - Download

[Click here to download logstash 1.0.17](http://semicomplete.com/files/logstash/logstash-1.0.17-monolithic.jar)

Requirements:

* java

The Secret:

logstash is written in JRuby but I release standalone jar files for easy
deployment, so you don't need to download JRuby or most any other dependencies.
I bake as much as possible into the single release file.

## Step 2 - A hello world.

Download this config file: [hello.conf](hello.conf)

Run it:

    java -jar logstash-1.0.17-monolithic.jar agent -f hello.conf

Type stuff on standard input. Press ^C to kill it.
