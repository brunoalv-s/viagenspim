'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
require('es6-promise').polyfill();
var cssComb = require('gulp-csscomb');
var cleanCss = require('gulp-clean-css');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imageMin = require('gulp-imagemin');
var cache = require('gulp-cache');
var notify = require('gulp-notify');

// Concatena e minifica todos os arquivos .scss na ordem e joga um .css na pasta css
gulp.task('sass',function(){
	gulp.src(['app/assets/scss/**/*.scss'])
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoPrefixer('last 2 versions', 'safari 5', 'ie6', 'ie7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(cssComb())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('app/assets/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(cleanCss())
		.pipe(gulp.dest('app/assets/css'))
});

// Concatena e minifica todos os arquivos na ordem de leitura da pasta vendor com o main.js
gulp.task('js',function(){
	gulp.src(['app/assets/js/vendor/*.js', 'app/assets/js/main.js'])
		.pipe(plumber())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('app/assets/js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/assets/js'))
		.pipe(browserSync.reload({stream: true}))
		.pipe(notify('Javascript Compilado'))
});

// Comprime as imagens da pasta img/src e joga na pasta img/dist
// gulp.task('image',function(){
// 	gulp.src(['app/assets/img/src/**/*'])
// 		.pipe(plumber())
// 		.pipe(cache(imageMin()))
// 		.pipe(gulp.dest('app/assets/img/dist'))
// 		.pipe(notify('Imagens Otimizadas'))
// });

// Recarrega a página após um HTML ser salvo
gulp.task('html',function(){
	gulp.src(['app/**/*.html'])
		.pipe(plumber())
		.pipe(browserSync.reload({stream: true}))
});

// Recarrega e injeta o CSS na página
gulp.task('reloadCSS',function(){
	gulp.src(['app/assets/css/**/*.css'])
		.pipe(plumber())
		.pipe(browserSync.stream({match: "**/*.css"}))
		.pipe(notify('CSS Compilado'))
})

// Task Default
gulp.task('default',function(){
	browserSync.init({
		server: "app"
	});
	gulp.watch('app/assets/js/main.js',['js']);
	gulp.watch('app/assets/scss/**/*.scss',['sass']);
	gulp.watch('app/**/*.html',['html']);
	gulp.watch('app/assets/css/main.min.css', ['reloadCSS']);
	// gulp.watch('app/assets/img/src/**/*',['image']);
});
