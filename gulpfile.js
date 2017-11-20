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
		.pipe(lp.stylus({}))
		.pipe(lp.csso())
		.pipe(gulp.dest('build/static/css/'));
});