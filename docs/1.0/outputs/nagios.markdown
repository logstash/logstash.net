---
title: logstash docs for outputs/nagios
layout: content_right
---
# nagios



## Synopsis

This is what it might look like in your config file:

    outputs {
      nagios {
        commandfile => ... # string, default: "/var/lib/nagios3/rw/nagios.cmd"
        tags => ... # array, default: []
      }
    }

## Details

### commandfile

* Value type is string
* Default value is "/var/lib/nagios3/rw/nagios.cmd"

The path to your nagios command file

### tags

* Value type is array
* Default value is []

Only handle events with any of these tags. Optional.
If not specified, will process all events.

