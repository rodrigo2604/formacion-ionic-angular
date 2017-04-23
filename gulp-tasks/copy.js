var gulp = require('gulp');

module.exports = function() {
    
    return gulp.src('lib/ionic/fonts/*')
        .pipe(gulp.dest('www/build/lib/ionic/fonts'));
};
