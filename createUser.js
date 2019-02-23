$(document).ready(function () {
	$('#create').click(function() {
		var name = $('#new_name').val();
		var email = $('#new_email').val();
		var dob = $('#new_dob').val();
		var newUser = firebase.database().ref('users').push();
		newUser.set({
			'name': name,
			'email': email,
			'dob': dob
		});
	});
});