#!/usr/bin/make

# include package information
include ./PACKAGE

# Make and Shell behavior
SHELL = /usr/bin/bash
.DELETE_ON_ERROR:
.DEFAULT_GOAL := all

# Critical Paths
SRCDIR := .
LOGDIR := var/log
BUILDIR := $(SRCDIR)/build
DISTDIR := $(SRCDIR)/dist
# Monorepo dirs
AGENT_FACTORY := $(SRCDIR)/../..
SHARED := $(AGENT_FACTORY)/shared
# preset environment dirs
ENVDIRS = $(SHARED)/env $(SRCDIR)/config/env $(SRCDIR)/PACKAGE $(SRCDIR)

# Programs
INSTALL = /usr/bin/install
MKDIRP = /usr/bin/mkdir -p
SORT = /usr/bin/sort
CP = /usr/bin/cp
RM = /usr/bin/rm
CHMOD = /usr/bin/chmod
INTERPRETER = node
BUNDLER = npx vite
TESTER = npx vitest
LINTER = npx eslint
FORMATER = npx prettier
DOTENV = ~/bin/dotenv
PRETTY_OUTPUT = npx pino-pretty

.PHONY: all
all: build
# ------------------------------ RELEASE ------------------------------ #
.PHONY: release
release: $(PKG_DISTNAME).tar.gz
	@echo released $(PKG_DISTNAME)!

$(PKG_DISTNAME).tar.gz: dist
	source ./PACKAGE; \
	tar -cvaf $${PKG_DISTNAME}.tar.gz --show-transformed-names \
	--transform=s/dist/administration/ dist

dist: src
	make build

# ------------------------------ RUN ------------------------------ #
.PHONY: run
run: mode ?= 'development'
run: RUNTIME ?= 'node'
run: file ?= '$(SRCDIR)/tmp/scratch.js'
run: env mqtt
	set -a; source ./.env && \
	$(INTERPRETER) $(file) \
	| $(PRETTY_OUTPUT)

.PHONY: run-build
run-build:
	@set -a; source ./.env && \
	$(INTERPRETER) ./dist/index.js \
	| $(PRETTY_OUTPUT)

# ------------------------------ SCRATCH ------------------------------ #
.PHONY: scratch scratch-dev scratch-build

scratch: mode ?= 'development'
scratch: RUNTIME ?= 'node'
scratch: env mqtt
	set -a; source ./.env && \
	$(INTERPRETER) ./tmp/scratch.js \
	| $(PRETTY_OUTPUT)

scratch-dev: mode ?= 'development'
scratch-dev: RUNTIME ?= 'browser'
scratch-dev: envars ?= "BUNDLED=false;SCRATCH=true;RUNTIME=browser"
scratch-dev: mqtt
	$(DOTENV) --mode=$(mode) --environment=$(envars) \
	$(ENVDIRS) | $(SORT) > $(SRCDIR)/.env
	set -a; source ./.env && \
	$(BUNDLER) serve --mode=$(mode) --force

scratch-build: mode ?= 'development'
scratch-build: envars ?= "SCRATCH=true;BUNDLED=true;RUNTIME=browser;"
scratch-build:
	$(DOTENV) --mode=$(mode) --environment=$(envars) \
	$(ENVDIRS) | $(SORT) > $(SRCDIR)/.env
	set -a; source ./.env && \
	$(BUNDLER) build --mode=$(mode)

# ------------------------------ DEV ------------------------------ #
.PHONY: dev
dev: mode ?= 'development'
dev: RUNTIME ?= 'browser'
dev: envars ?= 'BUNDLED=false;RUNTIME=browser'
dev: mqtt
	$(DOTENV) --mode=$(mode) --environment=$(envars) \
	$(ENVDIRS) | $(SORT) > $(SRCDIR)/.env
	set -a; source ./.env && \
	$(BUNDLER) serve --mode=$(mode) --force


# ------------------------------ PREVIEW ------------------------------ #
.PHONY: preview
preview: mode ?= 'production'
preview: env
	$(BUNDLER) preview --mode=$(mode)

# ------------------------------ BUILD ------------------------------ #
.PHONY: build
build: mode ?= 'production'
build: RUNTIME = browser
build: envars ?= "BUNDLED=true;RUNTIME=browser;BASENAME=/administration"
build: mqtt
	$(DOTENV) --mode=$(mode) --environment=$(envars) \
	$(ENVDIRS) | $(SORT) > $(SRCDIR)/.env
	set -a; source ./.env && \
	NODE_ENV=production $(BUNDLER) build --mode=$(mode)

# ------------------------------ TEST ------------------------------ #
.PHONY: test
test: mode ?= 'testing'
test: suite ?= '*'
test: env
	set -a; source ./.env && \
	$(TESTER) run --reporter verbose --mode=$(mode) $(suite)

# ------------------------------ LINT ------------------------------ #
.PHONY: lint
lint: file ?= '.'
lint:
	$(LINTER) --ext js,jsx --fix $(file)

.PHONY: lint-check
lint-check: file ?= '.'
lint-check:
	$(LINTER) --ext js,jsx $(file)

# ------------------------------ FORMAT ------------------------------ #
.PHONY: fmt
fmt: file ?= '.'
fmt:
	$(FORMATER) --write $(file)

.PHONY: fmt-check
fmt-check: file ?= '.'
fmt-check:
	$(FORMATER) --check $(file)

# ------------------------------ CLEAN ------------------------------ #
.PHONY: clean distclean
clean:
	rm -rdf dist build

distclean: clean
	rm -rdf node_modules package-lock.json

# ------------------------------ ENV ------------------------------#
.PHONY: env
mode ?= 'production'
env:
	$(DOTENV) --mode=$(mode) $(ENVDIRS) | $(SORT) > $(SRCDIR)/.env

env-dry: mode ?= 'production'
env-dry:
	$(DOTENV) --mode=$(mode) $(ENVDIRS) | $(SORT)


# ------------------------------ VARIOUS ------------------------------ #

mqtt:
	m4 -D RUNTIME=$(RUNTIME) $(SHARED)/utils/macros.m4 $(SHARED)/clients/mqtt.js.m4 > $(SHARED)/clients/mqtt.js
