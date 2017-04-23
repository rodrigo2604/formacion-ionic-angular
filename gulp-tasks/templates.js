var templateCache = require('gulp-angular-templatecache');
var gulp = require('gulp');

module.exports = function () {
    return gulp.src([
        './src/**/*.html'])
        .pipe(templateCache('templates.js', { module: 'formacion', root: 'src/' }))
        .pipe(gulp.dest('./www/build/html'));
};