const gulp = require('gulp');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const sassify = require('sassify');
const nodemon = require('gulp-nodemon');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const path = require('path');

const sourceFile = path.join(__dirname, '/client/index.js');
const destFile = 'bundle.js';
const destFolder = path.join(__dirname, 'build');

gulp.task('browserify-prod', function () {
  return browserify(sourceFile)
  .transform(babelify, {presets: ['@babel/env', '@babel/react']})
  .transform(sassify)
  .bundle()
  .pipe(source(destFile))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest(destFolder));
});

gulp.task('browserify-dev', function () {
  const bundler = watchify(browserify({entries: [sourceFile], cache: {}}));
  bundler.on('update', () => bundle());
  bundler.on('error', console.error);
  
  function bundle() {
    return bundler.transform(babelify, {presets: ['@babel/env', '@babel/react']})
      .transform(sassify)
      .bundle()
      .pipe(source(destFile))
      .pipe(gulp.dest(destFolder))
  }
  
  return bundle();
});

gulp.task('serve', function () {
  nodemon({script: 'server/server.js'});
});

gulp.task('dev', ['browserify-dev', 'serve']);
gulp.task('prod', ['browserify-prod']);
