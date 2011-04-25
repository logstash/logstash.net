if [ -z "$1" ] ; then
  echo "Usage: $0 <version>"
  exit 1
fi

set -e
cd $1
(
  echo "---"
  echo "title: logstash docs index"
  echo "layout: default"
  echo "---"
  find inputs filters outputs -type f -name '*.markdown' \
    | sed -e 's,\.markdown$,,; s,.*,[&](&),' | awk '{print $0"\n"}' \
) > index.md

