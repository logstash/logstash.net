---
title: logstash docs for inputs/beanstalk
layout: default
---
# beanstalk



## Synopsis

This is what it might look like in your config file:

    inputs {
      beanstalk {
        host => ... # string (required)
        port => ... # number, default: 11300
        tube => ... # string (required)
      }
    }

## Details

### host (required setting)

* Value type is string
* There is no default value for this setting.

The address of the beanstalk server

### port

* Value type is number
* Default value is 11300

The port of your beanstalk server

### tube (required setting)

* Value type is string
* There is no default value for this setting.

The name of the beanstalk tube

