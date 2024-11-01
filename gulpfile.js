// constant npm
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// path
const path_sass = "site/sass/*.scss"
const path_css = "site/css/"

gulp.task("converted-sass", ()=>{
    return gulp.src(path_sass)
            .pipe(
                sass().on("error", sass.logError)
            )
            .pipe(
                gulp.dest(path_css)
            )
});

gulp.task("watch", ()=>{
    gulp.watch(path_sass, gulp.parallel("converted-sass"))
});

gulp.task("default", gulp.series("converted-sass", "watch"))
