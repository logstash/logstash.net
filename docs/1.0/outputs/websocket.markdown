---
title: logstash docs for outputs/websocket
layout: content_right
---
# websocket



## Synopsis

This is what it might look like in your config file:

    outputs {
      websocket {
        host => ... # string, default: "0.0.0.0"
        port => ... # number, default: 3232
      }
    }

## Details

### host

* Value type is string
* Default value is "0.0.0.0"

The address to serve websocket data from

### port

* Value type is number
* Default value is 3232

The port to serve websocket data from

