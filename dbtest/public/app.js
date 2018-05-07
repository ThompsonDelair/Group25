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

saveButton.addEventListener("click", function(){
    const textToSave = inputTextField.value;
    console.log("I am going to save" + textToSave + " to Firestore");
    docRef.set({
        hotDogStatus: textToSave
    }).then(function(){
        console.log("Status saved!");
    }).catch(function(error){
        console.log("Got an error: ", error);
    });
})