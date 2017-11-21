'use strict';

var gulp = require('gulp'),
	lp = require('gulp-load-plugins')();

gulp.task('pug',function(){
	return gulp.src('src/pug/pages/*.pug')
		.pipe(lp.pug({
			pretty:true
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('stylus',function(){
	return gulp.src('src/static/stylus/main.styl')
		.pipe(lp.sourcemaps.init())
		.pipe(lp.stylus({}))
		.pipe(lp.autoprefixer({
            browsers: ['last 2 versions']
        }))
        .on("error", lp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "style"
      	}))
		.pipe(lp.csso())
		.pipe(lp.sourcemaps.write())
		.pipe(gulp.dest('build/static/css/'));
});

gulp.task('watch', function () {
	gulp.watch('src/pug/**/*.pug',gulp.series('pug'));
	gulp.watch('src/static/stylus/**/*.styl',gulp.series('stylus'))
});

gulp.task('default', gulp.series(
	gulp.parallel('pug','stylus'),
	'watch'
	));