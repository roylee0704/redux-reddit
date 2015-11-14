#ESlint

##Setup

###On package.json

```javascript
npm install --save-dev eslint-config-airbnb babel-eslint eslint-plugin-react eslint
```

###On .eslintrc 

Note: create .eslintrc on your own
```
{
  "extends": "airbnb",
  "rules": {
    // disable requiring trailing commas because it might be nice to revert to
    // being JSON at some point, and I don't want to make big changes now.
    "comma-dangle": 0
  }
}
```



##Resources

- https://www.npmjs.com/package/eslint-config-airbnb
- https://www.jetbrains.com/webstorm/help/eslint.html


