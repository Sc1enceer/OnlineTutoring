// Initialize Firebase
var config = {
    apiKey: "AIzaSyCfXAnijnzuBrS9SoMlFPR54YitV_C74WY",
    authDomain: "online-tutor-d5a09.firebaseapp.com",
    databaseURL: "https://online-tutor-d5a09.firebaseio.com",
    projectId: "online-tutor-d5a09",
    storageBucket: "online-tutor-d5a09.appspot.com",
    messagingSenderId: "82128665562"
};
firebase.initializeApp(config);
$(document).ready(function(){
	var uid = new URL(window.location.href).searchParams.get("uid");
	firebase.database().ref('/users/'+uid).once('value').then(function(snapshot){
		// Fill in text values
		var attributes = ['name','email','dob','bio'];
		for (var i=0;i<attributes.length;i++) {
			var attr = attributes[i];
			$('#'+attr).text((snapshot.val() && snapshot.val()[attr]) || "No data");
		}
		// List skills
		var skillsList = $('#skills');
		snapshot.child('skills').forEach(function(skill){
			skillsList.append('<li>'+skill.val()+'</li>');
		});
		// Set tutor stats
		var averageRating = 0;
		var numRatings;
		snapshot.child('ratings').forEach(function(rating){
			averageRating += parseInt(rating.val().score);
		});
	    numRatings = snapshot.child('ratings').numChildren();
		averageRating = averageRating / numRatings;
		$('#avgRating').append(averageRating);
		$('#numRatings').append(numRatings);
		// Set upcoming classes
	});
	// Set profile picture
	firebase.storage().ref().child('profiles/'+uid+'.jpg').getDownloadURL().then(function(url){
		$('#profilePic').attr('src', url);
	});
});