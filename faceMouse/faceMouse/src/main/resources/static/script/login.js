document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('loginForm');
	
	form.addEventListener('submit', function(event) {
			event.preventDefault();

        // ARMAZENA A SENHA E O EMAIL INFORMADO NO HTML DO LOGIN
			const senha = document.getElementById("senha").value;
			const email = document.getElementById("email").value;
			
			// REALIZA O POST ENVIENDO AS INFORMAÇÕES PARA O BACKEND
			fetch('http://localhost:8080/administradores/login', {
					method: 'POST',
					headers: {
					'Content-Type': 'application/json'
						},
					body: JSON.stringify({
					email: email,
					senha: senha
				})
			})
			
			// SE TUDO ESTIVER OK EXIBE AS INFORMAÇÕES
				.then(response => {
				if (response.ok) {
				return response.json();// NO FORMATO JSON
				// CASO HAJA UM ERRO
				} else if (response.status === 401) {
				throw new Error('Email ou senha inválidos.');
				} else {
				throw new Error('Erro na autenticação.');
					}
					})
				.then(usuario => {
				alert('Login realizado com sucesso! Bem-vindo, ' + usuario.nome);
			// Aqui você pode redirecionar para a página de mensagem recebida:
			window.location.href = 'mensagemRecebida.html';
			
			// Também pode armazenar dados no localStorage/sessionStorage, se quiser
			localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
				})
				.catch(error => {
				alert(error.message);
				});
			});
			});