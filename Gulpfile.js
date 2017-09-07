var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

//definir una tarea para gulp con task(define una nueva tarea)
gulp.task('styles', function(){
	gulp
		.src('index.scss')//empieza desde este archivo
		.pipe(sass())//pasa el archivo por el pre-procesador sass
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));//con el archivo procesado, donde se pone

})

gulp.task('default', ['styles'])