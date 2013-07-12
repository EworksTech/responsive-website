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
				$('#formAlert').html('Sua mensagem foi enviada com sucesso!<br>Entraremos em contato em breve.');
			});
		}
		else {
			$('#formAlert').html('Por favor, informe um e-mail válido.');
		}
	});          
});          
