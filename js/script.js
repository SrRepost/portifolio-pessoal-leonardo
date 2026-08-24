
//Criação de Constantes (guardando objetos)
const formulario = document.getElementById("formContato");
const mensagemForm = document.getElementById("mensagemForm");


//Adicionando um eventlistener para o botão de envio (formulário de contato) 
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

//Testando se os campos estão vazios e enviando mensagem de erro caso falte preencher
    if (nome === "" || email === "" || mensagem === "") {
        mensagemForm.textContent = "Preencha todos os campos.";
        mensagemForm.className = "erro";
        return;
    }
//Validador em Regex de formato do email digitado | Testa se o formato segue a expressão. (Pode ser encontrado em geradores de Regex)
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        mensagemForm.textContent = "Digite um e-mail válido.";
        mensagemForm.className = "erro";
        return;
    }
//Por fim se tudo está correto, realiza uma mensagem de sucesso e limpa o formulário | Simulando um envio real
    mensagemForm.textContent = "Mensagem enviada com sucesso!";
    mensagemForm.className = "sucesso";

    formulario.reset();
});