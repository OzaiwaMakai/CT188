// Đăng Ký và đăng nhập

function formValidate() {
    var email = document.getElementById("Email");
    var req = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    // Kiểm tra email hợp lệ
    if (req.test(email.value) == false) {
        alert("Vui lòng nhập email hợp lệ");
        return false;
    }
    return true;
}

function testpass(){
    var matkhau = document.getElementById("taomatkhau").value;
    var nhaplaimatkhau = document.getElementById("nhaplaimatkhau").value;
    if(matkhau != nhaplaimatkhau){
        alert("Vui lòng nhập đúng mật khẩu");
        return false;
    }
    return true;
}

function dangky() {
    if (formValidate() && testpass()) {
        alert("Đăng ký thành công!");
    }
}

// Đăng Ký

// Đăng Ký và đăng nhập

//Lien He
function nutGui() {
    alert("Nội dung đã được gửi!");

    document.getElementById("lienheten").value = "";
    document.getElementById("lienheemail").value = "";
    document.getElementById("lienhechude").value = "";
    document.getElementById("lienhecmt").value = "";
}