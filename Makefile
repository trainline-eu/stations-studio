install:
	npm install
	bower install

run:
	ember server

test:
	ember test
	ember test --server

build:
	ember build

build-prod:
	ember build --environment production

deploy:
	./scripts/deploy.sh

.PHONY: install run test build build-prod deploy
