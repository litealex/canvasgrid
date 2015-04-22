var gulp = require('gulp');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var browserify = require('gulp-browserify');
var copy = require('gulp-copy');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');

gulp.task('copy', function(){
    gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('jshint', function(){
    gulp.src('./src/js/**/*.*')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('less', function(){
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('browserify', function(){
    gulp.src('./src/js/grid.js')
        .pipe(browserify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('dev', function(){
    gulp.watch('src/**/*.*', ['default']);
});

gulp.task('default',['jshint', 'browserify', 'copy', 'less']);



