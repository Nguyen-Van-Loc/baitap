var http = require('http');
var uc =require('upper-case');
var utils =require('./utils')
var url = require('url');
var date =function () {
    return Date().toUpperCase();
}
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Bo can tat\t \n')
  res.write('Bo can tat\t \n')
  res.write('Bo can tat\t \n'+ date())
  res.write('Thoi gian hien tai\t \n'+ utils.myDateTime()+"\n")
  res.write(uc.upperCase('Bo can tat\t \n'))

  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt);
  res.end();
}).listen(8000);// 8000 3000 3030 8800