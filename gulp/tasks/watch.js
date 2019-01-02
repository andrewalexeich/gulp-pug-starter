module.exports = function() {
    $.gulp.task("watch", function() {
        return new Promise((res, rej) => {
            $.watch(["./src/views/**/*.pug", "!./src/views/blocks/*.pug"], $.gulp.series("pug"));
            $.watch("./src/styles/**/main.scss", $.gulp.series("styles"));
            $.watch(["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/icons/svg/*.svg", "!./src/img/favicons/*.{jpg,jpeg,png,gif}"], $.gulp.series("images"));
            $.watch("./src/js/**/*.js", $.gulp.series("scripts"));
            res();
        });
    });
};