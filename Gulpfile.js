var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('styles', function() {
  gulp.src('assets/styles/main.scss')
    .pipe(sass({
        errLogToConsole: true
    }))
    .pipe(gulp.dest('assets/styles/'))
    .pipe(livereload());
});

livereload({ start: true })

//Watch task
gulp.task('default',function() {
  livereload.listen();
  gulp.watch('assets/styles/**/*.scss',['styles']);
});