---
title: logstash docs for filters/multiline
layout: content_right
---
# multiline



## Synopsis

This is what it might look like in your config file:

    filters {
      multiline {
        negate => ... # boolean
        pattern => ... # string
        what => ... # previousnext
      }
    }

## Details

### negate

* Value type is boolean
* There is no default value for this setting.

Negate the regexp pattern ('if not matched')

### pattern

* Value type is string
* There is no default value for this setting.

The regular expression to match

### what

* Value type is previousnext
* There is no default value for this setting.

If the pattern matched, does event belong to the next or previous event?

