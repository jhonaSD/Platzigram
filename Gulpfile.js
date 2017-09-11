var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

//definir una tarea para gulp con task(define una nueva tarea)
gulp.task('styles', function(){
	gulp
		.src('index.scss')//empieza desde este archivo
		.pipe(sass())//pasa el archivo por el pre-procesador sass
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));//con el archivo procesado, donde se pone

})

gulp.task('assets', function(){
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'));
})

gulp.task('scripts', function(){
	browserify('./src/index.js')
		.transform(babel)
		.bundle()
		.pipe(source('index.js')) //source transforma el resultado de bundle() por browserify para que lo entiende gulp
		.pipe(rename('app.js'))
		.pipe(gulp.dest('public'));
})

gulp.task('default', ['styles', 'assets', 'scripts'])