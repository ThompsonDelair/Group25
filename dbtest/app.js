var config = {
    apiKey: "AIzaSyCGNoYTlu22XUIBGUL8gfUq4_ysaOXhMHU",
    authDomain: "testerino-ae33c.firebaseapp.com",
    databaseURL: "https://testerino-ae33c.firebaseio.com",
    projectId: "testerino-ae33c",
    storageBucket: "testerino-ae33c.appspot.com",
    messagingSenderId: "931560337847"
};
    
   
    firebase.initializeApp(config);
    var firestore = firebase.firestore();

const docRef = firestore.doc("samples/sandwichData");
const outputHeader = document.querySelector("#hotDogOutput");
const inputTextField = document.querySelector("#latestHotDogStatus");
const saveButton = document.querySelector("#saveButton");



// saveButton.addEventListener("click", function(){
//     const textToSave = inputTextField.value;
//     console.log("I am going to save" + textToSave + " to Firestore");
//     docRef.set({
//         hotDogStatus: textToSave
//     }).then(function(){
//         console.log("Status saved!");
//     }).catch(function(error){
//         console.log("Got an error: ", error);
//     });
// })

// const docRef2 = firestore.doc("testCol/breadwichData");

var citiesRef = firestore.collection("cities");

citiesRef.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000 });
citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000 });
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000 });
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000 });
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000 });

    var query = citiesRef.where("state", "==", "CA");
  




