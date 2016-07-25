var gulp = require('gulp');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var insert = require('gulp-insert');

function errorLog (error) {
    console.error.bind(error);
    this.emit('end');
}

// Uglify JS
gulp.task('uglify', function () {
    gulp.src('_js/*.js')
        .pipe(uglify())
        .on('error', errorLog)
        .pipe(insert.append('\n'))
        .pipe(gulp.dest('_scripts'));
});

// Create expanded and .min versions of styles
gulp.task('sass', function () {
    gulp.src('_sass/style.scss')
        .pipe(sass({ outputStyle: 'expanded' })
        .on('error', sass.logError))
        .pipe(gulp.dest('_styles/'))
        .pipe(rename('style.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('_styles/'))
        .pipe(livereload());
});

// Lint
gulp.task('lint', function() {
    return gulp.src('_js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('serve', function (done) {
    var express = require('express');
    var app = express();
    //path to the folder that will be served. __dirname is project root
    var path = __dirname;
    app.use(express.static(path));
    app.listen(8000, function () {
         done();
    });
});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(livereload());
});

gulp.task('watch', function () {
    gulp.watch('_js/*.js', ['lint']);
    gulp.watch('_js/*.js', ['uglify']);
    gulp.watch('_sass/*', ['sass']);
    gulp.watch('*.html', ['html']);

    livereload.listen();
});

gulp.task('open', function () {
    var url = 'http://localhost:8000';
    var OS = process.platform;
    var exectuable = '';

    //OS Specific values for opening files.
    if (OS == 'darwin') { executable = 'open ';     }
    if (OS == 'linux')  { executable = 'xdg-open '; }
    if (OS == 'win32')  { exectuable = 'explorer '; }

    //Run the OS specific command to open the url in the default browser
    require("child_process").exec( exectuable + url );
});

gulp.task('default', ['sass', 'lint', 'uglify', 'watch', 'serve', 'open']);
