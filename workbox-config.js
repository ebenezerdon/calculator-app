module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,html,js,md}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};