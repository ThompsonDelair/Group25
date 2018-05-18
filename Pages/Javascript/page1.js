

function dietWebFunc(){
    console.log("You called diet web!");
    switch(document.getElementById("dietSelectWeb").value){
        case "none":
            sessionStorage.setItem("diet", "none");
            break;
        case "veg":
            sessionStorage.setItem("diet", "veg");
            break;
        case "vegan":
            sessionStorage.setItem("diet", "vegan");
            break;
        case "glufree":
            sessionStorage.setItem("diet", "glufree");
            break;
   }
   console.log("You have selected " + sessionStorage.getItem("diet"));
}

function cuisWebFunc(){
    console.log("You called cuisine web!");
   switch(document.getElementById("cuisSelectWeb").value){
        case "na":
            sessionStorage.setItem("cuisine", "na");
            break;
        case "korean":
            sessionStorage.setItem("cuisine", "korean");
            break;
        case "chinese":
            sessionStorage.setItem("cuisine", "chinese");
            break;
        
   }
   console.log("You have selected " + sessionStorage.getItem("cuisine"));
}

function dietMobFunc(){
    console.log("You called diet mob func!");
    switch(document.getElementById("dietSelectMob").value){
        case "none":
            sessionStorage.setItem("diet", "none");
            break;
        case "veg":
            sessionStorage.setItem("diet", "veg");
            break;
        case "vegan":
            sessionStorage.setItem("diet", "vegan");
            break;
        case "glufree":
            sessionStorage.setItem("diet", "glufree");
            break;
   }
   console.log("You have selected " + sessionStorage.getItem("diet"));
}

function cuisMobFunc(){
    console.log("You called cuis mob func!");
    switch(document.getElementById("cuisSelectMob").value){
        case "na":
            sessionStorage.setItem("cuisine", "na");
            break;
        case "korean":
            sessionStorage.setItem("cuisine", "korean");
            break;
        case "chinese":
            sessionStorage.setItem("cuisine", "chinese");
            break;
        
   }
   console.log("You have selected " + sessionStorage.getItem("cuisine"));
}
sessionStorage.setItem("diet", "none");