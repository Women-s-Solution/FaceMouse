document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('loginForm');

	// ARMAZENA A SENHA E O EMAIL INFORMADO NO HTML DO LOGIN
	form.addEventListener('submit', function(event) {
		event.preventDefault();

		// ARMAZENA A SENHA E O EMAIL INFORMADO NO HTML DO LOGIN
		// USO DO .trim() PARA REMOVER ESPAÇOS EM BRANCO
		const senha = document.getElementById("senha").value.trim();
		const email = document.getElementById("email").value.trim();

		// REALIZA O POST ENVIANDO AS INFORMAÇÕES PARA O BACKEND
		fetch('http://localhost:8080/administradores/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				senha
			})
		})

			// SE TUDO ESTIVER OK EXIBE AS INFORMAÇÕES
			.then(response => {
				if (!response.ok) {
					// CASO HAJA UM ERRO
					if (response.status === 401) throw new Error('Email ou senha inválidos.');
					throw new Error('Erro na autenticação.');
				}
				return response.json();// NO FORMATO JSON
			})

			.then(admin => {
				// Também pode armazenar dados no localStorage/sessionStorage, se quiser
				localStorage.setItem('adminLogado', JSON.stringify(admin));

				// Aqui você pode redirecionar para a página de mensagem recebida:
				window.location.href = 'mensagemRecebida.html';
			})
			.catch(error => {
				alert(error.message);
			});
	});
});