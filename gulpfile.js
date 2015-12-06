var gulp = require('gulp');
var bower = require('gulp-bower');
var runSequence = require('run-sequence');
var del = require('del');
var ghPages = require('gulp-gh-pages');

var DEPLOY_DIR = 'dist'

gulp.task('clean', function () {
  return del(DEPLOY_DIR, {force: true});
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(DEPLOY_DIR + '/bower_components'))
});

gulp.task('copy', function() {
  return gulp.src([
    '_includes/**/*', '_layouts/**/*', '_sass/**/*', 'css/**/*', 'img/**/*', 'js/**/*',
    '*.md', '*.html', '_config.yml', 'feed.xml'
  ], {base: '.'}).pipe(gulp.dest(DEPLOY_DIR));
});

gulp.task('build', function(cb) {
  runSequence('clean',
              ['bower', 'copy'],
              cb);
});

gulp.task('deploy', ['build'], function() {
  return gulp.src(DEPLOY_DIR + '/**/*')
    .pipe(ghPages({}));
});
