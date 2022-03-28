## Welcome to our project on reactjs( Frontend )

## Contributors

-- Shubham Prajapati
-- Sahil Yadav
-- Anusha Mk

## Mentor

-- Vishal Patil Sir . A very special thanks to our mentor Vishal Patil sir for always been there to help us whenever we needed his guidance. Because of his guidance and provided path, we were able to complete the project.

## Node version and npm version

This can be seen by typing "node -v" in the terminal
-- node -v or node -version
We have worked on version v16.14.1

-- npm -v or npm -version
We have worked on 8.5.0

## Brief about the project

In this project, we are making a simple login page where the user is expected to enter the email along with the password to access the login page. Futher login page, there is an upload page which accepts only Excel file and the upload button and upload page are designed in a way that they only select Excel files from the system. Further, once the file is being selected by the user, the name of the excel file is displayed and the predefined set of processing functions that are supposed to be done on the uploaded excel file gets executed and the user is shown the results. In all these functions, the user is logged in to all the functions. The user don't have to login at each step.

### Packages installed and imported for the project

It all starts with the installation of the node in the system and then configuring it with the Vscode and along with node, the reactjs will automativcally gets installed in Vscode.

-- npx i create-react-app appname
The above command will help to create a react app

-- cd my-app
-- npm start
These commands are used to initialize the project of reactjs and it will start the server with the following command.
When the npm start command is used, then it initialize react, react-dom, and react-scripts
-- http://localhost:3000/
This is the local host where the created app will be displayed.

-- npm uninstall -g create-react-app
The above command can be used to uninstall the undesired app from running.

-- npm install --save bootstrap
This is used to install bootstrap in the app.

-- npm install reactstrap react react-dom
This is used to install the reactstrap in the application.

-- npm install react-router-dom
React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them.

-- import React from "react"

-- import { BrowserRouter as Router, Route, Routes } from "react-router-dom".
This is used after installing the react-router-dom package.

-- import \* as XLSX from "xlsx";
It is used to access the excel file for the project.

-- import reportWebVitals from "./reportWebVitals"
This function is fired when the final values for any of the metrics have finished calculating on the page. We can use it to log any of the results to the console or send to a particular endpoint.

## Extensions used for smooth functioning of Code and running of reactjs

# Auto Close Tag

-- Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text

# Babel Javascript

-- JavaScript syntax highlighting for ES201x, React JSX, Flow and GraphQL.

# Code Runner

-- Run C, C++, Java, JS, PHP, Python, Perl, Ruby, Go, Lua, Groovy, PowerShell, CMD, BASH, F#, C#, VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml, R, AppleScript, Elixir, VB.NET, Clojure, Haxe, Obj-C, Rust, Racket, Scheme, AutoHotkey, AutoIt, Kotlin, Dart, Pascal, Haskell, Nim,

# Bracket Pair Coloniser

-- A customizable extension for colorizing matching brackets

# Auto Rename Tag

-- Auto rename paired HTML/XML tag

# VS Code ES7 React/Redux/React-Native/JS snippets

-- Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax (forked from dsznajder)

# ESLint

-- Integrates ESLint JavaScript into VS Code.

# VS Code JavaScript (ES6) snippets

-- Code snippets for JavaScript in ES6 syntax

# Line Server

-- Launch a development local Server with live reload feature for static & dynamic pages

# Prettier Formatter for Visual Studio Code

-- Code formatter using prettier

# vscode-icons

-- Icons for Visual Studio Code

# yarn

-- Yarn commands for VSCode

### "axios.js"

This section is mainly used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations. This popular library is used to communicate with the backend. Axios supports the Promise API, native to JS ES6.

### Page\Login

This section accepts the frontend user to access the first (Login) Page with the credentials Email and Password and to further contact the webpages of the project. This is the first page of the project.

### Uploadxl

This section is used to accept the Excel file provided by the user. This page has been restricted to accept only excel files and displays it to user with its name for the clarity. Further, the page is used to process the uploaded excel file and provide the user with the output so that the user can see the processed file after uploading.

### Nomatch

This is the 404 error page created to be displayed to the user whenever the user tries to access the unauthorized or not specified stuffs and pages.

### App.js

This is the main page which is used to interconnect all the required important files which each other. This is the page where the other pages like "Login", "Uploadxl", "Nomatch" files are imported and used to deploy. This page is created with the folowing functionality.
-- First, it will import all the other files, namely, Login, Uploadxl and Nomatch which are relevant for our project.
-- First, it will open the Login page and when the entered details criteria is matched, then it will move to uploadxl page which will display the uploading button.
-- After, that when the file is uploaded, then it will perform the pre defined sets of instructions on the uploaded file and will be displayed to the user.
-- It the user tries to access or provide any instructions that are not in the bound of this project, then that instructions will lead the user to the "404 error page".

### Home.js

This is the home page which contain login button to proceed to login for the use of the app and the home button is present in every consecutive page like login and upload excel file page so that the user can directly jump to the home page.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
