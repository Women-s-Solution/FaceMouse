document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("cadastroUsuarioForm");
	// armazena os dados numa constante pelo id do html

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const nome = document.getElementById("nome").value;
		const email = document.getElementById("email").value;
		const telefone = document.getElementById("telefone").value;
		const assunto  = document.getElementById("assunto").value;
		const mensagem  = document.getElementById("mensagem").value;
		
		try { 

		const response = await fetch("http://localhost:8080/cadastrousuario", { //faz a conexão com a api
						method: "POST",
						headers: {
						"Content-Type": "application/json" //o formato que a api vai receber as informações
						},
		body: JSON.stringify({ //converte os dados recebidos no formato json
							nome,
							email,
							telefone,
							assunto,
							mensagem
						}),

					});
					if (response.ok) {
					alert("Mensagem enviada com sucesso :)");
					window.location.href = "./index.html"
					} else {
					alert("Erro ao enviar mensagem :(");
								}
					} catch (error) { //caso tenha um erro faz isso aqui
					console.error("Erro ao enviar mensagem :(", error);
							}

			});
			});	
										