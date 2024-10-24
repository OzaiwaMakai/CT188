function handleSubmit(event) {
    event.preventDefault(); // Ngăn chặn reload trang
    
    // Lấy giá trị từ form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const comment = document.getElementById('comment').value;

    // Hiển thị lại thông tin
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Thông tin bạn đã gửi:</h3>
        <p><strong>Tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Chủ đề:</strong> ${subject}</p>
        <p><strong>Comment:</strong> ${comment}</p>
    `;

    // Dùng Fetch API để gửi form qua Ajax mà không reload trang
    const formData = new FormData(document.getElementById('contactForm'));
    fetch('/submit', {
        method: 'POST',
        body: formData,
    }).then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Error submitting form.');
        }
    }).catch(error => {
        alert('An error occurred: ' + error.message);
    });
}
