const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const cssnano = require("gulp-cssnano");
const browserSync = require("browser-sync").create();
const image = require("gulp-image");
const del = require("del");

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
});

gulp.task("sass", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("sass:build", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("js", function () {
  return gulp
    .src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("js:build", function () {
  return gulp.src("src/js/**/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
});

gulp.task("image", function () {
  return gulp
    .src("src/images/**/*")
    .pipe(image())
    .pipe(gulp.dest("dist/images"));
});

gulp.task("clean", function () {
  return del(["dist/**", "!dist"]);
});

gulp.task("watch", function () {
  gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("src/js/**/*.js", gulp.series("js", browserSync.reload));
  gulp.watch("*.html", browserSync.reload);
  gulp.watch("src/images/**/*", gulp.series("image"));
});

exports.default = gulp.parallel("sass", "browser-sync", "js", "image", "watch");
exports.build = gulp.series("clean", "js:build", "sass:build", "image");
