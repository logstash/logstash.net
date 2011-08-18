
SOURCES=docs/latest.html.in _layouts/content_right.html.in _layouts/default.html.in
OBJECTS=$(subst .html.in,.html,$(SOURCES))

default: update

.PHONY: validate-version
validate-version:
	@if [ -z "$(VERSION)" ] ; then \
		echo "No VERSION set." ; \
		false ; \
	fi

clean:
	-rm $(OBJECTS) > /dev/null 2>&1

update: $(OBJECTS) | validate-version 

%.html: %.html.in | validate-version
	sed -re "s/VERSION/$(VERSION)/" $< > $@

