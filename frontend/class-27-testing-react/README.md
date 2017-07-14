# 401 JS -- class 27 Forms and Testing

## Learning Objectives
* Students will learn to test react components using jest and enzyme 
* Students will learn to manage controlled inputs
* Students will learn to pass data from parrent to child through props

## Readings
* [Components and Props](https://facebook.github.io/react/docs/components-and-props.html)
* [State and Lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html)
* [Handling Events](https://facebook.github.io/react/docs/handling-events.html)
* [Forms](https://facebook.github.io/react/docs/forms.html)
* Skim [Jest Docs](https://facebook.github.io/jest/docs/en/getting-started.html)
* Skim [Enzyme Docs](https://github.com/airbnb/enzyme)

## Overview
#### Testing 
###### Jest
Jest is a javascript testing framework with out of the box react support. Jest has a very simular API to mocha. Jest methods include...  
* describe (same as mocha)
* beforeAll, afterAll (same as mocha before and after)
* beforeEach , afterEach (same as mocha)
* test (same as mocha it)
* expect (simular to expect js)

###### Enzyme 
Enzyme is a utility designed to ease the testing of react components. It has a JQuery like api that helps interact with React components. It provides several methods for compiling/rendering components 
* `mount(<Component />)` - Shallow rendering is useful to test a component witout indirectly asserting behavior of child components
* `render(<Component />)` - Static rendring is used to render components to static html (text) and analyze the resulting HTML structure 
* `mount(<Component />)` - Full Rendering is ideal when your components interact with DOM apis. It recures that a full DOM API be available at the global scope (document needs to be a global variable).

#### Forms and Inputs
React form elements maintain internal state. Think of React inputs as stateful child components. This means that we must manage the state of inputs through our own stateful  component and one way data binding. We create a parent component I'll refer to as a _container_ that manages the state for all child components of the form, passing any necissary state down into inputs through props. Each input has an `onChange` event that we can handle and use to update our containers state each time the user interacts with an input.

