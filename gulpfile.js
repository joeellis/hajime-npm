var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');

var paths = {
  src_scripts: 'src/js/**/*.coffee',
  build_scripts: 'build/js/**/*.coffee'
};

gulp.task('clean', function() {
  return gulp.src(paths.build_scripts, {read: false})
    .pipe(clean());
})

gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.src_scripts, {read: false})
    .pipe(coffee())
    .pipe(gulp.dest('build/js'))
    .pipe(concat('index.js'))
    .pipe(browserify())
    .pipe(gulp.dest('./'));

});

gulp.task('watch', function() {
  gulp.watch(paths.src_scripts, ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);