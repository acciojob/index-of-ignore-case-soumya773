function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase to perform case-insensitive comparison
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();

  // Use indexOf to find the first occurrence of s2 in s1
  return lowerS1.indexOf(lowerS2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:"); // Prompt user to enter the first string
const s2 = prompt("Enter s2:");  // Prompt user to enter the second string
alert(indexOfIgnoreCase(s1, s2));  // Show the result using alert
