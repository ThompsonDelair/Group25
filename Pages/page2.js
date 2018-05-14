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
var count = 0;

var list = document.getElementsByClassName("seafoodLI");
//puts name of foods in array
firestore.collection("dairyandeggs").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        list[count].innerHTML += doc.data().name;
        console.log(doc.data().name);
        count++;
    });
}).catch(function(error){
    console.log("Error getting documents: ", error);
});