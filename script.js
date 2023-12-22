
function getQRcode(text, width, height){
 // Encode the text for the URL
fetch( `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=${width}x${height}`)
  // .then((response)=>response.json())
 //.then((data)=>console.log(data))
  // .then(data => URL.createObjectURL(data))
  .then(data =>document.querySelector("#renderImage").src=data.url ) 
  // document.querySelector("#generateImg").src=data.url
}
function generateQRCode(){
      // Get user input values
  const text = document.querySelector("#searchInputText").value;
  const width = document.querySelector("#searchInputWidth").value;
const height = document.querySelector("#searchInputHeight").value;

 
  getQRcode(text,width,height);

}










