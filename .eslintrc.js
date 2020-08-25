module.exports = {
	extends: ["plugin:react/recommended", "airbnb"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/jsx-filename-extension": "off",
		"react/prefer-stateless-function": "off",
		"no-console": "off",
		"template-curly-spacing": ["error", "never"],
		"linebreak-style": 0,
		"object-curly-spacing": [
			"error",
			"always",
			{
				objectsInObjects: true,
				arraysInObjects: true,
			},
		],
	},
	parser: "babel-eslint",
};
