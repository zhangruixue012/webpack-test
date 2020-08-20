module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "jest": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": "off",
        "react/prefer-stateless-function": "off",
        "no-console": "off",
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "object-curly-spacing": [
            "error",
            "always",
            {
                "objectsInObjects": true,
                "arraysInObjects": true
            }
        ]
    },
    "parser": "babel-eslint"
};
