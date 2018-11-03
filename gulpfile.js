let gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('html', () =>  {
    return gulp.src('./src/*.html')
           .pipe(gulp.dest('./dist/'))
});

gulp.task('css', () => {
    return gulp.src('./src/css/*.less')
            .pipe(less())
            .pipe(gulp.dest('./dist/css'))
});