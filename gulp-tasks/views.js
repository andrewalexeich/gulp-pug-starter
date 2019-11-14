"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import pug from "gulp-pug";
import gulpif from "gulp-if";
import htmlmin from "gulp-htmlmin";
import picture from "gulp-webp-html";
import prettify from "gulp-html-prettify";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("views", () => {
    return gulp.src(paths.views.src)
        .pipe(pug())
        .pipe(prettify())
        .pipe(picture())
        .pipe(gulpif(production, htmlmin({ collapseWhitespace: true })))
        .pipe(gulpif(production, replace(".css", ".min.css")))
        .pipe(gulpif(production, replace(".js", ".min.js")))
        .pipe(gulp.dest(paths.views.dist))
        .pipe(browsersync.stream());
});
