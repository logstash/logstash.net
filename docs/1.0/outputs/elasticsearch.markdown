---
title: logstash docs for outputs/elasticsearch
layout: content_right
---
# elasticsearch



## Synopsis

This is what it might look like in your config file:

    outputs {
      elasticsearch {
        cluster => ... # string
        host => ... # string
        index => ... # string, default: "logstash-%{+YYYY.MM.dd}"
        port => ... # number, default: 9300
        type => ... # string, default: "%{@type}"
      }
    }

## Details

### cluster

* Value type is string
* There is no default value for this setting.

The name of your cluster if you set it on the ElasticSearch side. Useful
for discovery.

### host

* Value type is string
* There is no default value for this setting.

The name/address of the host to use for ElasticSearch unicast discovery
This is only required if the normal multicast/cluster discovery stuff won't
work in your environment.

### index

* Value type is string
* Default value is "logstash-%{+YYYY.MM.dd}"

The index to write events to. This can be dynamic using the %{foo} syntax.
The default value will partition your indeces by day so you can more easily
delete old data or only search specific date ranges.

### port

* Value type is number
* Default value is 9300

The port for ElasticSearch transport to use. This is *not* the ElasticSearch
REST API port (normally 9200).

### type

* Value type is string
* Default value is "%{@type}"

The type to write events to. Generally you should try to write only similar
events to the same 'type'. String expansion '%{foo}' works here.

