# React Ecosystem

####Best practices and tools for developing modern progressive web apps with react / redux.

Learning course by Shaun Wassel on LinkedIn:
https://www.linkedin.com/learning/building-modern-projects-with-react

## Initial installation
- NodeJS
- NPM
- Babel 
- Webpack

Babel packages: 

    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
Webpack packages:

    npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
React hot loader:

    npm install --save-dev react-hot-loader
Redux packages

    npm i redux react-redux
    npm i redux redux-persist

Install "Redux DevTools" and add extension to the store config:
```
export const configureStore = () => createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

## Best practices with Redux
Export both connected and not connected versions of your component:
```
export const TodoList = ...
export default const connected()(TodoList)
```

1. Your tests shouldn't care whether your component is connected or not. They should just check to see whether the component renders correct JSX given a specific set of props.
2. Keep Redux actions and async operations (data fetching) outside of your reducers.
3. Think carefully about connecting components.
4. Connecting a component can, in practice, make it less reusable.
5. Separate views and side effects.
 
### Side effect libs:
- Redux Thunk (simple)
- Redux Saga (popular)
- Redux Logic

Install Redux-Thunk and dev packages:

    react-ecosystem % npm i redux-thunk redux-devtools-extension @babel/runtime
    npm install --save-dev @babel/plugin-transform-runtime

## Selectors

> Selectors give us a place to put the logic for combining, filtering, transforming stored data.

Selectors used to prevent direct access to the state of the application by components. With selectors components shouldn't know how the state data stored.
```
const mapStateToProps = state => ({
  isLoading: state.isLoading,   // <-- direct access
  ...
})

with selectors:
const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),   // <-- access via selector
  ...
})
```
Selectors also help us to hide internal structure of the state, created in the reducers, like:
```
todos = [...] // <--- no internal state of loading, data only

will be:
todos = {
  isLoading: false, // <--- internal state of loading and data
  data: [...]
}
```
Install reselect:

    npm i reselect
With create `createSelector()` you can combine selectors. Every used selector in this combination will be memoized, so it will be calculated only then, when the value changes. 

### Separations of conserns
- **Redusers** -- manage states
- **Thunks** -- side effects logic 
- **Selectors** -- abstracting the state format, transforming state data


##Styled Components

Syled-Components allow define css styles _inside_ JavaScript files.

Install styled-components package:

    npm i styled-components

## Testing

Install testing packages:

    npm i --save-dev mocha chai @babel/register

To test thunks install following packages:

    npm i --save-dev signon node-fetch fetch-mock
    