var gulp = require('gulp'),
    connect= require('gulp-connect'),
    history=require('connect-history-api-fallback'),
    inject=require('gulp-inject'),
    wiredep=require('wiredep').stream;

gulp.task('server', function(){
  connect.server({
    root:'./app',
    port:'5000',
    livereload:true,
    middleware: function(connect, opt){
      return [history({})]
    }
  });
});

gulp.task('html', function(){
  gulp.src('./app/**/*.html')
  .pipe(connect.reload());
});

gulp.task('inject', function(){
  var sources = gulp.src(['./app/scripts/**/*.js', './app/styles/**/*.css'], {read: false});

  return gulp.src('index.html', {cwd:'./app'})
  .pipe(inject(sources, {
    relative:true
  }))
  .pipe(gulp.dest('./app'));
});

// gulp.task('inject', function () {
//   var target = gulp.src('index.html', { cwd:'./app'});
//   // It's not necessary to read the files (will speed up things), we're only after their paths:
//   var sources = gulp.src(['./app/scripts/**/*.js', './app/styles/**/*.css'], {read: false, ignorePath:'./app/'});
//
//   return target.pipe(inject(sources))
//     .pipe(gulp.dest('./app'));
// });


gulp.task('wiredep', function(){
  gulp.src('./app/index.html')
  .pipe(wiredep({
    directory:'./app/vendor',
    onError: function(err){
      console.log(err.code);
    }
  }))
  .pipe(gulp.dest('./app'));
})

gulp.task('watch-html', function(){
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/scripts/**/*.js'], ['inject']);
  gulp.watch(['./app/styles/**/*.css'], ['inject']);
  gulp.watch(['./bower.json'], ['wiredep']);
});

gulp.task('default',['server', 'watch-html', 'inject','wiredep']);
