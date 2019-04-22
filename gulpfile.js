const gulp = require('gulp');
const scss = require('gulp-sass');
const webserver = require('gulp-webserver');
gulp.task('devScss', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('./dist/css'))
})
gulp.task('server', () => {
    return gulp.src('./web')
        .pipe(webserver({
            port: 8000,
            livereload: true,
            open: true,
            proxies: [{
                source: '/api/add',
                target: 'http//localhost:3000/api/add'
            }]
        }))
})
gulp.task('watching', () => {
    return gulp.watch('./src/**/*.scss', gulp.series('devScss'))
})
gulp.task('default', gulp.series('devScss', 'server', 'watching'));