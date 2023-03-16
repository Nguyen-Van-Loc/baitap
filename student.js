module.exports = class Student {
    constructor(ten, masv, diemTb) {
        this.ten = ten;
        this.masv = masv;
        this.diemTb = diemTb;
    }
    getInfor = function () {
        return `${this.masv}-${this.ten}- Diem tb :${this.diemTb1()}`
    }
    diemTb1 = function () {
        return 1 + Math.floor(Math.random() * 10)
    }
}