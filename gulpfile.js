let gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch');

gulp.task('html', () =>  {
    return gulp.src('./src/*.html')
           .pipe(gulp.dest('./dist/'))
});

gulp.task('css', () => {
    return gulp.src('./src/css/*.less')
            .pipe(less())
            .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function() {
    gulp.watch('src/css/*.less', ['css']);
    gulp.watch('src/*.html', ['html']);
});
