module.exports = function() {
	$.gulp.task('watch', function () {
		$.gulp.watch('src/pug/**/*.pug',$.gulp.series('pug'));
		$.gulp.watch('src/static/stylus/**/*.styl',$.gulp.series('stylus'))
	});
}