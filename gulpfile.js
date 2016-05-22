var gulp = require('gulp');

// Include Plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');

// compile, post, minify
gulp.task('style', function() {
    return gulp.src('_sass/style.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('_styles/'))
        .pipe(rename('style.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('_styles/'));
});

// lint
gulp.task('lint', function() {
    return gulp.src('_scripts/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// watch
gulp.task('watch', function() {
    gulp.watch('_scripts/*.js', ['lint']);
    gulp.watch('_sass/*.sass', ['style']);
});

// default
gulp.task('default', ['style', 'lint', 'watch']);
