---
title: logstash docs for outputs/stdout
layout: default
---
# stdout



## Synopsis

This is what it might look like in your config file:

    outputs {
      stdout {
        debug => ... # boolean
      }
    }

## Details

### debug

* Value type is boolean
* There is no default value for this setting.

Enable debugging. Tries to pretty-print the entire event object.

