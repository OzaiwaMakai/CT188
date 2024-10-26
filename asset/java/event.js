// Đăng Ký

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

function dangky() {
    if (formValidate()) {
        alert("Đăng ký thành công!");
    }
}

// Đăng Ký

//Lien He
function nutGui() {
    alert("Nội dung đã được gửi!");

    document.getElementById("lienheten").value = "";
    document.getElementById("lienheemail").value = "";
    document.getElementById("lienhechude").value = "";
    document.getElementById("lienhecmt").value = "";
}