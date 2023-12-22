const searchTextInput = document.querySelector("#searchInputText"); 
const searchWidthQR = document.querySelector("#searchInputWidth");
const searchHeightQR = document.querySelector("#searchInputHeight");
function generateQRCode(){
    const userInputText = searchTextInput.value; 
    const userWidthInput = searchWidthQR.value;
    const userHeightInput= searchHeightQR.value;

    document.querySelector("#searchInputText").value = "";
    document.querySelector("#searchInputWidth").value = "";
    document.querySelector("#searchInputHeight").value = "";

    fetchQRapi(userInputText, userWidthInput, userHeightInput);
     
};
function fetchQRapi(inputText,inputWidth,inputHeight){
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${inputWidth}x${inputHeight}&data=${inputText}`)

    // .then((response)=>response.json())

    .then((data) => document.querySelector("#renderImage").src = data.url);

    // .then((data) => console.log(data));

    // document.querySelector("#qrImage").src = data.url;
};