var gulp = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  babel = require("gulp-babel"),
  cleanCSS = require("gulp-clean-css"),
  concat = require("gulp-concat"),
  htmlhint = require("gulp-htmlhint"),
  htmlmin = require("gulp-htmlmin"),
  jshint = require("gulp-jshint"),
  jsstylish = require("jshint-stylish"),
  pump = require("pump"),
  uglify = require("gulp-uglify"),
  replace = require("gulp-replace"),
  src = {
    html: "src/index.html",
    css: ["src/styles/*.css", "src/routes/**/*.css"],
    js: ["src/scripts/util.js", "src/scripts/globals.js",
    "src/routes/**/*-data.js", "src/routes/**/*-route.js",
    "src/scripts/app.js"]
  };

gulp.task("html", () => {
  return gulp.src(src.html)
    .pipe(htmlhint())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist/"));
});

gulp.task("prod-html", () => {
  return gulp.src(src.html)
    .pipe(htmlhint())
    .pipe(replace("localhost:3000", "www.executiverisk.xyz"))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist/"));
});

gulp.task("css", () => {
  return gulp.src(src.css)
    .pipe(concat("main.css"))
    .pipe(autoprefixer({browsers: ["last 2 versions"]}))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/"));
});

gulp.task("js", cb => {
  pump([
    gulp.src(src.js),
    jshint({esversion: 6}),
    jshint.reporter(jsstylish),
    concat("main.js"),
    babel({presets: ["env"]}),
    uglify(),
    gulp.dest("dist/")
  ], cb);
});

gulp.task("default", ["html", "js", "css"]);

gulp.task("prod", ["prod-html", "js", "css"]);

gulp.task("dev", ["default"], () => {
  gulp.watch(src.html, ["html"]);
  gulp.watch(src.js, ["js"]);
  gulp.watch(src.css, ["css"]);
});
