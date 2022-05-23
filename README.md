# react-D3-min-dash-template

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
Standard installation, booting, and deployment instructions at the end of this Readme.

## Description

This project consists of a somewhat minimal template for a React-D3 dashboard.
Some of the template's specs:

- *"Pure" D3*:  Raw `d3` library as opposed to premade `d3` components from the `react-d3` library.
- *Connecting React and D3*: Approach based on the `useEffect` and `UseRef` hooks from `React` (https://medium.com/@jeffbutsch/using-d3-in-react-with-hooks-4a6c61f1d102).
- *Draw/Update setup*: Sets up Draw/Update framework with initial viz is rendered through `Draw` function and `svg` elements thereby created are later modified through `Update` function (allows for `d3` transition and animated updates).
- *Jotai state-management*: Global state variables (e.g., state of checkbox control) gathered in single store. Accessibility throughout the app powered by Jotai (https://github.com/pmndrs/jotai/discussions/1003).
- *Bulma Layout*: Dashboard layout uses https://react-bulma.dev/en.
- *Absolute path import*: Absolute path import from `src` enabled through `jsconfig.json` in root (https://create-react-app.dev/docs/importing-a-component/, https://stackoverflow.com/questions/45213279/how-to-avoid-using-relative-path-imports-redux-action-action1-in-cre)
- *Material UI example control*: Example of checkbox control using https://mui.com/ and interacting with `d3` update.

# Installation, Booting, and Deployment

In the project directory, you can run:

### `npm install`

Installs all module dependencies.\

### `npm start`

If you ran `npm install`, running `npm start`  will start the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
