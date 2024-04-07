var txtName = document.getElementById("txtName");
var btnDk = document.getElementById("btnDK");
var i = 0;
txtName.focus();
// lấy giá trị từ input radio
var radio = document.getElementsByName("radio");
// lấy giá trị từ select option
var select = document.getElementById("select");
var select2 = document.getElementById("select2");

// Họ tên bắt buộc nhập, chữ hoa đầu mỗi từ, dùng regex
txtName.onblur = function () {
  var pattern = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
  if (!pattern.test(txtName.value)) {
    alert("Họ tên phải có chữ hoa đầu mỗi từ");
    btnDk.disabled = true;
  } else btnDk.disabled = false;
};
// người dùng click nút đăng ký, thông tin được thêm vào bảng.
btnDk.onclick = function () {
  i++;
  var table = document.getElementById("tbl");
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = txtName.value;
  cell2.innerHTML = select.value;
  cell3.innerHTML = select2.value;
  if (radio[0].checked) cell4.innerHTML = radio[0].value;
  else cell4.innerHTML = radio[1].value;
  txtName.value = "";
  txtName.focus();
  btnDk.disabled = true;
};
