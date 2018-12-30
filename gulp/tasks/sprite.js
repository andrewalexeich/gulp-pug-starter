module.exports = function() {
    $.gulp.task("sprite", function() {
        return $.gulp.src("./src/img/icons/svg/*.svg")
            //.pipe($.replace("&gt;", ">"))
            .pipe($.svgSprite({
				preview: false,
                cssFile: "../src/styles/partials/_sprite.scss",
				svg: {
					sprite: "img/sprites/sprite.svg"
				}
            }))
            .pipe($.gulp.dest("./dest/"))
            .pipe($.debug({"title": "sprite"}));
    });
};
