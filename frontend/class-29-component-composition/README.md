# 401 JS -- class 29 composition

## Learning Objectives
* Students will learn to about composition vs inheritance
* Students will learn to compose react components using props

## Readings
* [Conditional Rendring](https://facebook.github.io/react/docs/conditional-rendering.html)
* [Lists and Keys](https://facebook.github.io/react/docs/lists-and-keys.html)
* [Composition vs Inheritance](https://facebook.github.io/react/docs/composition-vs-inheritance.html)
* [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

## Overview
#### Component Composition
###### Composition  
Some components dont know their children a head of time. React components can use the speacal `children` prop to pass children directly into their output. For example a `SpeachBubble` component could be passed a `SuccessMessage` or `ErrorMessage` component to be used as a child component.

###### Specialization 
Composition can be used to create special cases of another component. For example a `Modal` component could be composed to create a `SingupModal` or a `LoginModal`.
