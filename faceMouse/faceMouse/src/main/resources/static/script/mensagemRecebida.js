// Espera o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
   fetch("http://localhost:8080/usuarios")// consulta os dados dos usuários
   .then(response => response.json())// converte para json
   .then(usuarios => {
	const container = document.getElementById("lista-mensagens");// armazena o espaço da section do html na const container
	
	if(usuarios.length === 0){// se não tiver dados nos usuários
		container.innerHTML = "<p class='erro'>Nenhuma mensagem foi enviada.</p>";
		return;
	}
	
	usuarios.forEach(usuario => {// para cada usuário
		const card = document.createElement("div");// cria uma div
		card.classList.add("mensagem-card");// com uma classe chamada 'mensagem-card'
		
		// adiciona no html um card com essas informações
		card.innerHTML = `
		<h3>${usuario.nome}</h3>
		<h5>${usuario.email}</h5>
		<h4>${usuario.assunto}</h4>
		<p>${usuario.mensagem}</p>`;
		
		container.appendChild(card);// appendChild insere o card (elemento filho) dentro do container (elemento pai)
	});
   })
   .catch(error => { // caso dê erro
	console.error("Erro ao carregar mensagens :(", error);
	document.getElementById("lista-mensagens").innerHTML =
	"<p class='erro'>Erro ao carregar mensagens. Tente novamente depois.</p>";
   });
   
   //Logout   
   document.getElementById('btn-logout').addEventListener('click', () => {
       localStorage.removeItem('adminLogado');
       alert('Logout efetuado!');
       window.location.href = 'index.html';
    });
});