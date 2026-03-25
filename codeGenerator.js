function generateErrorCode() {
    return crypto.randomUUID().replaceAll('-', '').toUpperCase();
}

function hexToBase62(hex) {
    const CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let num = BigInt('0x' + hex);
    if (num === 0n) return '0';
    let result = '';
    while (num > 0n) {
        result = CHARS[Number(num % 62n)] + result;
        num /= 62n;
    }
    return result;
}

let codeElement = document.getElementById('errorCode');
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    let uniqueCode = generateErrorCode();
    codeElement.innerText = hexToBase62(uniqueCode);
});
