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

updatePage = function() {
    collRef.orderBy("date_posted", "desc").onSnapshot(function (querySnapshot) {

        var commentDate = [];
        var commentEntry = [];
        var commentRef = [];
        var commentUp = [];
        var commentDown = [];
        
        querySnapshot.forEach(function (doc) {
            commentDate.push(doc.data().date_posted);
            commentEntry.push(doc.data().quote);
            commentRef.push(doc.data().reference);
            commentUp.push(doc.data().upvote);
            commentDown.push(doc.data().downvote);
        });
        
        document.getElementById("commentContainer").innerHTML = "";

        for(var commentUpdate = 0; commentUpdate < querySnapshot.size; commentUpdate++){
            document.getElementById("commentContainer").innerHTML += 
                "<div class=\"jumbotron\"><div class=\"container-fluid\"><div class=\"row\">" + commentEntry[commentUpdate] +  
                "<div class=\"col-lg-10 col-md-9 col-sm-4 col-xs-6\">" + commentDate[commentUpdate] +
                "</div><div class=\"col-lg-2 col-md-3 col-sm-8 col-xs-6\"><div class=\"btn-group float-right\" role=\"group\">" + 
                "<button type=\"button\" class=\"btn btn-xs float-right\" onclick=\"thumbsUp(this.id)\" id=\"" + commentRef[commentUpdate] + "\"><span class=\"glyphicon glyphicon-thumbs-up\" aria-hidden=\"true\"></span> : " + commentUp[commentUpdate] + "</button>" +
                "<button type=\"button\" class=\"btn btn-xs float-right\" onclick=\"thumbsDown(this.id)\" id=\"" + commentRef[commentUpdate] + "\"><span class=\"glyphicon glyphicon-thumbs-down\" aria-hidden=\"true\"></span> : " + commentDown[commentUpdate] + "</button>" +
                "</div></div></div></div></div>"
        }
        console.log(commentDate);
        console.log(commentEntry);
        console.log(commentRef);
    });
};

function thumbsUp(docID) {
    var upvoteNum;
    var documentName = docID;

    // collRef.doc(docID).onSnapshot(function (doc) {
    //     upvoteNum = doc.data().upvote + 1; 
    //     console.log(doc.data().upvote);  
    //     console.log(upvoteNum);

    //     collRef.doc(docID).update({
    //         upvote : upvoteNum
    //     })
    // });

    firestore.runTransaction(function(transaction) {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(collRef.doc(docID)).then(function(commentDoc) {
            if (!commentDoc.exists) {
                throw "Document does not exist!";
            }
            var newUpvote = commentDoc.data().upvote + 1;
            transaction.update(collRef.doc(docID), { upvote: newUpvote });
        });
    }).then(function() {
        console.log("Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
}

function thumbsDown(docID) {
    var downvoteNum;
    var documentName = docID;

    // collRef.doc(docID).onSnapshot(function (doc) {
    //     upvoteNum = doc.data().upvote + 1; 
    //     console.log(doc.data().upvote);  
    //     console.log(upvoteNum);

    //     collRef.doc(docID).update({
    //         upvote : upvoteNum
    //     })
    // });

    firestore.runTransaction(function(transaction) {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(collRef.doc(docID)).then(function(commentDoc) {
            if (!commentDoc.exists) {
                throw "Document does not exist!";
            }
            var newDownvote = commentDoc.data().downvote + 1;
            transaction.update(collRef.doc(docID), { downvote: newDownvote });
        });
    }).then(function() {
        console.log("Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
}

function addComment() {

    var newCommentRef = collRef.doc();

    var commentID = "comment";
    var dateData = new Date().toLocaleString();
    var commentData = {
        quote: document.getElementById("commentInput").value,
        upvote: 0,
        downvote: 0,
        date_posted: dateData,
        reference: newCommentRef.id
    }

    newCommentRef.set(commentData);

    document.getElementById("commentInput").value = "";
};