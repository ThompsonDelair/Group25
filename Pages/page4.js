var config = {
    apiKey: "AIzaSyCGNoYTlu22XUIBGUL8gfUq4_ysaOXhMHU",
    authDomain: "testerino-ae33c.firebaseapp.com",
    databaseURL: "https://testerino-ae33c.firebaseio.com",
    projectId: "testerino-ae33c",
    storageBucket: "testerino-ae33c.appspot.com",
    messagingSenderId: "931560337847"
  };

firebase.initializeApp(config);
const firestore = firebase.firestore();

const collRef = firestore.collection("Comments");

const inputComment = document.querySelector("#commentInput");
const submitComment = document.querySelector("#commentSubmit");

submitComment.addEventListener("click", function() {
    const commentText = inputComment.value;
    console.log("The comment " + commentText + " has been added.");
})


// firestore.collection("Comments").onSnapshot(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//         commentDate.push(doc.data().date_posted);
//         commentEntry.push(doc.data().quote);
//     });
// });

updatePage = function() {
    collRef.orderBy("date_posted", "desc").onSnapshot(function (querySnapshot) {

        var commentDate = [];
        var commentEntry = [];
        
        querySnapshot.forEach(function (doc) {    
            commentDate.push(doc.data().date_posted);
            commentEntry.push(doc.data().quote);
        });
        
        document.getElementById("commentContainer").innerHTML = "";

        for(var commentUpdate = 0; commentUpdate < querySnapshot.size; commentUpdate++){
            document.getElementById("commentContainer").innerHTML += 
                "<div class=\"jumbotron\"><div class=\"container-fluid\"><div class=\"row\">" + commentEntry[commentUpdate] +  
                "<div class=\"col-lg-10 col-md-9 col-sm-4 col-xs-6\">" + commentDate[commentUpdate] +
                "</div><div class=\"col-lg-2 col-md-3 col-sm-8 col-xs-6\"><div class=\"btn-group float-right\" role=\"group\">" + 
                "<button type=\"button\" class=\"btn btn-xs float-right\"><span class=\"glyphicon glyphicon-thumbs-up\" aria-hidden=\"true\" onclick=\"thumbsUp()\"></span> : 0</button>" +
                "<button type=\"button\" class=\"btn btn-xs float-right\"><span class=\"glyphicon glyphicon-thumbs-down\" aria-hidden=\"true\" onclick=\"thumbsDown()\"></span> : 0</button>" +
                "</div></div></div></div></div>"
        }
        console.log(commentDate);
        console.log(commentEntry);
    });
}

// updatePage = function() {
//     for(var commentUpdate = 0; commentUpdate < numberOfComments; commentUpdate++){
//         document.getElementById("commentContainer").innerHTML += 
//             "<div class=\"jumbotron\"><div class=\"container-fluid\"><div class=\"row\">" + commentEntry[commentUpdate] +  
//             "<div class=\"col-lg-10 col-md-9 col-sm-4 col-xs-6\">" + commentDate[commentUpdate] +
//             "</div><div class=\"col-lg-2 col-md-3 col-sm-8 col-xs-6\"><div class=\"btn-group float-right\" role=\"group\">" + 
//             "<button type=\"button\" class=\"btn btn-xs float-right\"><span class=\"glyphicon glyphicon-thumbs-up\" aria-hidden=\"true\" onclick=\"thumbsUp()\"></span> : 0</button>" +
//             "<button type=\"button\" class=\"btn btn-xs float-right\"><span class=\"glyphicon glyphicon-thumbs-down\" aria-hidden=\"true\" onclick=\"thumbsDown()\"></span> : 0</button>" +
//             "</div></div></div></div></div>"
//         commentUpdate++;
//     }
// }

// firestore.collection("Comments").get().then(function(querySnapshot){
//     querySnapshot.forEach(function(doc){
//         commentDate[count] = doc.data().date_posted;
//         commentEntry[count] = doc.data().quote;
//         count++;
//     });
//     updatePage();
// });

var idNumber = 1;

function thumbsUp() {
    var upvoteNum;
    collRef.doc.get().then(doc => {
        upvoteNum = doc.data().upvote;
    })

    upvoteNum++;

    collRef.doc.update({ upvote: upvoteNum});
    console.log("upvoted");
}

function thumbsDown() {
    var downvoteNum;
    collRef.doc.get().then(doc => {
        downvoteNum = doc.data().downvote;
    })

    downvoteNum++;

    collRef.doc.update({ downvote: downvoteNum});
    console.log("downvoted");
}

function addComment() {
    var commentID = "comment";
    var dateData = new Date().toLocaleString();
    var commentData = {
        quote: document.getElementById("commentInput").value,
        upvote: 0,
        downvote: 0,
        date_posted: dateData
    }

    firestore.collection("Comments").add(commentData);
};