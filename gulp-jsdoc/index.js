/**���� gulp*/
var jsdoc = require("gulp-jsdoc");
var gulp = require('gulp');
//������Ŀ�����ƣ�ͬʱ��des�л����ɶ�Ӧ��folder�����ڹ�������Ŀ
//������Ŀ�İ汾��ͬʱ������Ŀ��folder�������ɰ汾��folder�����ڹ���ͬ�汾���ĵ�
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