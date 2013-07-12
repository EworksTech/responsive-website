$(document).ready(function() {
	$('#inputSubmit').click(function(){
		if (IsEmail($('#inputEmail').val())) {
			$.ajax({
			  type: "POST",
			  url: "send.php",
			  data: { 
					name: $('#inputName').val(),
					email: $('#inputEmail').val(),
					message: $('#inputMessage').val()
				}
			}).done(function(data) {
				$('#inputName').val('');
				$('#inputEmail').val('');
				$('#inputMessage').val('');
				$('#formAlert').html('Your message was successfully sent.<br>We will keep in touch shortly.');
			});
		}
		else {
			$('#formAlert').html('Please type a valid e-mail address.');
		}
	});          
});          
