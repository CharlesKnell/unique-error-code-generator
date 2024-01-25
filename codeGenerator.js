function convertTimeRandToBase36() {
    
    const currentDate = new Date();               // Get the current date and time
    const milliseconds = currentDate.getTime();   // Get the millisecords since Jan 1, 1970
    const base36Time = milliseconds.toString(36); // Convert milliseconds to base 36
    
    // generate a random number between 100 thousand and a billion
    let random1 = 0;
    let random2 = 0;
    let random3 = 0;
    let random = 0;
    while (random < 100000) {
      random1 = Math.floor(Math.random() * 1000);
      random2 = Math.floor(Math.random() * 1000);
      random3 = Math.floor(Math.random() * 1000);
      random = random1 * random2 * random3;
    }
    base36Random = random.toString(36);  // Convert random to base 36

    let uniqueErrorCode = base36Time + base36Random;
    uniqueErrorCode = uniqueErrorCode.toUpperCase();
    return uniqueErrorCode;
}

let codeElement = document.getElementById('errorCode');
let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
  let uniqueCode = convertTimeRandToBase36();
  codeElement.innerText = uniqueCode;
});
