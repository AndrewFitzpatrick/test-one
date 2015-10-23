var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('default', ['build'], function() {
  // place code for your default task here
});

gulp.task('build', ['sass']);

/**
 * Compile our SCSS files
 */

gulp.task('sass', function () {
  var stream = gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    return stream;
});