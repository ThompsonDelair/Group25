
//initialize firestore

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

//retrieve foods and types from session storage

var food = JSON.parse(sessionStorage.getItem("foods"));
var types = JSON.parse(sessionStorage.getItem("types"));

// food type arrays

var meats = [];
meats.name = 'Meats';
var vegetables = [];
vegetables.name = 'Vegetables';
var fruits = [];
fruits.name = 'Fruits';
var grains = [];
grains.name = 'Grains';
var meatalternatives = [];
meatalternatives.name = 'Meat Alternatives';
var dairyandeggs = [];
dairyandeggs.name = 'Dairy & Eggs';

// food groups

var groups = [ meats,vegetables,fruits,grains,meatalternatives,dairyandeggs ];
// this stuff is hidden until a button is pressed
    
let infoMain = document.getElementById('infoMain');
    
for(n = 0;n < 3;n++){                
    var content = document.createElement("div");
    content.classList.add('content');
    infoMain.appendChild(content);
    
    var detail1 = document.createElement("div");
    detail1.classList.add('details');
    detail1.innerHTML = 'Title';
    content.append(detail1);
    
    var detail2 = document.createElement("div");
    detail2.classList.add('details');
    detail2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.';
    content.append(detail2);
}

// content info

var storage =  infoMain.childNodes[0];
storage.classList.add('storage');
storage.childNodes[0].innerHTML = "Storage Method";

var cusine = infoMain.childNodes[1];
cusine.classList.add('cusine');
cusine.childNodes[0].innerHTML = "Cusine Tips";

var spoil = infoMain.childNodes[2];
spoil.classList.add('spoil');
spoil.childNodes[0].innerHTML = "Spoil Alert";
spoil.childNodes[1].innerHTML = "Slimy<br>Color chanaged<br>Unpleasant Odor";

// community stuff
var content = document.createElement("div");
infoMain.appendChild(content);

var detail1 = document.createElement("div");
content.append(detail1);
var community = infoMain.childNodes[3];
community.classList.add('community');

for(let i = 0; i < food.length; i++){
    
    var query;
    switch(types[i]){
        case "Meats":
            var meatRef = firestore.collection("Meats");
            query = meatRef.where("Name", "==", food[i])
            query.get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){    
                    //console.log(meats.length);
                    meats.push({
                        'name':food[i],
                        'storage':doc.data().StorageTip,
                        'spoiled':doc.data().Spoiled,
                        'commentNum':i
                    });                    
                });
            });
            break;
            
        case "Vegetables":
            var vegRef = firestore.collection("Vegetables");
            query = vegRef.where("Name", "==", food[i]);
            query.get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                    vegetables.push({
                            'name':food[i],
                            'storage':doc.data().StorageTip,
                            'spoiled':doc.data().Spoiled,
                            'commentNum':i
                    });
                });
            });
            break;
       
        case "Fruits":
            var fruitRef = firestore.collection("Fruits");
            query = fruitRef.where("Name", "==", food[i])
            query.get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                    fruits.push({
                        'name':food[i],
                        'storage':doc.data().StorageTip,
                        'spoiled':doc.data().Spoiled,
                        'commentNum':i
                    });
                });
            });
            break;
       
        case "Grains":
            var grainRef = firestore.collection("Grains");
            query = grainRef.where("Name", "==", food[i])
            query.get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                    grains.push({
                        'name':food[i],
                        'storage':doc.data().StorageTip,
                        'spoiled':doc.data().Spoiled,
                        'commentNum':i
                    });
                });
            });
            break;
      
        case "MeatAlternatives":
            var meatAltRef = firestore.collection("MeatAlternatives");
            query = meatAltRef.where("Name", "==", food[i])
            query.get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                    meatalternatives.push({
                        'name':food[i],
                        'storage':doc.data().StorageTip,
                        'spoiled':doc.data().Spoiled,
                        'commentNum':i
                    });
                });
            });
            break;
            
        case "DairyandEggs":
            var dairyRef = firestore.collection("DairyandEggs");
            query = dairyRef.where("Name", "==", food[i])
            query.get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                    dairyandeggs.push({
                        'name':food[i],
                        'storage':doc.data().StorageTip,
                        'spoiled':doc.data().Spoiled,
                        'commentNum':i
                    });
                });
            });
            break;
    }
    
//    //community content
//    var communityAccordian = document.createElement("div");
//    communityAccordian.setAttribute("id", "accordian");
//    
//    var communityCard = document.createElement("div");
//    communityCard.classList.add("card");
//    
//    var communityDiv1 = document.createElement("div");
//    communityDiv1.classList.add("card-header", "commentText");
//    communityDiv1.setAttribute("onclick", "updatePage(" + i + ")");
//    communityDiv1.setAttribute("data-toggle", "collapse");
//    communityDiv1.setAttribute("data-target", "#comment" + i);
//    
//    var communityComment = document.createElement("a");
//    communityComment.innerHTML = "Community";
//    
//    var communityDropdown = document.createElement("div");
//    communityDropdown.setAttribute("id", "comment" + i);
//    communityDropdown.setAttribute("data-parent", "#accordion");
//    communityDropdown.classList.add("collapse");
//    
//    var communityDropdownBody = document.createElement("div");
//    communityDropdownBody.classList.add("card-body");
//    
//    var communityCommentContainer = document.createElement("div");
//    communityCommentContainer.setAttribute("id", "commentContainer" + i);
//    
//    var communityCommentInputContainer = document.createElement("div");
//    communityCommentInputContainer.classList.add("input-group");
//    communityCommentInputContainer.setAttribute("id", "commentInputContainer");
//    
//    var communityCommentText = document.createElement("textarea");
//    communityCommentText.classList.add("form-control");
//    communityCommentText.setAttribute("id", "commentSubmit" + i + "Input");
//    communityCommentText.setAttribute("rows", "3");
//    
//    var communityCommentSubmit = document.createElement("span");
//    communityCommentSubmit.classList.add("input-group-btn");
//    
//    var communityCommentSubmitBtn = document.createElement("button");
//    communityCommentSubmitBtn.classList.add("btn", "btn-default", "align-middle");
//    communityCommentSubmitBtn.setAttribute("id", "commentSubmit" + i)
//    communityCommentSubmitBtn.setAttribute("onclick", "addComment(this.id, " + i + ")")
//    communityCommentSubmitBtn.innerHTML = "Submit";
//    
//    communityCommentSubmit.appendChild(communityCommentSubmitBtn);
//    communityCommentInputContainer.appendChild(communityCommentText);
//    communityCommentInputContainer.appendChild(communityCommentSubmit);
//    
//    communityDropdownBody.appendChild(communityCommentContainer);
//    communityDropdownBody.appendChild(communityCommentInputContainer);
//    
//    communityDropdown.appendChild(communityDropdownBody);
//    
//    communityDiv1.appendChild(communityComment);
//    
//    communityCard.appendChild(communityDiv1);
//    communityCard.appendChild(communityDropdown);
//    
//    communityAccordian.appendChild(communityCard);
//    
//    community.childNodes[0].appendChild(communityAccordian);
 }


//function (num) {
//    
//}

//pulls comment data from database and inserts into community
function updatePage(num) {
    firestore.collection(types[num]).doc(food[num]).collection("Comments").orderBy("date_posted", "desc").onSnapshot(function (querySnapshot) {
        var commentDate = [];
        var commentEntry = [];
        var commentID = [];
        var commentUp = [];
        var commentDown = [];
    
        querySnapshot.forEach(function (doc) {
            commentDate.push(doc.data().date_posted);
            commentEntry.push(doc.data().quote);
            commentID.push(doc.data().reference);
            commentUp.push(doc.data().upvote);
            commentDown.push(doc.data().downvote);
        });
        
        document.getElementById("commentContainer" + num).innerHTML = "";
        
        for(var commentUpdate = 0; commentUpdate < querySnapshot.size; commentUpdate++){
            var jumbo = document.createElement("div");
            jumbo.classList.add("jumbotron");
            
            var jumboContent = document.createElement("div");
            jumboContent.classList.add("containter-fluid");
            
            var jumboCommentEntry = document.createElement("div");
            jumboCommentEntry.classList.add("row");
            jumboCommentEntry.innerHTML = commentEntry[commentUpdate];
            
            var jumboBreak = document.createElement("div");
            jumboBreak.innerHTML = "<br/>";
            
            var jumboCommentData = document.createElement("div");
            jumboCommentData.classList.add("row");
            
            var jumboCommentDate = document.createElement("div");
            jumboCommentDate.setAttribute("id", "dateLeft");
            jumboCommentDate.classList.add("col-lg-8", "col-md-8", "col-sm-8", "col-8");
            jumboCommentDate.innerHTML = commentDate[commentUpdate];
            
            var jumboCommentBtn = document.createElement("div");
            jumboCommentBtn.classList.add("col-lg-4", "col-md-4", "col-sm-4", "col-4");
            
            var jumboCommentBtnGroup = document.createElement("div");
            jumboCommentBtnGroup.classList.add("btn-group", "float-right");
            jumboCommentBtnGroup.setAttribute("role", "group");
            
            var jumboBtnUp = document.createElement("button");
            jumboBtnUp.setAttribute("type", "button");
            jumboBtnUp.classList.add("btn", "btn-xs", "float-right");
            jumboBtnUp.setAttribute("onclick", "thumbsUp(this.id, " + num + ")");
            jumboBtnUp.setAttribute("id", commentID[commentUpdate]);
            jumboBtnUp.innerHTML = "&#128402; : " + commentUp[commentUpdate];
            
            var jumboBtnDown = document.createElement("button");
            jumboBtnDown.setAttribute("type", "button");
            jumboBtnDown.classList.add("btn", "btn-xs", "float-right");
            jumboBtnDown.setAttribute("onclick", "thumbsDown(this.id, " + num + ")");
            jumboBtnDown.setAttribute("id", commentID[commentUpdate]);
            jumboBtnDown.innerHTML = "&#128403; : " + commentDown[commentUpdate];
            
            jumboCommentBtnGroup.appendChild(jumboBtnUp);
            jumboCommentBtnGroup.appendChild(jumboBtnDown);
            
            jumboCommentBtn.appendChild(jumboCommentBtnGroup);
            
            jumboCommentData.appendChild(jumboCommentDate);
            jumboCommentData.appendChild(jumboCommentBtn);
            
            jumboContent.appendChild(jumboCommentEntry);
            jumboContent.appendChild(jumboBreak);
            jumboContent.appendChild(jumboCommentData);
            
            jumbo.appendChild(jumboContent);
            
            document.getElementById("commentContainer" + num).appendChild(jumbo);
        }
    });
}
    
//upvote
function thumbsUp(docID, num) {
    var upvoteNum;
    
    console.log(docID);
    if (localStorage.getItem(docID + "up")) {
        console.log("already clicked");
        return;
    } else {
        firestore.runTransaction(function(transaction) {
            // This code may get re-run multiple times if there are conflicts.
            return transaction.get(firestore.collection(types[num]).doc(food[num]).collection("Comments").doc(docID)).then(function(commentDoc) {
                if (!commentDoc.exists) {
                    throw "Document does not exist!";
                }
                var newUpvote = commentDoc.data().upvote + 1;
                transaction.update(firestore.collection(types[num]).doc(food[num]).collection("Comments").doc(docID), { upvote: newUpvote });
            });
        }).then(function() {
            console.log("Transaction successfully committed!");
        }).catch(function(error) {
            console.log("Transaction failed: ", error);
        });
        
        localStorage.setItem(docID + "up", true);
    }
}
    
//downvote
function thumbsDown(docID, num) {
    var downvoteNum;
    if (localStorage.getItem(docID + "down")) {
        console.log("already clicked");
        return;
    } else {
        firestore.runTransaction(function(transaction) {
            // This code may get re-run multiple times if there are conflicts.
            return transaction.get(firestore.collection(types[num]).doc(food[num]).collection("Comments").doc(docID)).then(function(commentDoc) {
                if (!commentDoc.exists) {
                    throw "Document does not exist!";
                }
                var newDownvote = commentDoc.data().downvote + 1;
                transaction.update(firestore.collection(types[num]).doc(food[num]).collection("Comments").doc(docID), { downvote: newDownvote });
                if(newDownvote > 9) {
                    firestore.collection(types[num]).doc(food[num]).collection("Comments").doc(docID).delete();
                }
            });
        }).then(function() {
            console.log("Transaction successfully committed!");
        }).catch(function(error) {
            console.log("Transaction failed: ", error);
        });
        localStorage.setItem(docID + "down", true);
    }
}
    
//submits the comment to firebase
addComment = function(submitID, num) {
    var newCommentRef = firestore.collection(types[num]).doc(food[num]).collection("Comments").doc();
    
    var dateData = new Date().toLocaleString();
    var comment = document.getElementById(submitID + "Input").value;
    comment = comment.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    var commentData = {
        quote: comment,
        upvote: 0,
        downvote: 0,
        date_posted: dateData,
        reference: newCommentRef.id
    }
    newCommentRef.set(commentData);
    document.getElementById(submitID + "Input").value = "";
    
    console.log("comment submitted");
};

query.get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        //console.log('beep');
        populate();
    });
});

// populate selection

function populate(){
    
    //console.log('boop');
    // reference to div that contains the food item selection anchors

    var selections = document.getElementById('selections');

    var toggle = 0;        

    for(var i = 0; i < groups.length; i++){
        
        // if group is empty, skip this loop
        
        if(groups[i].length <= 0){
            continue;
        }                
        
        // toggle between which of the two columns the content is placed in
        
        var column;
            
        if(toggle % 2 == 0){
            column = selections.children[0];        
        } else {
            column = selections.children[1];  
        }
        toggle++;
        
        // food group title 
    
        var groupTitle = document.createElement('div');
        groupTitle.classList.add('groupTitle');
        groupTitle.innerHTML = groups[i].name;
        column.appendChild(groupTitle);               
        
        // food items
        
        for(var n = 0; n < groups[i].length; n++){              
        
            
            var item = document.createElement('a');
            item.setAttribute('href','#');
            var itemfunction = 'onSelect(groups[' + i + '][' + n + ']);'
            item.setAttribute('onclick',itemfunction);
            item.classList.add('item');     
            
            column.appendChild(item);                
            
            var image = document.createElement('img');
            
            image.setAttribute('src','Images/foodIcons/cheese-01.png');
            
            image.setAttribute('width','20px');
            image.setAttribute('height','20px');
            item.appendChild(image);
            
            var label = document.createElement('span');
            label.innerHTML = groups[i][n].name;
            item.appendChild(label);
            
            switch(groups[i].name){
                    
                case "Meats":
                    item.classList.add('meat');
                    break;
                    
                case "Vegetables":
                    item.classList.add('veg');
                    break;
                    
                case "Fruits":
                    item.classList.add('fruits');
                    break;
             
                case "Grains":
                    item.classList.add('grains');
                    break;
            
              case "Meat Alternatives":
                  item.classList.add('meatalt');
                  break;
                  
              case "Dairy & Eggs":
                  item.classList.add('dairy');
                  break;
            }            
            
            // clones the item element (with children) for the mobile selection div
            document.getElementById('selections').children[2].appendChild(item.cloneNode(true));
        
        }                
    }
}

//onSelect;

function onSelect(input){
    //console.log('hi there!');
    //console.log(input.name);
    //console.log(input.spoiled);
    //console.log(input.storage);
    
    var infoMain = document.getElementById("infoMain");
    infoMain.style.display = "block";
    
    var infoIntro = document.getElementById("infoIntro");
    infoIntro.style.display = "none";
    
    infoMain.children[0].children[1].innerHTML = input.storage;
    infoMain.children[2].children[1].innerHTML = input.spoiled;   
    
    let i = input.commentNum;
    
    infoMain.children[3].innerHTML = '';
    
    //community content
    var communityAccordian = document.createElement("div");
    communityAccordian.setAttribute("id", "accordian");
    
    var communityCard = document.createElement("div");
    communityCard.classList.add("card");
    
    var communityDiv1 = document.createElement("div");
    communityDiv1.classList.add("card-header", "commentText");
    communityDiv1.setAttribute("onclick", "updatePage(" + i + ")");
    communityDiv1.setAttribute("data-toggle", "collapse");
    communityDiv1.setAttribute("data-target", "#comment" + i);
    
    var communityComment = document.createElement("a");
    communityComment.innerHTML = "Community";
    
    var communityDropdown = document.createElement("div");
    communityDropdown.setAttribute("id", "comment" + i);
    communityDropdown.setAttribute("data-parent", "#accordion");
    communityDropdown.classList.add("collapse");
    
    var communityDropdownBody = document.createElement("div");
    communityDropdownBody.classList.add("card-body");
    
    var communityCommentContainer = document.createElement("div");
    communityCommentContainer.setAttribute("id", "commentContainer" + i);
    
    var communityCommentInputContainer = document.createElement("div");
    communityCommentInputContainer.classList.add("input-group");
    communityCommentInputContainer.setAttribute("id", "commentInputContainer");
    
    var communityCommentText = document.createElement("textarea");
    communityCommentText.classList.add("form-control");
    communityCommentText.setAttribute("id", "commentSubmit" + i + "Input");
    communityCommentText.setAttribute("rows", "3");
    
    var communityCommentSubmit = document.createElement("span");
    communityCommentSubmit.classList.add("input-group-btn");
    
    var communityCommentSubmitBtn = document.createElement("button");
    communityCommentSubmitBtn.classList.add("btn", "btn-default", "align-middle");
    communityCommentSubmitBtn.setAttribute("id", "commentSubmit" + i)
    communityCommentSubmitBtn.setAttribute("onclick", "addComment(this.id, " + i + ")")
    communityCommentSubmitBtn.innerHTML = "Submit";
    
    communityCommentSubmit.appendChild(communityCommentSubmitBtn);
    communityCommentInputContainer.appendChild(communityCommentText);
    communityCommentInputContainer.appendChild(communityCommentSubmit);
    
    communityDropdownBody.appendChild(communityCommentContainer);
    communityDropdownBody.appendChild(communityCommentInputContainer);
    
    communityDropdown.appendChild(communityDropdownBody);
    
    communityDiv1.appendChild(communityComment);
    
    communityCard.appendChild(communityDiv1);
    communityCard.appendChild(communityDropdown);
    
    communityAccordian.appendChild(communityCard);
    
    infoMain.childNodes[3].appendChild(communityAccordian);
    
}   


    