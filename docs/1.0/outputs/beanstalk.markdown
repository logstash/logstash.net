---
title: logstash docs for outputs/beanstalk
layout: content_right
---
# beanstalk



## Synopsis

This is what it might look like in your config file:

    outputs {
      beanstalk {
        delay => ... # number, default: 0
        host => ... # string (required)
        port => ... # number, default: 11300
        priority => ... # number, default: 65536
        ttr => ... # number, default: 300
        tube => ... # string (required)
      }
    }

## Details

### delay

* Value type is number
* Default value is 0

The message delay (see beanstalk docs)

### host (required setting)

* Value type is string
* There is no default value for this setting.

The address of the beanstalk server

### port

* Value type is number
* Default value is 11300

The port of your beanstalk server

### priority

* Value type is number
* Default value is 65536

The message priority (see beanstalk docs)

### ttr

* Value type is number
* Default value is 300

TODO(sissel): Document this
See beanstalk documentation

### tube (required setting)

* Value type is string
* There is no default value for this setting.

The name of the beanstalk tube

