// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Minify CSS
gulp.task('mincss', function() {
    return gulp.src('css/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./dist'));
});

// Minify HTML
gulp.task('minify', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

// Minify JavaScript
gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
});


// Default Task
gulp.task('default', ['lint', 'mincss', 'minify', 'watch','compress']);