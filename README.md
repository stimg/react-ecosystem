# React Ecosystem

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