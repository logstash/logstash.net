
default: update

.PHONY: validate-version
validate-version:
	@if [ ! -z "$(VERSION)" ] ; then \
		echo "No VERSION set." ; \
		false ; \
	fi

update: docs/latest.html

%.html: %.html.in | validate-version
	sed -re "s/VERSION/$(VERSION)/" $< > $@

