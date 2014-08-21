var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var less      = require('gulp-less');
var rename    = require('gulp-rename');
var concat    = require('gulp-concat');
var cssshrink = require('gulp-cssshrink');

// Bootstrap : Compile Bootstrap only

gulp.task('compile-bootstrap', function() {
    return gulp.src('assets/less/bootstrap/less/bootstrap.less') 
        .pipe(plumber())
        .pipe(less())
        .pipe(rename({ suffix: '.prod.min' }))
        .pipe(cssshrink())
        .pipe(gulp.dest('dist'));
});

// theme : compile, concat & minify

gulp.task('compile-concat-minify', function() {
    return gulp.src(less_path + 'theme/*.less') 
        .pipe(plumber())
        .pipe(less())
        .pipe(concat('prod.min.css')) 
        .pipe(cssshrink())
        .pipe(gulp.dest('dist'));
});

// Bootstrap : watch

gulp.task('watch-bootstrap-css', ['compile-bootstrap'], function(){
    gulp.watch('assets/less/bootstrap/less/*.less', ['compile-bootstrap']);
});

// theme : watch

gulp.task('watch-theme-css', ['compile-concat-minify'], function(){
    gulp.watch('assets/less/theme/*.less', ['compile-concat-minify']);
});

// Default task

gulp.task('default', ['compile-concat-minify', 'compile-bootstrap']);