install:
	npm ci

brain-games: 
	node bin/brain-games.js

publish:
	nmp publish --dry-run