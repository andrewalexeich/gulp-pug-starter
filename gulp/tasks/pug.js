module.exports = function() {
    $.gulp.task("pug", function() {
        return $.gulp.src(["./src/views/**/index.pug", "!./src/views/blocks/*.pug"])
            .pipe($.pug({pretty: true}))
            .pipe($.gulp.dest("./dest/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.browsersync.reload);
    });
};