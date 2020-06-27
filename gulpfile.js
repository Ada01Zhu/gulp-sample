//gulp 的入口文件
// const fs = require('fs')
// const { Transform } = require('stream')

//基本操作
/*exports.default = () =>{
    const read  = fs.createReadStream('index.css')
    const write = fs.createWriteStream('index.min.scss')

    const transform = new Transform({
        transform: (chunk, encoding, callback) => {
            const input = chunk.toString()
            const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g, '')
            callback(null,output)
        }

    })


    read.pipe(transform).pipe(write)

    return read
}*/


//文件操作
/*const { src, dest } = require('gulp')
const cleanCss =  require('gulp-clean-css')
const rename =  require('gulp-rename')

exports.default = () =>{
    return src('src/!*.scss')
        .pipe(cleanCss())
        .pipe(rename({ extname: '.min.css'}))
        .pipe(dest('dist'))
}*/

const { src, dest } = require('gulp')
// yarn add gulp-sass --dev
const sass = require('gulp-sass')
//yarn add gulp-babel --dev
//yarn add @babel/core @babel/preset-env --dev
const babel = require('gulp-babel')

const style = () => {
    return src('src/styles/*.css', { base: 'src' })
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(dest('dist'))
}

const script = () => {
    return src('src/scripts/*.js', { base: 'src' })
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(dest('dist'))
}

module.exports = {
    style,
    script
}
