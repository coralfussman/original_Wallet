
## Build tools challenge
You may have noticed by now that although your server is starting up on port 3000, the React app isn't quite working... This is because we haven't provided you with any working **build tools** for this project. That's right, you'll need to setup the build tools for this project yourself before you can even start. Using the build tool of your choice, write tasks to complete the following challenges:

The React application at `src/index.js` needs to be **browserifed** into the file `client/bundle.js`

- [ ] Browserify must use the `babelify` transform with the following presets:
  - `es2015`: allows transformation of ES6 code to ES5 so that all modern browsers can run the code
  - `react`: allows transformation of **jsx** syntax to normal JavaScript so that browsers can understand it
- [ ] Write a task that performs a one-time build of the bundle
- [ ] Write a task that uses `watchify` to watch the `src/index.js` file for changes and rebuild as necessary
- [ ] Extension - Modify your build task so that it **minifies** that built JavaScript
- [ ] Extension - Modify your build task so that it includes **source maps** with the minified code

The styles are written in [SCSS](http://sass-lang.com/guide), a pre-processed CSS extension that gives powerful features to CSS. They'll need to be compiled to CSS before the styles will work.

- [ ] Write a task that runs a one-time compile of the `scss/application.scss` file into `client/styles.css`
- [ ] Write a task that watches `scss/application.scss` for changes and recompiles to `client/styles.css` whenever the styles are changed
- [ ] Extension - Modify your build task so that it **minifies** the built CSS
- [ ] Extension - Modify your build task so that it includes **source maps** with the minified CSS

