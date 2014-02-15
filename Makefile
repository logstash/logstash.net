
SOURCES=docs/latest.html.in _layouts/content_right.html.in _layouts/default.html.in index.html.in 404.html.in js/patch.js.in
OBJECTS=$(subst .in,,$(SOURCES))

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

%.js: %.js.in | validate-version
	sed -e "s/%VERSION%/$(VERSION)/g" $< > $@

%.html: %.html.in | validate-version
	sed -e "s/%VERSION%/$(VERSION)/g" $< > $@
