function generateQRCode() {
    // Get user input values
    const text = document.querySelector("#searchInputText").value;
    const width = document.querySelector("#searchInputWidth").value;
    const height = document.querySelector("#searchInputHeight").value;

  
    // API endpoint
    const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/';

    // API parameters
    const params = {
        size: `${width}x${height}`,
        data: text
    };

    // Constructing the URL with parameters
    const url = `${apiUrl}?${new URLSearchParams(params)}`;

    // Creating an image element with the QR code
    const qrCodeImage = new Image();
    qrCodeImage.src = url;
    console.log(qrCodeImage);

    // Clear previous QR code
    document.querySelector("#generateImg").innerHTML = '';

    // Appending the image to the container
    document.querySelector("#generateImg").appendChild(qrCodeImage);
}