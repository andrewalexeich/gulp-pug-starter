"use strict";
import gulp from "gulp";
import yargs from "yargs";

const fs = require("fs");
const create = require("bem-tools-create");

gulp.task("page", (end) => {

    let option = yargs.argv;
    let pageName = option.pn;
    let hasModule = option.hm;

    const pageContent = `
extends ../layouts/default
block variables
    - const title = "${pageName}";
block content
    include ../../blocks/modules/${hasModule ? `${pageName}/${pageName}` : "main/main"}
block scripts
    script(src="js/vendor.js")
    script(src="js/main.js")
     `;

    if (pageName !== undefined) {
        new Promise((resolve) => {
            fs.writeFileSync(`./src/views/pages/${pageName}.pug`, pageContent);
            resolve(true);
        })
            .then(() => {
                if (hasModule) {
                    create(pageName);
                    return true;
                }
                return false;
            })
            .then((res) => {
                if (res) {
                    updateModules(pageName);
                    updateModulesJs(pageName);
                }
            })
            .catch((e) => new Error(e));
    }

    end();
});


function updateModules(moduleName) {
    fs.appendFile("./src/blocks/modules/_modules.scss", `\n@import "${moduleName}/${moduleName}";` , function (err) {
        if (err) throw err;
        console.log("Updated!");
    });
}

function updateModulesJs(moduleName) {
    fs.appendFile("./src/js/import/modules.js", `\nimport "%modules%/${moduleName}/${moduleName}";` , function (err) {
        if (err) throw err;
        console.log("Updated!");
    });
}