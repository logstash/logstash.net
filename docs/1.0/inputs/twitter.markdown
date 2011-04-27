---
title: logstash docs for inputs/twitter
layout: content_right
---
# twitter



## Synopsis

This is what it might look like in your config file:

    inputs {
      twitter {
        keywords => ... # array (required)
        password => ... # password (required)
        user => ... # string (required)
      }
    }

## Details

### keywords (required setting)

* Value type is array
* There is no default value for this setting.

Any keywords to track in the twitter stream

### password (required setting)

* Value type is password
* There is no default value for this setting.

Your twitter password

### user (required setting)

* Value type is string
* There is no default value for this setting.

Your twitter username

