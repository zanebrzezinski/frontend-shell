var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();
var plumber = require('gulp-plumber');

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('styles/*.scss')
                // .pipe(plumber())
                .pipe(sass())
                .pipe(gulp.dest('styles'))
                .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("styles/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});
