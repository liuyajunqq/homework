var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
gulp.task('websserver',function(){
    gulp.src('./')
        .pipe(webserver({
            port: 8090,
            host: 'localhost',
            livereload: true,
            directoryListing: {
                path: './',
                enable: true
            },
            open: true
        }));
    gulp.src('./css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./file/'));
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./file/'));
    gulp.src('./*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('./file/'));
});