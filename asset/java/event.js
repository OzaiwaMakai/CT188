// Đăng Ký và đăng nhập

function dangnhap(){
    if(formValidate()){
        alert("Đăng nhập thành công!");
        chuyenhuongtrangchu();
    }
    return true;
}

function chuyenhuongtrangchu(){
    window.location.href = 'index.html';
}


function formValidate() {
    var email = document.getElementById("Email");
    var req = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    var matkhau = document.getElementById("taomatkhau");
    var req1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
    // Kiểm tra email hợp lệ
    if (req.test(email.value) == false) {
        alert("Vui lòng nhập email hợp lệ");
        return false;
    }
    
    if(req1.test(matkhau.value)==false){
        alert("Mật khẩu tối thiểu 8 ký tự, ít nhất 1 chữ cái viết hoa, 1 chữ cái viết thường, 1 số và 1 ký tự đặc biệt");
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
        chuyenhuongdangnhap();
    }
    return true;
}


// Đăng Ký và đăng nhập
function chuyenhuongdangnhap(){
    window.location.href = 'dangnhap.html';
}

function anhienmatkhau(){
    const trangthai = document.getElementById("taomatkhau");
    const thaydoitrangthai = document.querySelector("#thaydoitrangthai i");
    if(trangthai.type === "password"){
        trangthai.type = "text";
        thaydoitrangthai.classList.remove("fa-eye");
        thaydoitrangthai.classList.add("fa-eye-slash")
    }else{
        trangthai.type = "password";
        thaydoitrangthai.classList.remove("fa-eye-slash")
        thaydoitrangthai.classList.add("fa-eye");
    }
}
function anhienmatkhau1(){
    const trangthai = document.getElementById("nhaplaimatkhau");
    const thaydoitrangthai = document.querySelector("#thaydoitrangthai1 i");
    if(trangthai.type === "password"){
        trangthai.type = "text";
        thaydoitrangthai.classList.remove("fa-eye");
        thaydoitrangthai.classList.add("fa-eye-slash")
    }else{
        trangthai.type = "password";
        thaydoitrangthai.classList.remove("fa-eye-slash")
        thaydoitrangthai.classList.add("fa-eye");
    }
}
// Đăng Ký và đăng nhập

//Lien He
function nutGui() {
    var tenlh = document.getElementById("lienheten").value.trim();
    var emaillh = document.getElementById("lienheemail").value.trim();
    var chudelh = document.getElementById("lienhechude").value.trim();
    var cmt = document.getElementById("lienhecmt").value.trim();

    if (tenlh !== "" && emaillh !== "" && chudelh !== "" && cmt !== "") {
        alert("Nội dung đã được gửi!");
        document.getElementById("lienheten").value = "";
        document.getElementById("lienheemail").value = "";
        document.getElementById("lienhechude").value = "";
        document.getElementById("lienhecmt").value = "";
    }
    else {
        alert("Vui lòng nhập đầy đủ các thông tin yêu cầu!");
        document.getElementById("lienheten").value = "";
        document.getElementById("lienheemail").value = "";
        document.getElementById("lienhechude").value = "";
        document.getElementById("lienhecmt").value = "";
    }

    document.getElementById("lienheten").value = "";
    document.getElementById("lienheemail").value = "";
    document.getElementById("lienhechude").value = "";
    document.getElementById("lienhecmt").value = "";
}

//Ket Thuc Lien He


// SanPham_Vang

var itemList = {
    "sp001": {
        "name": 'Dây chuyền bạc nữ liền mặt mạ vàng đính đá CZ trái tim Double',
        "price": 815000,
        "photo": 'asset/image/sanpham_trangsanpham/1_1/Main_Day-chuyen-bac-nu-lien-mat-ma-vang-dinh-da-CZ-trai-tim-Double-LILI_583553_50-400x400.jpg',
    }
}

var itemList = {
    "sp002": {
      "name": 'Dây chuyền bạc nữ đính đá CZ hình trái tim Heart Of The Sea',
      "price": 817000,
      "photo": 'asset/image/sanpham_trangsanpham/1_2/main_Day-chuyen-bac-nu-dinh-da-CZ-hinh-trai-tim-Heart-Of-The-Sea-LILI_413928_1-400x400.jpg',
    }
}

var itemList = {
    "sp003": {
      "name": 'Dây chuyền bạc nữ đính đá CZ dạng nhẫn đôi Fall In Love',
      "price": 782000,
      "photo": 'asset/image/sanpham_trangsanpham/1_3/main_Day-chuyen-bac-nu-dinh-da-CZ-dang-nhan-doi-Fall-In-Love-LILI_748855_7-400x400.jpg',
    }
}
var itemList = {
    "sp004": {
      "name": 'Lắc tay cặp đôi bạc đính đá CZ trái tim của biển Erasmus',
      "price": 1379000,
      "photo": 'asset/image/sanpham_trangsanpham/1_4/main_Lac-tay-cap-doi-bac-dinh-da-CZ-trai-tim-cua-bien-Erasmus-LILI_199377_3-400x400.jpg',
    }
}
var itemList = {
    "sp005": {
      "name": 'Lắc tay bạc Ta S999 nữ cỏ 4 lá cách điệu đẹp',
      "price": 920000,
      "photo": 'asset/image/sanpham_trangsanpham/2_1/main_Lac-tay-bac-nu-co-4-la-cach-dieu-LILI_661577_6-400x400.jpg',
    }
}
var itemList = {
    "sp006": {
      "name": 'Lắc tay bạc nam mắt xích đơn giản ngầu Cuban Saint Laurent Paris',
      "price": 3926000,
      "photo": 'asset/image/sanpham_trangsanpham/2_2/main_Lac-tay-bac-nam-mat-xich-don-gian-ngau-Cuban-Saint-Laurent-Paris-LILI_746785_38-400x400.jpg',
    }
}
var itemList = {
    "sp007": {
      "name": 'Bông tai bạc Ý S925 nữ mạ bạch kim đính đá CZ hình trái tim',
      "price": 671000,
      "photo": 'asset/image/sanpham_trangsanpham/2_3/main_Bong-tai-bac-Y-S925-nu-ma-bach-kim-dinh-da-CZ-hinh-trai-tim-LILI_991582_10-400x400.jpg',
    }
}
var itemList = {
    "sp008": {
      "name": 'Lắc tay bạc nữ đính đá CZ hình bông hoa hồng',
      "price": 790000,
      "photo": 'asset/image/sanpham_trangsanpham/2_4/main_Lac-tay-bac-nu-dinh-da-CZ-hinh-bong-hoa-hong-LILI_787759_1-400x400.jpg',
    }
}
var itemList = {
    "sp009": {
      "name": 'Dây chuyền bạc nữ đính đá CZ cỏ 4 lá',
      "price": 804000,
      "photo": 'asset/image/sanpham_trangsanpham/3_1/main_Mat-day-chuyen-bac-nu-dinh-da-CZ-co-4-la-LILI_426865_1-400x400.jpg',
    }
}
var itemList = {
    "sp010": {
      "name": 'Nhẫn đôi bạc đính đá CZ All Of Love',
      "price": 836000,
      "photo": 'asset/image/sanpham_trangsanpham/3_2/main_Nhan-doi-bac-dinh-da-CZ-All-Of-Love-LILI_614281_4-400x400.jpg',
    }
}
var itemList = {
    "sp011": {
      "name": '',
      "price": 819000,
      "photo": 'asset/image/sanpham_trangsanpham/3_3/main_Mat-day-chuyen-bac-nu-trai-tim-cach-dieu-dinh-da-CZ-LILI_352665_2-400x400.jpg',
    }
}
var itemList = {
    "sp012": {
      "name": 'Bông tai bạc nữ đính đá CZ cỏ 4 lá',
      "price": 968000,
      "photo": 'asset/image/sanpham_trangsanpham/3_4/main_Bong-tai-bac-nu-dinh-da-CZ-co-4-la-LILI_453329_1-400x400.jpg',
    }
}
var itemList = {
    "sp013": {
      "name": 'Lắc tay bạc nữ đính đá CZ cặp trái tim Alvin',
      "price": 968000,
      "photo": 'asset/image/sanpham_trangsanpham/4_1/main_Lac-tay-bac-nu-dinh-da-CZ-cap-trai-tim-Alvin-LILI_267729_5-400x400.jpg',
    }
}
var itemList = {
    "sp014": {
      "name": 'Lắc tay bạc nữ hình cỏ 4 lá Fidelia',
      "price": 705000,
      "photo": 'asset/image/sanpham_trangsanpham/4_2/main_Lac-tay-bac-nu-hinh-co-4-la-LILI_827243_11-400x400.jpg',
    }
}
var itemList = {
    "sp015": {
      "name": 'Nhẫn bạc nữ mạ vàng 18k đính đá CZ hình trái tim',
      "price": 601000,
      "photo": 'asset/image/sanpham_trangsanpham/4_3/main_Nhan-bac-ma-vang-18k-dinh-da-Zircon-hinh-trai-tim-LILI_349632-02-400x400.jpg',
    }
}
var itemList = {
    "sp016": {
      "name": 'Lắc tay bạc nữ đính đá CZ, pha lê Aurora cá cách điệu',
      "price": 643000,
      "photo": 'asset/image/sanpham_trangsanpham/4_4/main_ Lac-tay-bac-nu-dinh-da-CZ-pha-le-Aurora-ca-cach-dieu-LILI_418171_6-400x400.jpg',
    }
}
