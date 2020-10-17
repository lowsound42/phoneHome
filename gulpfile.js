const { src, dest, watch } = require("gulp")
const sass = require("gulp-sass")
const concat = require("gulp-concat")
const browserSync = require("browser-sync")

function generateCSS(cb) {
   src("./src/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
      .pipe(dest("./src/css"))

      cb()
}

function packJS(cb) {
    src("./src/scripts/**/*.js")
          .pipe(concat("bundle.js"))
            .pipe(dest("./src/build/js"))

      cb()
}


function watchFiles(cb) {

  browserSync.init({
    server:{
      baseDir: "./src",
      index: "index.html"
    }
  })
  watch('./src/*.html').on('change', browserSync.reload);
  watch('./src/styles/**/*.scss', generateCSS).on('change',browserSync.reload);
  watch('./src/scripts/**/*.js', packJS).on('change',browserSync.reload);

  cb()
}

exports.watch = watchFiles;
exports.pack = packJS;
exports.css = generateCSS;