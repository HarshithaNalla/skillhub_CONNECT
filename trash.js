// Import the Firebase SDK
const firebase = require('firebase');

// Initialize Firebase with your project configuration
// Your Firebase configuration...
const firebaseConfig = {
    apiKey: "AIzaSyB0JIU9cOR3IcXjhzsDXh-k5BUV-BQZ54E",
    authDomain: "skillhub-65c47.firebaseapp.com",
    projectId: "skillhub-65c47",
    storageBucket: "skillhub-65c47.appspot.com",
    messagingSenderId: "715363219170",
    appId: "1:715363219170:web:a1942ae1d8aee88e1d50bb",
    measurementId: "G-5MS1FLDER4"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Create a reference to the location in the database where your data is stored
const dataRef = database.ref('https://skillhub-65c47-default-rtdb.firebaseio.com/profiles/Harshitha_');

// Create a query to retrieve data based on certain conditions
const query = dataRef.orderByChild('educationLevel').equalTo('undergraduate');

// Listen for value changes in the data based on the query
query.on('value', (snapshot) => {
  const data = snapshot.val();
  console.log(data); // Handle the retrieved data here
}, (error) => {
  console.error(error);
});
