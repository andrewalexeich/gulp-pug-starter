module.exports = function() {
    $.gulp.task("pug", function() {
        return $.gulp.src(["./src/views/**/index.pug", "!./src/views/blocks/*.pug"])
            .pipe($.gp.pug({pretty: true}))
            .pipe($.gp.replace("../dest/", "../"))
            .pipe($.gulp.dest("./dest/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.bs.reload);
    });
};