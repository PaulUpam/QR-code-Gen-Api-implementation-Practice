// fething the api from the qr api & adding funtion
function getQRcode(text, width, height) {
  // Encode the text for the URL
  const encodedText = encodeURIComponent(text);
    // Fetch QR code from the API using encoded text, width, and height parameters
  return fetch(
    `https://api.qrserver.com/v1/create-qr-code/?data=${encodedText}&size=${width}x${height}`
  )

  // .joson = .blob use for facing problem help from vdo & chat gpt
   // Once the response is received, convert it to a blob
    .then((response) => response.blob())
    // Create a URL for the blob data and return it
    .then((data) => URL.createObjectURL(data));
    
}
// Function to generate and display the QR code based on user input
function generateQRCode() {
   // Get text, width, and height input values from the user
  const text = document.querySelector("#searchInputText").value;
  const width = document.querySelector("#searchInputWidth").value;
  const height = document.querySelector("#searchInputHeight").value;
 // Call getQRcode function and display the QR code
  getQRcode(text, width, height).then((qrCodeUrl) => displayQRCode(qrCodeUrl));
 
}
 // Function to create an image element with the provided QR code URL
function createQRCodeImage(qrCodeUrl) {
  // Create an img element
  const qrCodeImage = document.createElement("img");
    // Set the src attribute of the img element to the QR code URL
  qrCodeImage.setAttribute("src", qrCodeUrl);
    // Return the img element
  return qrCodeImage;
}
 // Function to display the QR code in the specified container
function displayQRCode(qrCodeUrl) {
   // Get the container element for displaying the QR code image
  const generateImgContainer = document.querySelector("#generateImg");
  // Clear the container's content
  generateImgContainer.innerHTML = "";
   // Create an img element with the QR code URL and append it to the container
  const qrCodeImage = createQRCodeImage(qrCodeUrl);
  generateImgContainer.appendChild(qrCodeImage);
 
}
