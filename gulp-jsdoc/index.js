/**测试 gulp*/
var jsdoc = require("gulp-jsdoc");
var gulp = require('gulp');
//定义项目的名称，同时在des中会生成对应的folder，便于管理多个项目
//定义项目的版本，同时会在项目的folder里面生成版本的folder，用于管理不同版本的文档
//type: []
infos = {
     name: 'jsdocdemo',
     description: '',   
     version: '0.1.0', 
     licenses: [],
     plugins: false
}

gulp.src(['./src/*.js', 'README.md'])
	.pipe(jsdoc.parser(infos))
	//.pipe(gulp.dest('./doc'))
	.pipe(jsdoc.generator('./doc'))