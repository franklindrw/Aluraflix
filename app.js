// capturar os valores ao clicar
function adicionarManga(){
    var nomeDoManga = document.getElementById("nomeManga").value;
    var urlDaImagem = document.getElementById("urlManga").value;
    var categoriaManga = document.getElementById("categoria").value;
    var categoria = "listaDe" + categoriaManga;;


// verificacoes dos campos
    if(nomeDoManga === "" || urlDaImagem === "" || categoriaManga === "Categoria"){
         console.error("Favor preencha todos os campos");
     }
     else if(urlDaImagem.endsWith(".jpg") || urlDaImagem.endsWith(".png")){

     //após a verificação, recebe as variaveis e monta a imagem com o título e adiciona conforme a categoria selecionada
    var elementoManga = "<figure><img src=" + urlDaImagem + "><figcaption>" + nomeDoManga + "</figcaption></figure>";
    var listarManga = document.getElementById(categoria);
    listarManga.innerHTML = listarManga.innerHTML + elementoManga;

     }
     else{
         console.error("Link de imagem inválido");
     }

    //por fim, limpa os campos para adicionar mais quadrinhos
    document.getElementById("nomeManga").value = "";
    document.getElementById("urlManga").value = "";
}
