var uid = //Something
firebase.database().ref('users/'+uid).once('value').then(function(snapshot){
	var attributes = {
		'tutor': snapshot.val().name;
		'title': $('#title').val();, 
		'startTime': $('#startTime').val();, 
		'duration': $('#duration').val();, 
		'maxStudents': $('#maxStudents').val();
	};

	var classRef = firebase.database().ref('classes/'+uid).push();
	classRef.set(attributes);
});