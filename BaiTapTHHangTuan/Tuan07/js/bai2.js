var input = document.getElementById("txtMua");
var txtBan = document.getElementById("txtBan");
// input.focus();
var btnState = document.getElementById("btnState");
var btnUpdate = document.getElementById("btnUpdate");
btnState.disabled = true;
btnUpdate.disabled = true;

// Hiển thị btnState khi dữ liệu trong input là số
input.onblur = function () {
  if (input.value != "" && !isNaN(input.value) && input.value > 0) {
    btnState.disabled = false;
  } else {
    btnState.disabled = true;
  }
};
txtBan.onblur = function () {
  if (txtBan.value != "" && !isNaN(txtBan.value) && txtBan.value > 0) {
    btnUpdate.disabled = false;
  } else {
    btnUpdate.disabled = true;
  }
};
// Hiển thị ảnh xe và giá khi click và các loại xe

var select = document.getElementById("select");
var img = document.getElementById("img");
var price = document.getElementById("gia");
select.onchange = function () {
  var value = select.value;
  var arr = value.split(";");
  img.src = arr[0];
  price.innerHTML = arr[1] + " VNĐ";
};
// var radio = document.getElementsByName("type");
var radio = document.getElementById("vang");
var trMua = document.getElementById("mua");
var trBan = document.getElementById("ban");
var muaUSD = document.getElementById("muaUSD");
var banUSD = document.getElementById("banUSD");
// chèn dữ liệu vào bảng
btnUpdate.onclick = function () {
  
    if (radio.checked) {
      if (radio.value == "USD") {
          muaUSD.innerHTML = input.value;
          banUSD.innerHTML = txtBan.value;
        } else {
        trBan.innerHTML = txtBan.value;
          trMua.innerHTML = input.value;
      }
    
  }
};
