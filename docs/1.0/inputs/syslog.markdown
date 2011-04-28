---
title: logstash docs for inputs/syslog
layout: default
---
# syslog



## Synopsis

This is what it might look like in your config file:

    inputs {
      syslog {
        host => ... # string, default: "0.0.0.0"
        port => ... # number, default: 514
      }
    }

## Details

### host

* Value type is string
* Default value is "0.0.0.0"

The address to listen on

### port

* Value type is number
* Default value is 514

The port to listen on

