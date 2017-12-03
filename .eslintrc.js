// Nau standard eslint rules, save it as .eslintrc.js
module.exports = {
	root: true,
	extends: ['nau-react'],
	rules: {
		strict: 'off',
		'no-var': 'off',
		'vars-on-top': 'off',
		'prefer-template': 'off',
		'object-shorthand': 'off',
		'no-use-before-define': 'off',
		'prefer-arrow-callback': 'off',
		'no-param-reassign': 'off',
		'comma-dangle': 'off',
		'global-require': 'off',
		'no-restricted-syntax': 'off',
		'block-scoped-var': 'off',
		'no-redeclare': 'off',
		'no-prototype-builtins': 'off',
		'no-mixed-operators': 'off',
	},
	globals: {},
	env: {
		node: true,
		browser: true,
	},
	plugins: [],
};
