module.exports = function() {
    $.gulp.task("html", function() {
        return $.gulp.src("./src/views/**/*.pug")
            .pipe($.gp.pug({pretty: true}))
            .pipe($.gp.replace("../dest/", "../"))
            .pipe($.gulp.dest("./dest/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.bs.reload);
    });
};