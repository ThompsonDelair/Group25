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

var meatList = document.getElementsByClassName("meatLabel");
var meatCount = 0;
//puts name of foods in array
firestore.collection("Meats").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        meatList[meatCount].innerHTML += doc.data().Name;
        console.log(doc.data().Name);
        meatCount++;
    });
}).catch(function(error){
    console.log("Error getting documents: ", error);
});

var list = document.getElementsByClassName("fruitLabel");
var count = 0;
//puts name of foods in array
firestore.collection("DairyandEggs").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        list[count].innerHTML += doc.data().Name;
        console.log(doc.data().Name);
        count++;
    });
}).catch(function(error){
    console.log("Error getting dairy documents: ", error);
});



var vegList = document.getElementsByClassName("vegLabel");
var vegCount = 0;
//puts name of foods in array
firestore.collection("Vegetables").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        vegList[vegCount].innerHTML += doc.data().Name;
        console.log(doc.data().Name);
        vegCount++;
    });
}).catch(function(error){
    console.log("Error getting documents: ", error);
});

var grainList = document.getElementsByClassName("grainLabel");
var grainCount = 0;
//puts name of foods in array
firestore.collection("Grains").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        grainList[grainCount].innerHTML += doc.data().Name;
        console.log(doc.data().Name);
        grainCount++;
    });
}).catch(function(error){
    console.log("Error getting documents: ", error);
});

