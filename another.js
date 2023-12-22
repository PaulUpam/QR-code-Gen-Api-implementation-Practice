function QRcode(text, width, height) {
    // Encode the text for the URL
    const encodedText = encodeURIComponent(text);

    // Fetch the QR code URL
    return fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${encodedText}&size=${width}x${height}`)
        .then(response => response.blob())
        .then(data => URL.createObjectURL(data))
        
}
// action button for generate qr code function
function generateQRCode() {
    const text = document.querySelector("#searchInputText").value;
    const width = document.querySelector("#searchInputWidth").value;
    const height = document.querySelector("#searchInputHeight").value;


    QRcode(text, width, height)
        .then(qrCodeUrl => displayQR(qrCodeUrl))
      
}

function displayQR(qrCodeUrl) {
    // Creating an image element with the QR code
    const qrCodeImage = new Image();
    qrCodeImage.src = qrCodeUrl;

    // Clear previous QR code
    const generateImgContainer = document.querySelector("#generateImg");
    generateImgContainer.innerHTML = '';

    // Appending the image to the container
    generateImgContainer.appendChild(qrCodeImage);
}
