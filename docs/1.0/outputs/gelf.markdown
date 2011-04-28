---
title: logstash docs for outputs/gelf
layout: content_right
---
# gelf



## Synopsis

This is what it might look like in your config file:

    outputs {
      gelf {
        chunksize => ... # number, default: 1420
        facility => ... # string, default: "logstash-gelf"
        host => ... # string (required)
        level => ... # number, default: 1
        port => ... # number, default: 12201
      }
    }

## Details

### chunksize

* Value type is number
* Default value is 1420

The GELF chunksize

### facility

* Value type is string
* Default value is "logstash-gelf"

The GELF facility.

### host (required setting)

* Value type is string
* There is no default value for this setting.

graylog2 server address

### level

* Value type is number
* Default value is 1

The GELF message level

### port

* Value type is number
* Default value is 12201

graylog2 server port

