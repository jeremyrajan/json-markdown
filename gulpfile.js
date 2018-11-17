'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const updateCheck = require('update-notifier');
const packageJSON = require('./package.json');
const execSync = require('child_process').execSync;

gulp.task('lint', () => {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', ['lint'], () => {
  return gulp.watch(paths.scripts, ['test']);
});

gulp.task('deploy', () => {
  updateCheck({
    pkg: packageJSON,
    updateCheckInterval: 0,
    callback: (err, update) => {
      if (err) {
        return err;
      }
      if (update.current !== update.latest) {
        try {
          execSync('npm publish');
        } catch (error) {
          return err;
        }
      } else {
        return console.log('Nothing to deploy.');
      }
    }
  });
});


gulp.task('default', ['lint']);
