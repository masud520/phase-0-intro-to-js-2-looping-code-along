// Code your solutions in this file
function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage:
  const names = ["Alice", "Bob", "Charlie"];
  const event = "birthday";
  const countdownNumber = 5;
  
  const thankYouMessages = writeCards(names, event);
  console.log(thankYouMessages);
  
  countDown(countdownNumber);
  