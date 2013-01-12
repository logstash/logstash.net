
SOURCES=docs/latest.html.in _layouts/content_right.html.in _layouts/default.html.in index.html.in 404.html.in
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

update: | validate-version 
	-rm $(OBJECTS)
	make $(OBJECTS)
	@echo "Don't forget to commit this"

%.html: %.html.in | validate-version
	sed -re "s/%VERSION%/$(VERSION)/" $< > $@
