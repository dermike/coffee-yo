var gulp = require('gulp');
var uncss = require('gulp-uncss'),
    concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css');

gulp.task('css', function() {
  gulp.src(['bower_components/foundation/css/foundation.css', 'css/app.css'])
    .pipe(uncss({
      html: ['index.html'],
      ignore: ['.button', '.expand', '.sent', '#status']
    }))
    .pipe(concatCss("app.min.css"))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  gulp.src(['bower_components/jquery/dist/jquery.js', 'js/app.js'])
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('default', ['css', 'scripts']);