// Espera o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
   
    // Obtém os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
   
    // Pega o valor do parâmetro "id"
    const usuarioId = urlParams.get("id");
   
    // Se houver um ID do usuario na URL
    if (usuarioId) {
       
        // Faz uma requisição ao backend para buscar os dados do usuario (inclusive a mensagem)
        fetch(`http://localhost:8080/usuarios/${usuarioId}`)
            .then(response => response.json()) // Converte a resposta para JSON
            .then(usuario => {
                // Atualiza o autor da mensagem
                document.getElementById("usuario-nome").textContent = usuario.nome;
				
				//Atualiza o email do usuario
				document.getElementById("usuario-email").textContent = usuario.email;
				
				//Atualiza o assunto da mensagem
                document.getElementById("usuario-assunto").textContent = usuario.assunto;

                // Atualiza o texto da mensagem
                document.getElementById("usuario-mensagem").textContent = usuario.mensagem;
               
            })
            // Exibe erro no console se a requisição falhar
            .catch(error => console.error("Erro ao carregar as mensagens:", error));
    }
});