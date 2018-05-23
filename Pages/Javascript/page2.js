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
        + " name='" + doc.data().Name + "' value='Meats' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });
}).catch(function(error){
    console.log("Error getting meat documents: ", error);
});

//puts vegetables into html into veg list
firestore.collection("Vegetables").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        document.getElementById("veggieUL").innerHTML+="<li class='veggieLI'><label class='container'><input type='checkbox'"
        + " name='" + doc.data().Name + "' value='Vegetables' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });
}).catch(function(error){
    console.log("Error getting vegetas documents: ", error);
});


//puts fruits into html into fruit list
firestore.collection("Fruits").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        document.getElementById("fruitUL").innerHTML+="<li class='fruitLI'><label class='container'><input type='checkbox'"
        + " name='" + doc.data().Name + "' value='Fruits' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });
}).catch(function(error){
    console.log("Error getting dairy documents: ", error);
});

//puts grains into html into grain list
firestore.collection("Grains").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        document.getElementById("bakeUL").innerHTML+="<li class='bakeLI'><label class='container'><input type='checkbox'"
        + " name='" + doc.data().Name + "' value='Grains' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });
}).catch(function(error){
    console.log("Error getting documents: ", error);
});

//puts meat alts into html into meat alt list
firestore.collection("MeatAlternatives").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        document.getElementById("meatAltUL").innerHTML+="<li class='meatAltLI'><label class='container'><input type='checkbox'"
        + " name='" + doc.data().Name + "' value='MeatAlternatives' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });
}).catch(function(error){
    console.log("Error getting documents: ", error);
});

var prevInputs = JSON.parse(sessionStorage.getItem("foods"));
//puts dairy into html into dairy list
firestore.collection("DairyandEggs").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        document.getElementById("dairyUL").innerHTML+="<li class='dairyLI'><label class='container'><input type='checkbox'"
        + " name='" + doc.data().Name + "' value='DairyandEggs' class='check' onclick='onCheck(this);'>" + doc.data().Name
        + "<span class='checkmark'></span> </label></li>";
    });


    
    if(JSON.parse(sessionStorage.getItem("foods"))){
        var checkboxes = document.getElementsByClassName("check");
        for(let i=0; i< prevInputs.length;i++){
            var found = false;
            for(let j=0; j < checkboxes.length && !found; j++){
                if(prevInputs[i] == checkboxes[j].name){
                    console.log("Found " + prevInputs[i]);
                    checkboxes[j].checked = true;
                    found = true;
                } else {
                    console.log("Didn't find!");
                }
            }
        }
    }
    
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

if(JSON.parse(sessionStorage.getItem("foods"))){
    var cart = JSON.parse(sessionStorage.getItem("foods"));
    var typeCart = JSON.parse(sessionStorage.getItem("types"));
} else{
    var cart = [];
    var typeCart = [];
}



function onCheck(foodItem){
    if(foodItem.checked){    
        cart.push(foodItem.name);
        typeCart.push(foodItem.value);
        //console.log("This food is checked! " + foodItem.name);
    } else{
        var indexName = cart.indexOf(foodItem.value["name"]);
        cart.splice(indexName, 1);
        var indexType = cart.indexOf(foodItem.value["type"]);
        typeCart.splice(indexType, 1);
        //console.log("This food is unchecked! " + foodItem.value["name"]);
    }
    //console.log(cart);
    //console.log(typeCart);
}

function storeArray(){
    sessionStorage.setItem("foods", JSON.stringify(cart));
    sessionStorage.setItem("types", JSON.stringify(typeCart));
    //console.log("Array is stored!")
}






