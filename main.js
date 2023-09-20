function adicionarLinha() {

    var nome = document.getElementById("nome-registrado").value;
    var numero = document.getElementById("telefone-registrado").value;
   
    if (nome !== "" && numero !=="") {

    var tabela = document.getElementById("lista-telefonica").getElementsByTagName("tbody")[0];

    var novaLinha = tabela.insertRow(-1);
    var linhaNome = novaLinha.insertCell(0);
    var linhaNumero = novaLinha.insertCell(1);

    linhaNome.innerHTML = nome;
    linhaNumero.innerHTML = numero;

    document.getElementById("nome-registrado").value = "";
    document.getElementById("telefone-registrado").value = "";

    } else {
       
    }

}
    document.getElementById("botao").addEventListener("click", function() {
         adicionarLinha();
         verificarContato();
    }); 
 