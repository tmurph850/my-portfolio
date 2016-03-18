// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

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

gulp.task('default', () => {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});


// Default Task
gulp.task('default', ['mincss', 'minify', 'default']);