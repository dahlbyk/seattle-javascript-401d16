# 401 JS -- class 28 react router

## Learning Objectives
* Students will learn to create front end routes using react-router-dom 
* Sudents will learn to restructure their applications into modules
* Students will learn to lift application state to better controll one way data flow
 
## Readings
* [es6 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
* [react-router-dom philosophy](https://reacttraining.com/react-router/web/guides/philosophy)
* [Lifting State Up](https://facebook.github.io/react/docs/lifting-state-up.html)
* Skim [mdn import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* Skim [mdn export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

## Overview
#### Types of State
###### Application State
Application state is any state that represends the core data of your application. This is your all your models. Examples Include...  
* Auth
* User
* Note
* Article

###### View State
View state is any state that has to do with how a specific component should look. Examples include...  
* Input's values
* Which menu item is focused
* When to hide/show a section of the view
* When  a hamburger menu is open or closed 

#### Lifting State
Because data can only flow from parents to children, if more than one component deds to reflect the same changing data that data must be manged higher on the tree. One solution to this probem is to lift all Application state to the top of the app, enabling the entire app to share chaning state. View State does not often have to be lifted.

#### ES6 modules
ES6 now suports its own ability to define JS modules. ES6 Modules are like commonJS modules, except they are automaticly strict-mode code, even if you don't write use-strict. ES6 now uses `export` and `import` to define and load modules

#### Frontend React Routing
The defacto routing libray for react web apps is `react-router-dom`. It manages switching between components based off state or the window location, meanwile controllingthe browser history api. By using the browser history api, it enables users to hit the back button on their browser and revert to the last route without re-rendering the page.

