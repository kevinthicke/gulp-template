let gulp = require('gulp');

gulp.task('html', () =>  {
    return gulp.src('./src/*.html')
           .pipe(gulp.dest('./dist'))
});