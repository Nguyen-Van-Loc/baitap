exports.myDateTime = function () {
  return Date();
};
exports.tinhTong = function (a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    return "Tong hai so la " + (a + b) + '\n'

  } else if (typeof a != 'number') {
    return "Kieu du lieu khong dung" + '\n'
  }
  else {
    return "Loi khong xac dinh" + '\n'
  }
}
exports.showInfor = function (mess = 'chua co thong bao', optionalInfor) {
  if (optionalInfor instanceof String)
    return '\n' + "Thong bao in ra " + mess.toUpperCase() + optionalInfor.toUpperCase();
  else {
    return '\n' + "Thong bao in ra " + mess.toUpperCase();
  }
}
exports.NhanVien = function (masv, ten) {// object contrustor
  this.ten = ten;
  this.masv = masv;
  this.getInfor = function () {
    return `${this.masv}-${this.ten}- luong:${this.tinhLuong()}`;
  }
  this.tinhLuong = function () {
    return 9 + Math.floor(Math.random() * 10);
  }
}
