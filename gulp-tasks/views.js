"use strict";

import gulp from "gulp";
import pug from "gulp-pug";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("views", () => {
    return gulp.src(["./src/views/index.pug", "./src/pages/*.pug"])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulpif(production, replace("main.css", "main.min.css")))
        .pipe(gulpif(production, replace("main.js", "main.min.js")))
        .pipe(gulp.dest("./dist/"))
        .on("end", browsersync.reload);
});