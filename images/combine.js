var fs = require('fs'),
	gm = require('gm');
function combineImage() {
	this.comImage = function (num,first,second,third){
		var writeStream = fs.createWriteStream("combine/" + num +".png")
		gm(first).append("qrcode/" + second)
			.draw("image Over 72,72 40,40 '"+ third +"'")
			.stream()
			.pipe(writeStream);
	}
}
	
exports.image = combineImage;
	