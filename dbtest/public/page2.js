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

//check array contents.its populated
// console.log(dairyArray);
// console.log("The first element " + dairyArray[0]); //undefined why?

// var list = document.getElementsByClassName("seafoodLI");
// console.log(list);
// for (var i = 0; i < list.length; i++) {
//     list[i].innerHTML = dairyArray[i];
//     console.log(i);
//     console.log(dairyArray[i]); //undefined why?
// }
//still populated
// console.log(dairyArray);

// var anotherArray=["random stuff", "another thing"];
// console.log(anotherArray);

// const milkRef = firestore.doc("dairyandeggs/Milk");
// const butterRef = firestore.doc("dairyandeggs/Butter");
// const creamRef = firestore.doc("dairyandeggs/Cream");
// const eggRef = firestore.doc("dairyandeggs/Egg"); 
// const cheeseRef = firestore.doc("dairyandeggs/Cheese");
// const yogurtRef = firestore.doc("dairyandeggs/Yogurt");
// milkRef.get().then(function(doc){
//     list[0].innerHTML = doc.data().name;
// });
// butterRef.get().then(function(doc){
//     list[1].innerHTML = doc.data().name;
// });
// creamRef.get().then(function(doc){
//     list[2].innerHTML = doc.data().name;
// });
// eggRef.get().then(function(doc){
//     list[3].innerHTML = doc.data().name;
// });
// cheeseRef.get().then(function(doc){
//     list[4].innerHTML = doc.data().name;
// });
// yogurtRef.get().then(function(doc){
//     list[5].innerHTML = doc.data().name;
// });
