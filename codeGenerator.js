function generateErrorCode() {
    return crypto.randomUUID().replaceAll('-', '').toUpperCase();
}

let codeElement = document.getElementById('errorCode');
let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
  let uniqueCode = generateErrorCode();
  codeElement.innerText = uniqueCode;
});
