var gulp = require('gulp'),
  browserify = require('gulp-browserify'),
  babel = require('gulp-babel');

gulp.task('react-scripts', function() {
  gulp
    .src(['app/main.js'])
    .pipe(
      browserify({
        debug: true,
        transform: ['reactify']
      })
    )
    .pipe(
      babel({
        presets: ['es2015', 'react'],
        compact: false
      })
    )
    .pipe(gulp.dest('./public/assets.js/'));
});

gulp.task('default', ['react-scripts']);
