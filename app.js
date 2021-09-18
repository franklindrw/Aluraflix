// capturar os valores ao clicar
function adicionarManga(){
    var nomeDoManga = document.getElementById("nomeManga").value;
    var urlDaImagem = document.getElementById("urlManga").value;
    var categoriaManga = document.getElementById("categoria").value;

    console.log(categoriaManga);

// verificacoes dos campos
    if(nomeDoManga === "" || urlDaImagem === "" || categoriaManga === "Categoria"){
        console.error("Favor preencha todos os campos");
    }
    else if(urlDaImagem.endsWith(".jpg") || urlDaImagem.endsWith(".png")){
        listarMangas();
    }
    else{
        console.error("Link de imagem inválido");
    }

    document.getElementById("nomeManga").value = "";
    document.getElementById("urlManga").value = "";
}

// monta o campo HTML para reber a imagem e o nome
function listarMangas(nomeDoManga, urlDaImagem, categoriaManga){
    var elementoManga = "<figure><img src=" + urlDaImagem + "><figcaption>" + nomeDoManga + "</figcaption></figure>";

    console.log(categoriaManga);
    if(categoriaManga === "Acao"){
        var listaManga = document.getElementById("listaDeAcao");
    }
    else if(categoriaManga === "Suspense"){
        var listaManga = document.getElementById("listaDeSuspense");
    }
    else if(categoriaManga === "Aventura"){
        var listaManga = document.getElementById("listaDeAventura");
    }
    else{
        var listaManga = document.getElementById("listaDeNovel");
    }
    
    listaManga.innerHTML = listaManga.innerHTML + elementoManga;
}