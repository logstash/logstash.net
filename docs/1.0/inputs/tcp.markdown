---
title: logstash docs for inputs/tcp
layout: default
---
# tcp



## Synopsis

This is what it might look like in your config file:

    inputs {
      tcp {
        data_timeout => ... # number, default: 5
        host => ... # string, default: "0.0.0.0"
        port => ... # number (required)
      }
    }

## Details

### data_timeout

* Value type is number
* Default value is 5

Read timeout in seconds. If a particular tcp connection is
idle for more than this timeout period, we will assume 
it is dead and close it.

### host

* Value type is string
* Default value is "0.0.0.0"

The address to listen on

### port (required setting)

* Value type is number
* There is no default value for this setting.

the port to listen on

