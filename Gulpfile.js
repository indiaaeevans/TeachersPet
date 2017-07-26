var gulp = require('gulp'), 
browserify = require('gulp-browserify'), 
babel = require('gulp-babel'); 

gulp.task('react-scripts', function() {
  gulp.src(['app/main.js'])
  .pipe(browserify({
    debug: true, 
    transform: ['reactify']
  }))
  .pipe(babel({
    presets: ['es2015', 'react'], 
    compact: false 
  }))
  .pipe(gulp.dest('./public/javascript/')); 
}); 

gulp.task('client-scripts', function() {
  gulp.src(['public/tmp/index.js'])
  .pipe(babel({
    presets: ['es2015'],
    compact: false 
  }))
  .pipe(gulp.dest('./public/javascript/')); 
}); 

gulp.task('default', ['react-scripts','client-scripts']); 
