// bugSolution.js

// ... Firebase initialization code ...

dbRef.once('value', (snapshot) => {
  const data = snapshot.val();
  
  if (data && typeof data.value === 'number') {
    // Use the data only if it's the expected type
    console.log('Value:', data.value);
    // Perform operations using the numerical value
  } else {
    // Handle the case where the data is not a number
    console.error('Error: Unexpected data type. Expected number, received:', typeof data.value);
  }
});