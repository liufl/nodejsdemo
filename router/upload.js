//var formidable = require('formidable');
var http = require("http");
//var sys = require ("sys");
var url = require("url");
/**
 * 服务器
 * @param route
 * @param handle
 */
function start(route,handle) {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;
        //var postData = "";
        console.log("Request for " + pathname + " received.");
       // request.setEncoding("utf-8");

        /*//接收数据
        request.addListener("data",function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+ postDataChunk + "'.");
        });

        //响应 处理
        request.addListener("end",function(){
            //route(handle,pathname,response);
            route(handle,pathname,response,postData);
        });*/
        route(handle,pathname,response,request);
    }

    //创建服务器
    http.createServer(onRequest).listen(8888);
        /*http.createServer(function(req,res) {
        if(req.url == '/upload' && req.method.toLowerCase() == 'post') {
            //parse a file upload
            var form = new formidable.IncomingForm();
            form.parse(req,function(err,fields,files) {
                res.writeHead(200,{'content-type':'text/plain;charset=utf-8'});
                res.write('received upload:\n\n');
                res.end(sys.inspect({fields:fields,files:files}));
            });
            return;
        }
        //show a file upload form
        res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
        res.end( '<form action="/upload" enctype="multipart/form-data"'
        + 'method="post">'
        + '<input type="text" name="title"><br>'
        + '<input type="file" name="upload" multiple="multiple"><br>'
        + '<input type="submit" value ="Upload">'
        +'</form>');

    }).listen(8888);*/
    console.log("server have start!");
}
/**
 * 请求   响应
 * @param request
 * @param response
 */

exports.start = start;

