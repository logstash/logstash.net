---
title: logstash docs for inputs/amqp
layout: default
---
# amqp



## Synopsis

This is what it might look like in your config file:

    inputs {
      amqp {
        debug => ... # boolean
        durable => ... # boolean
        exchange_type => ... # string (required)
        host => ... # string (required)
        name => ... # string (required)
        password => ... # password, default: "guest"
        port => ... # number, default: 5672
        user => ... # string, default: "guest"
        vhost => ... # string, default: "/"
      }
    }

## Details

### debug

* Value type is boolean
* There is no default value for this setting.

Enable or disable debugging

### durable

* Value type is boolean
* There is no default value for this setting.

Is this exchange durable?

### exchange_type (required setting)

* Value type is string
* There is no default value for this setting.

The exchange type (fanout, topic, direct)

### host (required setting)

* Value type is string
* There is no default value for this setting.

Your amqp server address

### name (required setting)

* Value type is string
* There is no default value for this setting.

The name of the exchange

### password

* Value type is password
* Default value is "guest"

Your amqp password

### port

* Value type is number
* Default value is 5672

The AMQP port to connect on

### user

* Value type is string
* Default value is "guest"

Your amqp username

### vhost

* Value type is string
* Default value is "/"

The vhost to use

