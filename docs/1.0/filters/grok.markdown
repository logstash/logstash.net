---
title: logstash docs for filters/grok
layout: default
---
# grok



## Synopsis

This is what it might look like in your config file:

    filters {
      grok {
        drop_if_match => ... # boolean
        pattern => ... # array (required)
        patterns_dir => ... # array
      }
    }

## Details

### drop_if_match

* Value type is boolean
* There is no default value for this setting.

Drop if matched. Note, this feature may not stay. It is preferable to combine
grok + grep filters to do parsing + dropping.

requested in: googlecode/issue/26

### pattern (required setting)

* Value type is array
* There is no default value for this setting.

Specify a pattern to parse with.
Multiple patterns is fine. First match breaks.

### patterns_dir

* Value type is array
* There is no default value for this setting.

Specify a path to a directory with grok pattern files in it
Pattern files are plain text with format:
  NAME PATTERN

For example:
  NUMBER \d+

