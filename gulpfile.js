//require the necessary packages for this project
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

//define style task
gulp.task('styles', function () {
    //define the source
    gulp.src('./app/css/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream:true}));
});

//define server task
gulp.task('serve', function () {
    //initialize browserSync method
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['./app/css/*.scss',
        './app/css/buyers_details_module/*.scss',
        './app/css/buyers_offer_module/*.scss',
        './app/css/footer_module/*.scss',
        './app/css/header_module/*.scss',
        './app/css/negotiations_module/*.scss',
        './app/css/property_module/*.scss'], ['styles']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

//define default task
gulp.task('default', ['styles', 'serve']);
