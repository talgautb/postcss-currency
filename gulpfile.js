let gulp = require('gulp');
let mocha = require('gulp-mocha');

let files = ['index.js', 'test/*.js', 'gulpfile.js'];

function test() {
  return gulp.src('test/*.js', { read: false }).pipe(mocha());
}

function watch() {
  gulp.watch(files, test);
}

exports.watch = watch;
exports.default = test;
