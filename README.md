# C12 Context API Example

This is a simple React app created with Vite to showcase the use of React's Context API.

## Description

React's Context API allows an "ancestor" component to make values available to any of its "descendants" without having to pass the props down manually at every level.

In this app, our component tree is:
  
  ```
  App
  └── TestProvider
      └── RestOfApp
          └── ShowTheTestValues
  ```

- `TestProvider` is the ancestor component that provides the "test values" to its descendants.
- `RestOfApp` component is a "middle" component that doesn't need the values itself, but its descendants do.
- `ShowTheTestValues` component is a descendant that consumes the "test values".

## How To Run

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Open your browser and navigate to the URL shown in the terminal

