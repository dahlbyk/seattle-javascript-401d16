# 401 JS -- class 26 frontend tooling and react

## Learning Objectives
* Students will be able to configure webpack to build a web application bundle
* Students will be able to configure babel to transpile JSX and ES6 to ES5 javscript
* Students will be able to create and render react components to the DOM
* Students will be able to add event listeners to react components 
* Students will be able to update react component state

## Readings
* [Webpack Concepts](https://webpack.js.org/concepts/)
* [Webpack Configuration](https://webpack.js.org/configuration/)
* [React Hello World](https://facebook.github.io/react/docs/hello-world.html) 
* [Introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
* [Rendering Elements](https://facebook.github.io/react/docs/rendering-elements.html)

## Overview
#### Webpack
Webpack is a module bundler for JS applicaions. It compiles modern javascript applicaions into bundles that can be loaded into a browser. **All of your projects assets shouold be managed by webpack**, including JSON, JS, CSS, SCSS, HTML, IMAGES, FONTS, ect.

###### Plugins 
Plugins can be added to webpack add extra functionality. Some examples include...  
 * creating HTML files with dynamic script and link tags
 * creating CSS File
 * Uglifying and minifying your code
 * Creating project global vars at compile time

###### Loaders
Loaders can be added to webpack to transform the data (code/json/images/ect.) imported into a project. Loaders are configured to only apply their tranformations to filesthat match user defined reqular expressions. Loaders can be chained together to transform data. Some examples include...
* transform ES6 files into ES5 files with babel
* tranform sass files into css files
* transform images/fonts into base64 data embedded into your sass/css

#### React
React is a component based view and state managment library. Its designed to be declartive making it "painless" to create interative UIs. React can run in browsers, and nativly on mobile devices.

###### Components  
React components have a render method that returns a view to be rendered to the page. React developers use JSX to make their applicaions more readable and have a more expressive workflow when writing react views. JSX looks like html, but gets transpiled to ordinary javascript `React.createElement()` invocations, by babel. React components can also have `state` and `lifecycle hooks`. When the state of a react component changes that is bound to a view the view will automaticly re-render itself, eliminating the pain of mainual DOM manipulation under most circumstances. React components can implament specific methods that will get called during specific points, these are called lifecycle hooks. React components can also pass data into thier children through what is called one way data binding. We say that React applications have one way data flow, because data is only passed from the top down.
