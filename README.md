# Overview

The Build Tool unit presents the challenge to create the tools and environment needed to start development on a project. Tooling is highly customizable and determined by the team, the project, and the technologies used. Gaining familiarity with how they work and how to use them empowers you to control all aspects of your projects and to be ready to adopt the tools of any team you join.

You will build tools using the [Webpack](https://webpack.js.org/) module bundler with [Babel](https://babeljs.io/) transpilation to bundle and transpile an existing React app. We will first be utilizing Webpack to create a production build that could be served an a real website. Then, you will utilize [Webpack-dev-server](https://webpack.js.org/configuration/dev-server/) for fast development with live-reloading. Finally, you will utilize [Gulp](https://gulpjs.com/) with [Browserify](http://browserify.org/), an older but still relevant technology for module-bundling (Browserify) and task-running (Gulp).

### Learning Goals

- [ ] Learn how to use Webpack in production mode for a React project
- [ ] Learn how to use Webpack-dev-server in development mode for fast development and live-reloading
- [ ] Utilize the proxy setting in Webpack-dev-server for utilizing an Express API server (back end) in combination with a React project (front end) for a streamlined codebase in both production and development mode
- [ ] Learn how to use Gulp with Browserify to start a project in React as an alternative tool

## Getting Started
- Install dependencies: `npm install`. We will install more dependencies for Webpack and Babel along the way.

- Once you've setup your Webpack config file (`webpack.config.js`) in the challenges below, you can create your Webpack production build by running: `npm run build`. You can then run the application server with `npm start` and view the React application on `localhost:3000`

- Once you've setup your Gulpfile in the challenges below, start the gulp build by running: `npm run gulp`

## Build Tools challenge: Webpack

After running `npm start` the server starts on port 3000, but the React app doesn't render anything. There are no tests for this unit; use whether or not your app is rendering to check if your build is working correctly.

[Webpack](https://webpack.js.org/) is a module bundler. It is the industry standard for creating a complex front-end JS project with multiple files (modules). Usually those JS files (modules) come in two types

1. ES6 modules, which are often the front end files we write. These utilize `import` and `export` statements. In a typical React project, a file might be for e.g. a React component or a Redux reducer or action creator file.
2. CommonJS modules, which are often the npm node modules we bring in to a front end codebase. These utilize `require` and `module.exports`. With Webpack, anything written for Node.js (i.e. stuff from npm) can also be placed into front end code served to the browser.

Webpack can gracefully combine and optimize projects with both type of JS modules, and serve it in a single `bundle.js` file. This is how we avoid the script tag "hell" mentioned in the lecture. Webpack also has the ability to include within the `bundle.js` file other assets like CSS styles and images, allowing for a modular code experience.

Webpack also achieves the goal of _transpilation_, which is the processing of custom file types that go beyond traditional JS or CSS. This is done using _loaders_. In particular, the loaders that particularly deal with transpiling JS code are known as Babel loaders. We will create a `webpack.config.js` file that will 

- bundle your JS and CSS files together into a `bundle.js` file.
- transpile React [JSX](https://reactjs.org/docs/introducing-jsx.html) syntax (the ability to write HTML-looking code within React code) into JS code [understandable](https://reactjs.org/docs/react-without-jsx.html) by the browser.
- transpile ES6/7/8 code into ES5 code readable by all internet users, including Internet Explorer users. About 10% of Desktop internet traffic still comes from Internet Explorer.
- transpile your [SCSS](https://sass-lang.com/) files into browser-readable CSS.



- [ ] Create a file called `webpack.config.js` in the project root directory.

- [ ] Set the `client/index.js` file as the entry.

- [ ] Set the bundle to be output as `webpack-bundle.js` in the `build/` folder. 

- [ ] Explore [Loaders](https://webpack.js.org/concepts/loaders/). Loaders can transform your JSX, inline CSS, and a lot more.

- [ ] Use a loader to transpile the JSX and ES6 in the React app.

- [ ] Use a loader to transpile and bundle the SCSS.

You can check that the app is properly bundling by opening the `index.html` in a browser. Use any error messages in the terminal and in the browser developer tools for debugging.

### Build Tools challenge: Webpack Dev Server

When developing leverage the tools webpack has to boost your productivity. Webpack gives us an external module that creates a simple server with built in live reloading. It's cool!

- [ ] Install [Webpack-Dev-Server](https://github.com/webpack/webpack-dev-server) You might need to change the `webpack.config.js` file and/or your directory structure for all files to be served properly.
- [ ] Once the webpack-dev-server is running, experiment with live reloading by making changes to the React app with your browser window open to [localhost:8080/build](http://localhost:3000/build).
- [ ] For example: change the body background-color to a nice salmon (#FFA074) and the boxes color to a bright medium orchid (#BA55D3)


## Build tools challenge: Gulp

<em>First lets uncomment the `<script>` tags in the `index.html` so that the correct bundle file is being sourced</em>.

The React application at `client/index.js` needs to be <b>browserifed</b> into the file `client/bundle.js`

- [ ] Browserify must use the `babelify` transform with the following presets:
  - `es2015`: allows transformation of ES6 code to ES5 so that all modern browsers can run the code
  - `react`: allows transformation of </b>jsx</b> syntax to normal JavaScript so that browsers can understand it
- [ ] Write a task that performs a one-time build of the bundle
- [ ] Write a task that uses `watchify` to watch the `src/index.js` file for changes and rebuild as necessary
- [ ] Extension - Modify your build task so that it <b>minifies</b> that built JavaScript
- [ ] Extension - Modify your build task so that it includes <b>source maps</b> with the minified code

The styles are written in [SCSS](http://sass-lang.com/guide), a pre-processed CSS extension that gives powerful features to CSS. They'll need to be compiled to CSS before the styles will work.

- [ ] Write a task that runs a one-time compile of the `scss/application.scss` file into `client/stylesheets/styles.css`
- [ ] Write a task that watches `scss/application.scss` for changes and recompiles to `client/styles.css` whenever the styles are changed
- [ ] Extension - Modify your build task so that it <b>minifies</b> the built CSS
- [ ] Extension - Modify your build task so that it includes <b>source maps</b> with the minified CSS

### Extensions

Go further into build tools with some of these extensions for Gulp and/or Webpack:

- [ ] Incorporate Webpack's [HMR plugin](https://webpack.github.io/docs/hot-module-replacement.html)
- [ ] Install eslint and create a Gulp task to lint all JavaScript files
- [ ] Use either tool to minify images: jpg are usually compressed before being deployed. Download some high-res images [like this bird](https://commons.wikimedia.org/wiki/Category:Colorful_birds#/media/File:Schwarzk%C3%B6pfchen.JPG) and add to the `index.html`. Use a tool to minify/compress the jpg so that load time is quicker on the `index.html`.
