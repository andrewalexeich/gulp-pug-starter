module.exports = function() {
    $.gulp.task("watch", function() {
        return new Promise((res, rej) => {
            $.gp.watch(["./src/views/**/index.pug", "!./src/views/blocks/*.pug"], $.gulp.series("pug"));
            $.gp.watch("./src/styles/**/main.scss", $.gulp.series("styles"));
            $.gp.watch(["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/icons/svg/*.svg", "!./src/img/favicons/*.{jpg,jpeg,png,gif}"], $.gulp.series("images"));
            $.gp.watch("./src/img/icons/svg/*.svg", $.gulp.series("iconfont"));
            $.gp.watch("./src/js/**/main.js", $.gulp.series("scripts"));
            res();
        });
    });
};