---
title: logstash docs for outputs/mongodb
layout: default
---
# mongodb



## Synopsis

This is what it might look like in your config file:

    outputs {
      mongodb {
        collection => ... # string (required)
        database => ... # string (required)
        host => ... # string (required)
        port => ... # number, default: 27017
      }
    }

## Details

### collection (required setting)

* Value type is string
* There is no default value for this setting.

The collection to use. This value can use %{foo} values to dynamically
select a collection based on data in th eevent.

### database (required setting)

* Value type is string
* There is no default value for this setting.

The database to use

### host (required setting)

* Value type is string
* There is no default value for this setting.

your mongdob host

### port

* Value type is number
* Default value is 27017

the mongodb port

