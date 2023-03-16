var http = require('http');
var fs = require('fs');
var utils = require('./utils')
var student = require('./student')
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function (req, res) {
  fs.writeFile('mynewfile3.json',`{"body-parser": "^1.20.2",
"express": "^4.18.2",
"fs": "^0.0.1-security",
"http": "^0.0.1-security",
"uc": "^0.0.0-0",
"upper-case": "^2.0.2",
"url": "^0.11.0"}`, function (err) {
  if (err) throw err;
  console.log('Replaced!');
  res.end();
});

//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.filepath;
//       var newpath = 'D:/Users/' + files.filetoupload.originalFilename;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
  // fs.readFile('myjson.json', function(err, data) {
  //   res.writeHead(200, {'Content-Type': 'text/plane'});
  //   res.write(data);
  //   return res.end();
  // });
  // res.writeHead(200, { 'Content-Type': 'text/plane' });
  // res.write("Tong hai so 6+7" + utils.tinhTong(6, 7));
  // res.write("Tong hai so a+7" + utils.tinhTong('a', 7));
  // res.write("Tong hai so 7+ true" + utils.tinhTong(7, true));

  // console.log(utils.showInfor());

  // res.write(utils.showInfor());
  // res.write(utils.showInfor("Ngay 11 thang 3 nam 2023"));
  // res.write(utils.showInfor("Ngay 11 thang 3 nam 2023 " + String(" lessson 3 sever android")));

  // var nv1 = new utils.NhanVien("ph20710", "Nguyen Van A");
  // var arrNV = [];
  // arrNV.push(nv1)
  // arrNV.push(new utils.NhanVien("ph1023", "Nguyen Van N"))
  // arrNV.push(new utils.NhanVien("ph10232", "Nguyen Van R"))

  // arrNV.push(new utils.NhanVien("ph10333", "Nguyen Van H"))

  // var st = new student("hoa", '123',8)
  // var sv = [];
  // sv.push(st)
  // sv.push(new student("nam", "123",6))
  // sv.forEach((sv) => {
  //   res.write(sv.getInfor()+'\n');
  // })
  
  // arrNV.forEach((arrNV) => {
  //   res.write(arrNV.getInfor()+'\n');
  // })
  // arrNV.splice(1, 1);

  // res.write("List sau khi xoa \n")

  // arrNV.forEach((arrNV) => {
  //   res.write(arrNV.getInfor()+'\n');
  // })

  // res.write(nv1.getInfor() + "\n")

  // return res.end();

}).listen(8080);