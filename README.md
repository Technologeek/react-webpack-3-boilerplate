# :sparkles:React-webpack-3-boilerplate [2017] :sparkles:
![React+Webpack3](http://i.imgur.com/dPVmyuv.png)

Stack Contains
--------------
:heavy_check_mark: [React v15.6.1](https://facebook.github.io/react/)

:heavy_check_mark: [React-Redux v5.0.5](http://redux.js.org/docs/basics/UsageWithReact.html)

:heavy_check_mark: [React-Router v4.1.2](https://github.com/ReactTraining/react-router)

:heavy_check_mark: [Jest v20.0.4](https://facebook.github.io/jest/docs/tutorial-react.html)

:heavy_check_mark: [Webpack v3.3.0](https://webpack.js.org/)

:heavy_check_mark: [Babel Core v6.25.0](https://babeljs.io/)

:heavy_check_mark: [ES6](http://es6-features.org/#Constants)

:heavy_check_mark: [Bulma v0.4.4](http://bulma.io/)c(*optional pure css based library*)

Features
--------------
:radio_button: Simple config with easy customization options

:radio_button: Optimized Production ready build

:radio_button: Component testing with Jest + SnapShot  creation

:radio_button: Hot Module Reloading

:radio_button: CSS loader support (*SASS addition with 2 lines of code*)

:radio_button: Eslint standard config 

:radio_button: A sample app using React Routerv4


Requirements
--------------
   Node 6+
   
Configuration
--------------
 - Install
 
   Clone the repository and run
   
   `npm install`
   
 - Star the development server
 
   `npm run dev`
   
   Navigate to http://localhost:8080/ to see the app running live
   
   (*port settings can be changed in webpack.config.js*)
   
 - To run the Jest testing utilities 
 
   `npm test`
   
   (*creates a new folder __snapshots__ in the respective test folder.learn more about [Snapshot Testing](https://facebook.github.io/jest/docs/snapshot-testing.html)*)
   
- To run the Production build

   `npm run build`
   
   (*creates the associated .js and .css files in the dist folder*)
    
Webpack Config
--------------

- To add a SASS loader

  `npm install sass-loader node-sass webpack --save-dev`
   
   Add the following to the  test: /\.css$/ section of webpack.config.js
   ```
  test: /\.sass$/, 
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    loader: "css-loader","sass-loader",
  })```
 
- Production Plugins

  I have added couple of plugins for production which could be customized according to your preferences.
  Choose your preferred plugins [here](https://webpack.github.io/docs/plugins.html)
  
  You can simply push the plugins in your dev/prod process through the following condition in the webpack config file.
  
  `if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new xyz plugin )
    } else {
    config.plugins.push(new xyz plugin )
    }`
    
Eslint Config
--------------
- Should you choose to not use Eslint at all,you can unistall it through npm or ignore it for a specific file by using `/* eslint-disable */` at the top of the file

- By default,I have commented out the standard eslint config for react which can be enabled by uncommenting out the code block in the .eslintrc file.
```
 /*"extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],*/
```

Bulma.io
-------------
- I have included a modern CSS framework based on Flexbox to demonstrate how you can use third party liblaries should you wish to use bootstrap/materal design in a similar way.
- You can always emove it by `npm uninstall --save bulma` 
 

Contributing
--------------
- Have a feature request you wish to see in the config file ? PR's welcomed
- Don't hesitate to log a issue if you come across any.


Licence
--------------
react-webpack-3-boilerplate is available under MIT.

    
 
 
   


