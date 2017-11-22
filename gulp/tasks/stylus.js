module.exports = function() {
	$.gulp.task('stylus',function(){
		return $.gulp.src('src/static/stylus/main.styl')
			.pipe($.lp.sourcemaps.init())
			.pipe($.lp.stylus({
				'include css':true
			}))
			.pipe($.lp.autoprefixer({
	            browsers: ['last 2 versions']
	        }))
	        .on("error", $.lp.notify.onError({
		        message: "Error: <%= error.message %>",
		        title: "style"
	      	}))
			.pipe($.lp.csso())
			.pipe($.lp.sourcemaps.write())
			.pipe($.gulp.dest('build/static/css/'))
			.pipe($.bs.reload({
				stream:true
			}));
	});
}