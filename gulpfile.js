var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    concat = require("gulp-concat-css"),
    minifyCss = require("gulp-minify-css");

// Bootstrap : Compile Bootstrap only

gulp.task('compile-bootstrap', function() {
    gulp.src('assets/less/bootstrap/less/bootstrap.less') 
        .pipe(less())
        .pipe(concat('bootstrap.prod.min.css')) 
        .pipe(minifyCss())
        .pipe(gulp.dest('dist'));
});

// Bootstrap : watch

gulp.task('watch-bootstrap-css', function() {
    watch({
        glob: 'assets/less/bootstrap/less/*.less'
    }, function(files) {
        gulp.start('compile-bootstrap');
    });
});

// theme : compile, concat & minify

gulp.task('compile-concat-minify', function() {
    gulp.src('assets/less/theme/*.less') 
        .pipe(less())
        .pipe(concat('prod.min.css')) 
        .pipe(minifyCss())
        .pipe(gulp.dest('dist'));
});

// theme : watch

gulp.task('watch-theme-css', function() {
    watch({
        glob: 'assets/less/theme/*.less'
    }, function(files) {
        gulp.start('compile-concat-minify');
    });
});