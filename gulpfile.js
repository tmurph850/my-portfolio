// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');

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

// Default Task
gulp.task('default', ['mincss', 'minify']);