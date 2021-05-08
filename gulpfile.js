const gulp=require('gulp');
const sass=require('gulp-sass');
const browserSync=require('browser-sync').create();

//compile scss into css
function style(){
    //1.where is my scss file
    return gulp.src('./scss/**/*.scss') //this will deal with all files with '.scss' inside the root
    //2.pass that file through sass compiler
    .pipe(sass().on('error',sass.logError))
    //3.where do i save the compiled css?
    .pipe(gulp.dest('./css'))
    //4.stream changes to all browser(including phone)
    .pipe(browserSync.stream());
}

function watch(){ //watch the changes and update things auto in browsers.
    browserSync.init({
        server:{
            
            baseDir:'./'
        }
        
    });
    gulp.watch('./scss/**/*.scss', style); //watch and compile the style function
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}

exports.style=style;
exports.watch=watch;