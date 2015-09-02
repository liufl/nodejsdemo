var date = new Date();

var str = date.toString();
console.log(str);
var datelocalstr = date.toLocaleString();
console.log(datelocalstr);
var datelocaledatestr = date.toLocaleDateString( );
console.log(datelocaledatestr);
var datelocaletimestr = date.toLocaleTimeString( );
console.log(datelocaletimestr);

var datestr = date.toDateString( );
console.log(datestr);
var dateUTCstr = date.toUTCString();
console.log(dateUTCstr);

