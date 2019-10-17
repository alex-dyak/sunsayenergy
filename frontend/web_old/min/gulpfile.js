'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    debug = require('gulp-debug'),
    terser = require('gulp-terser'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require("gulp-rename");


gulp.task('run', function() {
    gulp.task('js');
    gulp.task('css');
});


gulp.task('js', function() {
  return gulp.src([
            './frontend/web/js/lib/jquery.min.js',
            './frontend/web/js/lib/jquery.maskedinput.js',
            './frontend/web/js/lib/slick.min.js',
            './frontend/web/js/lib/snap.svg-min.js',
            './frontend/web/js/lib/TweenMax.min.js',
            './frontend/web/js/lib/ScrollMagic.min.js',
            './frontend/web/js/lib/animation.gsap.min.js',
            './frontend/web/js/googlemap.js',
            './frontend/web/js/onclickanimation.js',
            './frontend/web/js/onscrollanimation.js',
            // './frontend/web/js/popup.js',
            './frontend/web/js/sendquestion.js',
            './frontend/web/js/slider.js',
            './frontend/web/js/types.js',
            './frontend/web/js/app.js',
            './frontend/web/js/jquery.lazy-load-google-maps.min.js'
        ])
    // .pipe(debug({title: 'js:'}))
    .pipe(terser())
    .pipe(concat('main.js'))
    // .pipe(debug({title: 'jsconcat:'}))
    .pipe(gulp.dest('min'))
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(gulp.dest('min'));
});

gulp.task('jsm', function() {
  return gulp.src([
            './frontend/web/js/lib/jquery.min.js',
            './frontend/web/js/lib/jquery.maskedinput.js',
            './frontend/web/js/lib/slick.min.js',
            './frontend/web/js/lib/snap.svg-min.js',
            './frontend/web/js/googlemap.js',
            // './frontend/web/js/popup.js',
            './frontend/web/js/sendquestion.js',
            './frontend/web/js/slider.js',
            './frontend/web/js/types.js',
            './frontend/web/js/app.js',
            './frontend/web/js/jquery.lazy-load-google-maps.min.js'

        ])
    // .pipe(debug({title: 'js:'}))
    .pipe(terser())
    .pipe(concat('main-mob.js'))
    // .pipe(debug({title: 'jsconcat:'}))
    .pipe(gulp.dest('min'))
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(gulp.dest('min'));
});


gulp.task('css', function () {
    return gulp.src([ 
                        'frontend/web/style/lib/normalize.css',
                        'frontend/web/style/lib/slick-theme.css',
                        'frontend/web/style/lib/slick.css',
                        'min/main.css',
                    ])
        .pipe(autoprefixer())
        .pipe(concat('all.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('min'));
});



