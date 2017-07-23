var gulp = require('gulp'), 
browserify = require('gulp-browserify'), 
babel = require('gulp-babel'); 

gulp.task('scripts', function() {
  gulp.src(['app/main.js'])
  .pipe(browserify({
    debug: true, 
    transform: ['reactify']
  }))
  .pipe(babel())
  .pipe(gulp.dest('./public/javascript/')); 
}); 

gulp.task('scripts', function() {
  gulp.src(['public/tmp/index.js'])
  .pipe(babel())
  .pipe(gulp.dest('./public/javascript/')); 
}); 

gulp.task('default', ['scripts']); 