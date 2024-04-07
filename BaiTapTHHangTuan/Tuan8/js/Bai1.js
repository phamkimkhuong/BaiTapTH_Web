var txtDN = document.getElementById("txtDN");
txtDN.innerHTML = "cc";
var txtMK = document.getElementById("txtMK");
var txtXNMK = document.getElementById("txtXNMK");
var txtName = document.getElementById("txtName");
var date = document.getElementById("date");
var txtDC = document.getElementById("txtDC");
var txtSDT = document.getElementById("txtSDT");
var txtEmail = document.getElementById("txtEmail");
var btnDK = document.getElementById("btnDK");
var one = document.getElementById("one");
var two = document.getElementById("tow");
function checkDN() {
  var reg = /^[a-zA-Z][a-zA-Z0-9@!#$%&]*$/;
  if (checkBatBuocNhap(txtDN, one)) {
    if (reg.test(txtDN.value)) {
      one.innerHTML = "*";
      return true;
    } else {
      one.innerHTML = "Tên đăng nhập không hợp lệ";
      return false;
    }
  }
}

// Mật khẩu: từ 8 ký tự trở lên, có ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt

function checkMK() {
  var reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%&])[A-Za-z\d@!#$%&]{8,}$/;
  if (checkBatBuocNhap(txtMK, two)) {
    if (reg.test(txtMK.value)) {
      two.innerHTML = "*";
      return true;
    } else {
      two.innerHTML = "Mật khẩu không hợp lệ";
      return false;
    }
  }
}

// Nhập lại mật khẩu phải giống Mật khẩu

function checkXNMK() {
  var three = document.getElementById("three");
  if (checkBatBuocNhap(txtXNMK, three)) {
    if (txtXNMK.value == txtMK.value) {
      three.innerHTML = "*";
      return true;
    } else {
      three.innerHTML = "Mật khẩu không khớp";
      return false;
    }
  }
}
function checkBatBuocNhap(a, b) {
  if (a.value == "") {
    b.innerHTML = "Bắt buộc nhập";
    return false;
  }
  return true;
}
// Họ tên: Phải có ít nhất Họ, Tên. Ký tự đầu bắt buộc phải viết hoa
function checkName() {
  var four = document.getElementById("four");
  if (checkBatBuocNhap(txtName, four)) {
    var reg = /^[A-Z][a-z]+(\s[A-Z][a-z])+$/;
    if (reg.test(txtName.value)) {
      four.innerHTML = "*";
      return true;
    } else {
      four.innerHTML = "Có ít nhất Họ, Tên. Ký tự đầu phải viết hoa";
      return false;
    }
  }
}
// Ngày tháng năm sinh phải trên 16 tuổi
function checkDate() {
  var five = document.getElementById("five");
  if (checkBatBuocNhap(date, five)) {
    var d = new Date(date.value);
    var today = new Date();
    if (today.getFullYear() - d.getFullYear() >= 16) {
      five.innerHTML = "*";
      return true;
    } else {
      five.innerHTML = "Tuổi phải trên 16";
      return false;
    }
  }
}
// Địa chỉ không được để trống
function checkDC() {
  var six = document.getElementById("six");
  if (checkBatBuocNhap(txtDC, six)) {
    six.innerHTML = "*";
    return true;
  }
}
//Điện thoại: là số điện thoại 10 ký tự số, bắt đầu là 09, 03, 07, 06, 05, 04
function checkSDT() {
  var seven = document.getElementById("seven");
  if (checkBatBuocNhap(txtSDT, seven)) {
    var reg = /^(09|03|07|06|05|04)[0-9]{8}$/;
    if (reg.test(txtSDT.value)) {
      seven.innerHTML = "*";
      return true;
    } else {
      seven.innerHTML = "Phải là số";
      return false;
    }
  }
}
// Email: luôn đúng định dạng của địa chỉ email
function checkEmail() {
  var eight = document.getElementById("eight");
  if (checkBatBuocNhap(txtEmail, eight)) {
    var reg = /^[a-zA-Z0-9]+@gmail.com$/;
    if (reg.test(txtEmail.value)) {
      eight.innerHTML = "*";
      return true;
    } else {
      eight.innerHTML = "Nhập đúng đia chỉ Email";
      return false;
    }
  }
}

btnDK.onclick = function () {
  if (
    checkDN() &&
    checkMK() &&
    checkXNMK() &&
    checkName() &&
    checkDate() &&
    checkDC() &&
    checkSDT() &&
    checkEmail()
  ) {
    alert("Đăng ký thành công");
  } else {
    alert("Đăng ký thất bại");
  }
};
