var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

var config = {
    out: "dist/js",
    src: "src/js/*.*"
};

gulp.task("copy", function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.out));
});

gulp.task("minify", function () {
    return gulp.src(config.src)
        .pipe(uglify({ preserveComments: "license" }))
        .pipe(rename("bootstrap.message.min.js"))
        .pipe(gulp.dest(config.out));
});

gulp.task("default", ["copy", "minify"], function () {
});