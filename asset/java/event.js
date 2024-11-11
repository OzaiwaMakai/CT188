// Đăng Ký và đăng nhập

function dangnhap(){
  if(formValidate()) {
    var saveEmail = window.localStorage.getItem('Email');
    var savePass = window.localStorage.getItem('matkhau');
    var email = document.getElementById("Email").value;
    var matkhau = document.getElementById("taomatkhau").value;
    if (email === saveEmail && matkhau === savePass) {
        alert("Đăng nhập thành công!");
        window.location.href = 'index.html';
    } else {
        alert("Email hoặc mật khẩu không đúng");
    }
}
return true;
}

function formValidate() {
    var email = document.getElementById("Email");
    var req = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    var matkhau = document.getElementById("taomatkhau");
    var req1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
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
    window.localStorage.setItem('matkhau',matkhau);
    return true;
}

function dangky() {
  if (formValidate() && testpass()) {
      var email = document.getElementById("Email").value;
      window.localStorage.setItem('Email', email);
      alert("Đăng ký thành công!");
      window.location.href = 'dangnhap.html';
  }
  return false;
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
    }else{a-z
        trangthai.type = "password";
        thaydoitrangthai.classList.remove("fa-eye-slash")
        thaydoitrangthai.classList.add("fa-eye");
    }
}

// Đăng Ký và đăng nhập

//Lien He
// Hàm kiểm tra định dạng email
function dinhDangEmail(email) {
  var emailkt = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return emailkt.test(email);
}

// Hàm gửi
function nutGui() {
  var tenlh = document.getElementById("lienheten").value.trim();
  var emaillh = document.getElementById("lienheemail").value.trim();
  var chudehl = document.getElementById("lienhechude").value.trim();
  var cmt = document.getElementById("lienhecmt").value.trim();

  // Kiểm tra các trường nhập liệu và định dạng email
  if (tenlh !== "" && emaillh !== "" && chudehl !== "" && cmt !== "" && dinhDangEmail(emaillh)) {
      alert("Nội dung đã được gửi!");
      document.getElementById("lienheten").value = "";
      document.getElementById("lienheemail").value = "";
      document.getElementById("lienhechude").value = "";
      document.getElementById("lienhecmt").value = "";
  } else {
      if (tenlh === "" && emaillh === "" && chudehl === "" && cmt === "") {
        alert("Vui lòng nhập đầy đủ các thông tin yêu cầu!");
      }
      else if (!dinhDangEmail(emaillh)) {
          alert("Vui lòng nhập địa chỉ email hợp lệ!");
      } else {
          alert("Vui lòng nhập đầy đủ các thông tin yêu cầu!");
      }
      // document.getElementById("lienheten").value = "";
      // document.getElementById("lienheemail").value = "";
      // document.getElementById("lienhechude").value = "";
      // document.getElementById("lienhecmt").value = "";
  }
}
function nutEnter(event) {
  var key=event.keyCode;
  if(key === 13) {
    nutGui();
    return false;
  }
  return true;
}

//Ket Thuc Lien He

// SanPham_Vang

var itemList = {
    "sp001": {
        "name": 'Dây chuyền bạc nữ liền mặt mạ vàng đính đá CZ trái tim Double',
        "price": 815000,
        "photo": 'asset/image/sanpham_trangsanpham/1_1/Main_Day-chuyen-bac-nu-lien-mat-ma-vang-dinh-da-CZ-trai-tim-Double-LILI_583553_50-400x400.jpg'
    },
    "sp002": {
      "name": 'Dây chuyền bạc nữ đính đá CZ hình trái tim Heart Of The Sea',
      "price": 817000,
      "photo": 'asset/image/sanpham_trangsanpham/1_2/main_Day-chuyen-bac-nu-dinh-da-CZ-hinh-trai-tim-Heart-Of-The-Sea-LILI_413928_1-400x400.jpg'
    },
    "sp003": {
      "name": 'Dây chuyền bạc nữ đính đá CZ dạng nhẫn đôi Fall In Love',
      "price": 782000,
      "photo": 'asset/image/sanpham_trangsanpham/1_3/main_Day-chuyen-bac-nu-dinh-da-CZ-dang-nhan-doi-Fall-In-Love-LILI_748855_7-400x400.jpg'
    },
    "sp004": {
      "name": 'Lắc tay cặp đôi bạc đính đá CZ trái tim của biển Erasmus',
      "price": 1379000,
      "photo": 'asset/image/sanpham_trangsanpham/1_4/main_Lac-tay-cap-doi-bac-dinh-da-CZ-trai-tim-cua-bien-Erasmus-LILI_199377_3-400x400.jpg'
    },
    "sp005": {
      "name": 'Lắc tay bạc Ta S999 nữ cỏ 4 lá cách điệu đẹp',
      "price": 920000,
      "photo": 'asset/image/sanpham_trangsanpham/2_1/main_Lac-tay-bac-nu-co-4-la-cach-dieu-LILI_661577_6-400x400.jpg'
    },
    "sp006": {
      "name": 'Lắc tay bạc nam mắt xích đơn giản ngầu Cuban Saint Laurent Paris',
      "price": 3926000,
      "photo": 'asset/image/sanpham_trangsanpham/2_2/main_Lac-tay-bac-nam-mat-xich-don-gian-ngau-Cuban-Saint-Laurent-Paris-LILI_746785_38-400x400.jpg'
    },
    "sp007": {
      "name": 'Bông tai bạc Ý S925 nữ mạ bạch kim đính đá CZ hình trái tim',
      "price": 671000,
      "photo": 'asset/image/sanpham_trangsanpham/2_3/main_Bong-tai-bac-Y-S925-nu-ma-bach-kim-dinh-da-CZ-hinh-trai-tim-LILI_991582_10-400x400.jpg'
    },
    "sp008": {
      "name": 'Lắc tay bạc nữ đính đá CZ hình bông hoa hồng',
      "price": 790000,
      "photo": 'asset/image/sanpham_trangsanpham/2_4/main_Lac-tay-bac-nu-dinh-da-CZ-hinh-bong-hoa-hong-LILI_787759_1-400x400.jpg'
    },
    "sp009": {
      "name": 'Dây chuyền bạc nữ đính đá CZ cỏ 4 lá',
      "price": 804000,
      "photo": 'asset/image/sanpham_trangsanpham/3_1/main_Mat-day-chuyen-bac-nu-dinh-da-CZ-co-4-la-LILI_426865_1-400x400.jpg'
    },
    "sp010": {
      "name": 'Nhẫn đôi bạc đính đá CZ All Of Love',
      "price": 836000,
      "photo": 'asset/image/sanpham_trangsanpham/3_2/main_Nhan-doi-bac-dinh-da-CZ-All-Of-Love-LILI_614281_4-400x400.jpg'
    },
    "sp011": {
      "name": 'Dây chuyền bạc nữ đính đá CZ hình trái tim cách điệu đẹp Katalina',
      "price": 819000,
      "photo": 'asset/image/sanpham_trangsanpham/3_3/main_Mat-day-chuyen-bac-nu-trai-tim-cach-dieu-dinh-da-CZ-LILI_352665_2-400x400.jpg'
    },
    "sp012": {
      "name": 'Bông tai bạc nữ đính đá CZ cỏ 4 lá',
      "price": 968000,
      "photo": 'asset/image/sanpham_trangsanpham/3_4/main_Bong-tai-bac-nu-dinh-da-CZ-co-4-la-LILI_453329_1-400x400.jpg'
    },
    "sp013": {
      "name": 'Lắc tay bạc nữ đính đá CZ cặp trái tim Alvin',
      "price": 968000,
      "photo": 'asset/image/sanpham_trangsanpham/4_1/main_Lac-tay-bac-nu-dinh-da-CZ-cap-trai-tim-Alvin-LILI_267729_5-400x400.jpg'
    },
    "sp014": {
      "name": 'Lắc tay bạc nữ hình cỏ 4 lá Fidelia',
      "price": 705000,
      "photo": 'asset/image/sanpham_trangsanpham/4_2/main_Lac-tay-bac-nu-hinh-co-4-la-LILI_827243_11-400x400.jpg'
    },
    "sp015": {
      "name": 'Nhẫn bạc nữ mạ vàng 18k đính đá CZ hình trái tim',
      "price": 601000,
      "photo": 'asset/image/sanpham_trangsanpham/4_3/main_Nhan-bac-ma-vang-18k-dinh-da-Zircon-hinh-trai-tim-LILI_349632-02-400x400.jpg'
    },
    "sp016": {
      "name": 'Lắc tay bạc nữ đính đá CZ, pha lê Aurora cá cách điệu',
      "price": 643000,
      "photo": 'asset/image/sanpham_trangsanpham/4_4/main_ Lac-tay-bac-nu-dinh-da-CZ-pha-le-Aurora-ca-cach-dieu-LILI_418171_6-400x400.jpg'
    }
}

function addCart(code){
  // Khai báo biến name lấy giá trị là name dưới dạng chuỗi của mã sản phẩm tương ứng với biến code 
      var name=itemList[code].name;
  // Kiểm tra sự tồn tại của mã sản phẩm trong localStorage, nếu không tồn tại thì thêm mới và thiết lập giá trị cho mã sản phẩm
      if(typeof localStorage[code] == "undefined") window.localStorage.setItem(code, 1);
      else{
          var current = parseInt((window.localStorage).getItem(code));
          window.localStorage.setItem(code, current + 1);
      }
      alert("Đã thêm sản phẩm " + name + " vào giỏ hàng thành công!");
};

function showCart() {
  // Khai báo biến formatter để hiển thị giá tiền sản phẩm dưới dạng tiền tệ VND
      var formatter = new Intl.NumberFormat("vi-VN", {style: "currency", currency: "VND"});
  // Khai báo biến container lấy phần tử có id = cartDetail, trong đó lấy phần tử con có nhãn HTML là tbody
      var container = document.getElementById("cartDetail").getElementsByTagName("tbody")[0];
      container.innerHTML="";
      var sum = 0; // Tổng giá tiền mỗi mặt hàng
      var totalPreTax = 0; // Tổng giá tiền đơn hàng khi chưa tính thuế
      var taxRate=0.1; // Tỉ lệ thuế
      var tax = 0; // Tiền thuế
      for(var i = 0; i < window.localStorage.length; i++){
          if(typeof itemList[localStorage.key(i)] === "undefined") continue;
          var tr = document.createElement("tr");
          var photoCell = document.createElement("td");
          var nameCell = document.createElement("td");
          var priceCell = document.createElement("td");
          var numCell = document.createElement("td");
          var sumCell = document.createElement("td");
          var removeCell = document.createElement("td");
          var removeLink = document.createElement("a");
          var item = itemList[localStorage.key(i)];
          var num = localStorage.getItem(localStorage.key(i));
          photoCell.style.textAlign="center";
          photoCell.innerHTML="<img src='" + item.photo + "' class='round-figure' width='100px' />";
          nameCell.innerHTML=item.name;
          nameCell.style.textAlign="center";
          priceCell.innerHTML=formatter.format(item.price);
          priceCell.style.textAlign="center";
          numCell.innerHTML = `
            <button class = 'button' onclick="decreaseQuantity('${localStorage.key(i)}')">-</button>
            ${num}
            <button class = 'button' onclick="increaseQuantity('${localStorage.key(i)}')">+</button>
            `;
          numCell.style.textAlign="center";
          sum = num*item.price;
          sumCell.innerHTML=formatter.format(sum);
          sumCell.style.textAlign="center";
          removeLink.innerHTML="<i class='fa-solid fa-trash'></i>";
          removeLink.setAttribute("href", "#");
          removeLink.setAttribute("data-code", localStorage.key(i));
          removeLink.onclick=function(){
              removeCart(this.dataset.code);
          };
          removeCell.style.textAlign="center";
          removeCell.appendChild(removeLink);
          tr.appendChild(photoCell);
          tr.appendChild(nameCell);
          tr.appendChild(numCell);
          tr.appendChild(priceCell);
          tr.appendChild(sumCell);
          tr.appendChild(removeCell);
          container.appendChild(tr);
          totalPreTax += sum;
      }
      var tax = (totalPreTax)*taxRate;
      document.getElementById("bill_pre_tax_total").innerHTML=formatter.format(totalPreTax);
      document.getElementById("bill_tax").innerHTML=formatter.format(tax);
      document.getElementById("bill_total").innerHTML=formatter.format(totalPreTax+tax);
  }
  // HÀM XÓA SẢN PHẨM KHỎI GIỎ HÀNG
  function removeCart(code) {
  // Khai báo biến name lấy giá trị là name dưới dạng chuỗi của mã sản phẩm tương ứng với biến code
      var name=itemList[code].name;
      if(confirm("Bạn có chắc chắn muốn xóa sản phẩm " + name + " khỏi giỏ hàng không? Nhấn OK để xác nhận xóa hoặc nhấn Cancel để hủy")){
          if(typeof window.localStorage[code] !== "undefined"){
  // Xóa sản phẩm khỏi localStorage
              window.localStorage.removeItem(code);
  // Xóa nội dung của phần thân của bảng (<tbody>)
              document.getElementById("cartDetail").getElementsByTagName("tbody")[0].innerHTML="";
  // Hiển thị lại nội dung của đơn hàng
              showCart();
          }
          alert("Đã xóa sản phẩm " + name + " khỏi giỏ hàng thành công!");
      }
  }
    //   Tăng giảm số lượng sản phẩm
    function increaseQuantity(code) {
    var currentQuantity = parseInt(localStorage.getItem(code)) || 0
    if (currentQuantity < 100) {
        // Giới hạn tối đa 100 sản phẩm
        localStorage.setItem(code, currentQuantity + 1)
        showCart() // Cập nhật lại giỏ hàng sau khi tăng số lượng
    } else {
        alert('Mỗi sản phẩm chỉ có thể đặt tối đa 100 sản phẩm!')
    }
    }

    function decreaseQuantity(code) {
    var currentQuantity = parseInt(localStorage.getItem(code)) || 0
    if (currentQuantity > 1) {
        // Giới hạn tối thiểu 1 sản phẩm
        localStorage.setItem(code, currentQuantity - 1)
    } else {
        removeCart(code) // Xóa sản phẩm khỏi giỏ hàng nếu số lượng là 0
    }
    showCart() // Cập nhật lại giỏ hàng sau khi giảm số lượng
    }


  // HÀM HIỆN HỘP THOẠI XÁC NHẬN ĐẶT HÀNG
  function confirmPurchase(){
    let hasItem = false;
    // Kiểm tra xem có sản phẩm trong giỏ hàng chưa?
    for(let i=0; i < localStorage.length; i++) {
      if(itemList[localStorage.key(i)]) {
        hasItem = true;
        break;
      }
    }

    if(hasItem) {
      if (confirm("Vui lòng kiểm tra lại thông tin giao hàng cũng như đơn hàng trước khi đặt hàng. Sau khi kiểm tra, vui lòng nhấn OK để xác nhận.")) {
        alert('Đã đặt hàng thành công!');
      }
    } else {
      alert("Vui lòng thêm sản phẩm vào giỏ hàng");
    }

      // if (confirm("Vui lòng kiểm tra lại thông tin giao hàng cũng như đơn hàng trước khi đặt hàng. Sau khi kiểm tra, vui lòng nhấn OK để xác nhận.")) {
      //     alert("Đã đặt hàng thành công!");
      // }
  }



  // Tăng giảm số lượng sản phẩm trong trang info_sanpham
  let amountElement = document.querySelector('#amount')
  let amount = amountElement.value
  console.log(amountElement)
  let updateValue = (amount) => {
    amountElement.value = amount
  }

  function inputAmount() {
    amount = amountElement.value
    amount = parseInt(amount)
    amount = isNaN(amount) || amount == 0 ? 1 : amount
    updateValue(amount)
  }
  // Handle plus
  let handelPlus = () => {
    if (amount < 10) amount++
    updateValue(amount)
  }
  // Handle minus
  let handelMinus = () => {
    if (amount > 1) amount--
    updateValue(amount)
  }
  // Tăng giảm số lượng sản phẩm trong trang info_sanpham

    // HOME-FILTER - lựa chọn lọc giá sản phẩm
  function openOption() {
    const list_optiion = document.querySelector(".select-input__list");
    if (list_optiion.style.display == 'block')
      list_optiion.style.display = 'none'
    else list_optiion.style.display = 'block'
  }
  // HOME-FILTER