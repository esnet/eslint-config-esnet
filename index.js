module.exports = {
  "extends": "eslint:recommended",
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "babel"
  ],
  "rules": {
    "babel/object-shorthand": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-no-undef": 2,
    "react/wrap-multilines": 2,
    "no-console": 1,
    "comma-dangle": [ 2, "never" ],
    "eol-last": 2,
    "indent": [2, 4, {"SwitchCase": 1}],
    "jsx-quotes": [ 2, "prefer-double" ],
    "no-multiple-empty-lines": 2,
    "no-unused-vars": 2,
    "no-var": 2,
    "quote-props": [2, "as-needed"],
    "quotes": [2, "double"],
    "semi": [2, "always"],
    "strict": 0,
    "space-before-blocks": [ 2, "always" ],
    "space-before-function-paren": [ 2, { "anonymous": "always", "named": "never" } ]
  }
}
