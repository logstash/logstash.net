---
title: logstash docs for filters/grep
layout: default
---
# grep



## Synopsis

This is what it might look like in your config file:

    filters {
      grep {
        (?-mix:[A-Za-z0-9_-]+) => ... # string
        match => ... # hash, default: {}
        negate => ... # boolean
      }
    }

## Details

### (?-mix:[A-Za-z0-9_-]+)

* Value type is string
* There is no default value for this setting.

Config for grep is:
  fieldname: pattern
  Allow arbitrary keys for this config.

### match

* Value type is hash
* Default value is {}

A hash of matches of field => value

### negate

* Value type is boolean
* There is no default value for this setting.

Negate the match. Similar to 'grep -v'

If this is set to true, then any positive matches will result in the
event being cancelled and dropped. Non-matching will be allowed
through.

