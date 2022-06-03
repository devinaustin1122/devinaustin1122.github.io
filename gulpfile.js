import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

gulp.task("sass", function () {
  return gulp
    .src("scss/styles.scss")
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest("public"));
});
