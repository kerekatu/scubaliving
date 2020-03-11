# **1. Webpack Configuration With React**

## useful links:

- [babel docs](https://babeljs.io/docs/en/)
- [webpack docs](https://webpack.js.org/concepts/)
- [react docs](https://reactjs.org/docs/)

## package.json

```js
"dependencies": {
  "@babel/core": "^7.8.4", // base functionality of babel
  "@babel/plugin-proposal-class-properties": "^7.8.3", // allows the use of ES6 class properties syntax
  "@babel/preset-env": "^7.8.4", // set of rules for compiling new js syntaxes to old javascript
  "@babel/preset-react": "^7.8.3", // set of rules for compiling react to javascript
  "babel-loader": "^8.0.6", // this tool makes it possible to transpile javascript using babel and webpack. It is necessary for older browsers, as it compiles new features of javascript into pure old javascript
  "live-server": "^1.2.1", // simple development server with live reload, can be also downloaded as an extension in VS code
  "react": "^16.12.0", // main functionality of react
  "react-dom": "^16.12.0", // mostly used to render the app to the DOM
  "webpack": "^4.41.6", // main functionality of webpack
  "webpack-dev-server": "^3.10.3", // live server with live reload and the functionality of webpack. It watches for changes and compiles them, but it keeps bundle files in memory instead of writing any output files. Should be only used for development and not production stage
  "webpack-cli": "^3.3.11" // allows the use of webpack commands in terminal
}
```

## .babelrc

```js
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
```

## webpack.config.js

```js
const path = require('path') // ES5 import syntax

module.exports = {
  entry: './src/app.js', // specifies the entry point for webpack
  output: {
    path: path.join(__dirname, 'public'), // "__dirname" targets root path of the project
    filename: 'bundle.js' // output file
  },
  module: {
    rules: [
      {
        loader: 'babel-loader', // tells webpack to use babel-loader to transpile code
        test: /\.js$/, // usage of regex, tells webpack to look for files with ".js"
        exclude: /node_modules/ // don't search for .js files in the specified folders
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map', // source map helps with debugging in the browser by creating a link to the original source code, even after your code has gone through babel or other compiler
  devServer: {
    contentBase: path.join(__dirname, 'public') // main path to public files that the dev server should run
  }
}
```

# **2. Old vs New Javascript Syntax**

```js
// ------ Old Syntax

class OldSyntax {
  constructor() {
    this.town = 'Warsaw'
    this.state = {
      name: 'Konrad'
    }
    this.sayHello = this.sayHello.bind(this)
  }

  sayHello() {
    return `Hi! Nice to meet you ${this.state.name}`
  }
}

const oldSyntax = new OldSyntax()
const sayHello = oldSyntax.sayHello
console.log(sayHello())

// ------ New Syntax

// no need to define the constructor function for class properties (built-in react methods still use the ES6 method syntax)
// by using arrow functions you don't need to bind them as they inherit *this keyword* from their parent scope

class NewSyntax {
  town = 'Zielona Gora'
  state = {
    name: 'Krystian'
  }

  sayHello = () => {
    return `Hi! Nice to meet you ${this.state.name}. We both live in ${this.town}`
  }
}

const newSyntax = new NewSyntax()
const newSayHello = newSyntax.sayHello

console.log(newSayHello())
```
