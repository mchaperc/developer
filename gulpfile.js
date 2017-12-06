(function(){
  /*global -$ */
  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')();
  var browserSync = require('browser-sync');
  var reload = browserSync.reload;
  var gutil = require('gulp-util');
  var autoprefix = require('gulp-autoprefixer');
  var minifyCSS = require('gulp-minify-css');
  var cleanCSS = require('gulp-clean-css');
  var uglify = require('gulp-uglify');

  var scssDir = 'styles';
  var targetCSSDir = 'dist/styles';
  var targetJSDir = 'dist/scripts';

  gulp.task('styles', function () {
      return gulp.src(scssDir + '/*.scss')
          .pipe($.sass({
            outputStyle: 'nested', // libsass doesn't support expanded yet
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
          }))
          .pipe($.concat('main.css'))
          .pipe($.sourcemaps.write('.'))
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(gulp.dest(targetCSSDir))
          .pipe(reload({stream: true}));
  });

  gulp.task('scripts', function () {
    return gulp.src('scripts/**/*.js')
      .pipe($.sourcemaps.init())
      .pipe($.plumber())
      .pipe($.concat('main.js'))
      .pipe($.sourcemaps.write('.'))
      // .pipe(uglify())
      .pipe(gulp.dest('dist/scripts/'))
      .pipe(reload({stream: true}));
  });

  gulp.task('build', ['scripts', 'styles'], function(){});

  gulp.task('serve', ['build'], function () {
    browserSync({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['./']
      }
    });

    // watch for changes
    gulp.watch([
      '*.html',
      'scripts/**/*.js',
      'styles/*.scss'
    ]).on('change', reload);

    gulp.watch('styles/*.scss', ['styles']);
    gulp.watch('scripts/**/*.js', ['scripts']);
  });

  gulp.task('default', ['serve'], function (){});
})();
