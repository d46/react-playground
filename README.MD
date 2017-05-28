# Gri Creative React Workshop

<p align="center">
  <a href="https://github.com/babel/babel">
    <img alt="babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png" width="120">
  </a>
  <a href="https://github.com/webpack/webpack">
      <img width="120" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <a href="https://github.com/facebook/react">
      <img width="120" src="https://facebook.github.io/react/img/logo.svg">
  </a>
</p>



## We will going to use React with Webpack 2 and ES6

First check your nvm is on node 7.x

Read here --> [https://github.com/webpack/webpack](https://github.com/webpack/webpack)

Install webpack as a global instead of local pack.

Create webpack.config file

Read here --> [https://webpack.js.org/guides/get-started/#using-webpack-with-a-config](https://webpack.js.org/guides/get-started/#using-webpack-with-a-config)

Browsers do not support ES6. We need to transpile our code with babel.

Read here --> [http://babeljs.io/docs/setup/#installation](http://babeljs.io/docs/setup/#installation)

In step 3, We will use via config.

Setting up babel preset for react.

## Setting up webpack.config

```javascript
const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve('target'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}
```
