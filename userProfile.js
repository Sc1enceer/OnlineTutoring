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
		var attributes = ['name','email','dob','bio','skills','tutor_stats','planned_classes'];
		for (var i=0;i<attributes.length;i++) {
			var attr = attributes[i];
			$('#'+attr).text((snapshot.val() && snapshot.val()[attr]) || "No data");
		}
	});
});