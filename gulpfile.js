//require the necessary packages for this project
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();


var config = {
    sassPath: './app/css',
    bowerDir: './bower_components'
};


//define style task
gulp.task('styles', function () {
    //define the source
    gulp.src('./app/css/app.scss')
        .pipe(sass({
            style: 'compressed',
            loadPath: [
                './app/css',
                config.bowerDir + '/bootstrap-sass/assets/stylesheets',
                config.bowerDir + '/fontawesome/scss'
            ]
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./build/fonts'));
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
        './app/css/property_module/*.scss'], ['styles'], ['icons']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

//define default task
gulp.task('default', ['styles', 'icons', 'serve']);
