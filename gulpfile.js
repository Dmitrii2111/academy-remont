const {src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const del = require('del')
const imagemin = require('gulp-imagemin');

function server(){
  browserSync.init({
        server: {
            baseDir: "src/"
        },
        notify: true,
        open: false
    });
}

function scripts() {
    return src([
        'src/js/jquery360.js',
        'src/js/swiper-bundle.min.js',
        'src/js/jquery.validate.min.js',
        'src/js/jquery-validation-additional-methods.min.js',
        'src/js/menu.js',
        'src/js/swiper.js',
        'src/js/input.js',
        'src/js/main.js'
    ])
    .pipe(concat('script.min.js'))
    .pipe(terser({
        format: {
            comments: false
        }
    }))
    .pipe(dest('src/js'))
    .pipe(browserSync.stream())
}


function style(){
    return src('src/css/**/*.css')
    .pipe(concat('main.min.css'))
    .pipe(autoprefixer({
        cascade: true,
        overrideBrowserslist: ['last 10 versions']
    }))
    .pipe(cleanCSS())
    .pipe(dest('src/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
}
function html() {
    return src('src/**/*.html')
    .pipe(dest('dist'))
}

function watchFiles() {
    watch(['src/js/**/*.js', '!src/script.min.js'], scripts)
    watch(['src/css/**/*.css', '!src/main.min.css'], style)
    watch(['src/**/*.html']).on('change', browserSync.reload)
}

function clear() {
    return del('dist')
}
function transfer() {
    return src(['src/js/script.min.js', 'src/css/main.min.css'], {base: 'src'})
    .pipe(dest('dist'))
}

function images() {
    return src(['src/img/**/*'], {base: 'src'})
    // .pipe(imagemin([
    //     imagemin.gifsicle({interlaced: true}),
    //     imagemin.mozjpeg({quality: 75, progressive: true}),
    //     imagemin.optipng({optimizationLevel: 5}),
    //     imagemin.svgo({
    //         plugins: [
    //             {removeViewBox: true},
    //             {cleanupIDs: false}
    //         ]
    //     })
    // ]))
    .pipe(dest('dist')) 
}
exports.default = parallel( scripts, style, server, watchFiles);
exports.build = series(clear, style, scripts, html, transfer, images);