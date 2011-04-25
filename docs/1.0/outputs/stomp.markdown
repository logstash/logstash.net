---
title: logstash docs for outputs/stomp
layout: default
---
# stomp



## Synopsis

This is what it might look like in your config file:

    outputs {
      stomp {
        debug => ... # boolean
        destination => ... # string
        host => ... # string
        password => ... # password, default: ""
        port => ... # number, default: 61613
        user => ... # string, default: ""
      }
    }

## Details

### debug

* Value type is boolean
* There is no default value for this setting.

Enable debugging output?

### destination

* Value type is string
* There is no default value for this setting.

The destination to read events from. Supports string expansion, meaning
%{foo} values will expand to the field value.

Example: "/topic/logstash"

### host

* Value type is string
* There is no default value for this setting.

The address of the STOMP server.

### password

* Value type is password
* Default value is ""

The password to authenticate with.

### port

* Value type is number
* Default value is 61613

The port to connet to on your STOMP server.

### user

* Value type is string
* Default value is ""

The username to authenticate with.

