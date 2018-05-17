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

//puts meats into html into meat list
firestore.collection("Meats").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        document.getElementById("meatUL").innerHTML+="<li class='meatLI'><label class='container'><input type='checkbox'"
        + " value='" + doc.data().Name + "' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });
}).catch(function(error){
    console.log("Error getting meat documents: ", error);
});


//puts vegetables into html into veg list
firestore.collection("Vegetables").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        document.getElementById("veggieUL").innerHTML+="<li class='veggieLI'><label class='container'><input type='checkbox'"
        + " value='" + doc.data().Name + "' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });
}).catch(function(error){
    console.log("Error getting vegetas documents: ", error);
});


//puts fruits into html into fruit list
firestore.collection("Fruits").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        document.getElementById("fruitUL").innerHTML+="<li class='fruitLI'><label class='container'><input type='checkbox'"
        + " value='" + doc.data().Name + "' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });
}).catch(function(error){
    console.log("Error getting dairy documents: ", error);
});

//puts grains into html into grain list
firestore.collection("Grains").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        document.getElementById("bakeUL").innerHTML+="<li class='bakeLI'><label class='container'><input type='checkbox'"
        + " value='" + doc.data().Name + "' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });
}).catch(function(error){
    console.log("Error getting documents: ", error);
});

//puts meat alts into html into meat alt list
firestore.collection("MeatAlternatives").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        document.getElementById("meatAltUL").innerHTML+="<li class='meatAltLI'><label class='container'><input type='checkbox'"
        + " value='" + doc.data().Name + "' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });
}).catch(function(error){
    console.log("Error getting documents: ", error);
});

//puts dairy into html into dairy list
firestore.collection("DairyandEggs").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        document.getElementById("dairyUL").innerHTML+="<li class='dairyLI'><label class='container'><input type='checkbox'"
        + " value='" + doc.data().Name + "' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });
}).catch(function(error){
    console.log("Error getting documents: ", error);
});

switch(sessionStorage.getItem("diet")){
    case "veg":
        jQuery("#meatDiv").hide();
        jQuery("#meatPic").hide();
        break;
    case "vegan":
        jQuery("#meatDiv").hide();
        jQuery("#dairyDiv").hide();
        jQuery("#meatPic").hide();
        jQuery("#dairyPic").hide();
        break;
    case "glufree":
        jQuery("#bakeDiv").hide();
        jQuery("#breadPic").hide();
        break;
    default:
    
};

var cart =[];

function onCheck(foodItem){
    if(foodItem.checked){
        cart.push(foodItem.value);
        console.log("This food is checked! " + foodItem.value);
    } else{
        var index = cart.indexOf(foodItem.value);
        cart.splice(index, 1);
        console.log("This food is unchecked! " + foodItem.value);
    }
    console.log(cart);
}

function storeArray(){

    sessionStorage.setItem("foods", JSON.stringify(cart));
    console.log("Array is stored!")
}




