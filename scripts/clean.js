/** @format */

const sh = require("shelljs");
const path = require("path");

const destPath = path.resolve(path.dirname(__filename), "../gh-pages");

sh.rm("-rf", `${destPath}/*`);
