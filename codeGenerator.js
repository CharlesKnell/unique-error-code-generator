// generates the unique code and requires a minimum of 2 ms to complete
function convertTimeToBase36() {
    
	const start = performance.now();
    // Force at least 2ms delay
    while (performance.now() - start < 2) {}
	
    const currentDate = new Date();               // Get the current date and time
    const milliseconds = currentDate.getTime();   // Get the millisecords since Jan 1, 1970
    const base36Time = milliseconds.toString(36); // Convert milliseconds to base 36
    
    let uniqueErrorCode = base36Time;
    uniqueErrorCode = uniqueErrorCode.toUpperCase();
    return uniqueErrorCode;
}

let codeElement = document.getElementById('errorCode');
let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
  let uniqueCode = convertTimeToBase36();
  codeElement.innerText = uniqueCode;
});
