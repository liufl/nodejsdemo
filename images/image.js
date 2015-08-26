var qr = require('qr-image');
var num = 1;
var image = require("./combine.js");

//生成一张
// result(num);

//批量合成
for(;num <10;num ++){
	create(num);

	combine(num);
}


function create(num) {
	//二维码
	var url = 'http://user.qzone.qq.com/602182699/main?number='+ num;
	var qr_png = qr.image(url,{type:'png'});
	qr_png.pipe(require('fs').createWriteStream("qrcode/" + num + '.png'));
	console.log("create : " + num);
}
function combine(num) {
	//合成
	var img = new image.image();
	img.comImage(num,'bt.png',"" + num + '.png',"5.png");
	console.log("complate : " + num);
}