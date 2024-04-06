var txtTenDN = document.getElementById("tenDN");
var txtHoTen = document.getElementById("name");

var btnDK = document.getElementById("btnDK");
var email = document.getElementById("email");
var regEmail = /^[a-zA-Z0-9]+@gmail.com$/;
var phone = document.getElementById("phone");
function kiemTraEmail() {
  if (regEmail.test(email.value) == false) {
    return false;
  }
}
// Điện thoại phải là số
function kiemTraSDT() {
  if (isNaN(phone.value) == false) {
    return false;
  }
}

btnDK.onclick = function () {
  if (
    txtTenDN.value.length < 6 ||
    kiemTraEmail() == false ||
    kiemTraSDT() == false ||
    txtHoTen.value.length == 0
  ) {
    txtHoTen.focus();
  } else {
  }
};
