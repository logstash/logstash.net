---
title: logstash docs for inputs/file
layout: content_right
---
# file



## Synopsis

This is what it might look like in your config file:

    inputs {
      file {
        exclude => ... # array
        path => ... # array (required)
      }
    }

## Details

### exclude

* Value type is array
* There is no default value for this setting.

Exclusions. Globs are valid here, too.
For example, if you have

    path => "/var/log/*"

you might want to exclude gzipped files:

    exclude => "*.gz"

### path (required setting)

* Value type is array
* There is no default value for this setting.

The path to the file to use as an input.
You can use globs here, such as "/var/log/*.log"

