document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('loginForm');
	
	form.addEventListener('submit', function(event) {
			event.preventDefault();

        // ARMAZENA A SENHA E O EMAIL INFORMADO NO HTML DO LOGIN
			const senha = document.getElementById("senha").value;
			const email = document.getElementById("email").value;

            