---
title: logstash docs for filters/date
layout: default
---
# date



## Synopsis

This is what it might look like in your config file:

    filters {
      date {
        (?-mix:[A-Za-z0-9_-]+) => ... # array
      }
    }

## Details

### (?-mix:[A-Za-z0-9_-]+)

* Value type is array
* There is no default value for this setting.

Config for date is:
  fieldname => dateformat

The same field can be specified multiple times (or multiple dateformats for
the same field) do try different time formats; first success wins.

The date formats allowed are the string 'ISO8601' or whatever is supported
by Joda; generally: [java.text.SimpleDateFormat][dateformats]

For example, if you have a field 'logdate' and with a value that looks like 'Aug 13 2010 00:03:44'
you would use this configuration:

    logdate => "MMM dd yyyy HH:mm:ss"

[dateformats]: http://download.oracle.com/javase/1.4.2/docs/api/java/text/SimpleDateFormat.html

