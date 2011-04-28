---
title: logstash docs for outputs/tcp
layout: content_right
---
# tcp



## Synopsis

This is what it might look like in your config file:

    outputs {
      tcp {
        host => ... # string (required)
        port => ... # number (required)
      }
    }

## Details

### host (required setting)

* Value type is string
* There is no default value for this setting.

The host to connect to

### port (required setting)

* Value type is number
* There is no default value for this setting.

The port to connect to

