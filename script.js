let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras=[
    palavra001={
        nome: "JAPAO",
        categoria: "LUGARES"
    },
    palavra002={
        nome: "JUNDIAI",
        categoria: "LUGARES"
    },
    palavra003 ={
        nome: "PARQUE",
        categoria: "LUGARES"
    },
    palavra004={
        nome: "CINEMA",
        categoria: "LUGARES"
    },
    palavra005={
        nome: "Monte Everest",
        categoria: "LUGARES"
    },
    palavra006={
        nome: "MALDIVAS",
        categoria: "LUGARES"
    },
    palavra007={
        nome: "INGLATERRA",
        categoria: "LUGARES"
    },
    palavra008={
        nome: "NOVA ZELANDIA",
        categoria: "LUGARES"
    }, palavra009={
        nome: "AMAZONAS",
        categoria: "LUGARES"
    },
    palavra010={
        nome: "DESERTO",
        categoria: "LUGARES"
    },
    palavra011={
        nome: "BICICLETA",
        categoria: "TRANSPORTES"
    },
    palavra012={
        nome: "TERRA BUS",
        categoria: "TRANSPORTES"
    },
    palavra013={
        nome: "TREM",
        categoria: "TRANSPORTES"
    },
    palavra014={
        nome: "CAVALO",
        categoria: "TRANSPORTES"
    },
    palavra015={
        nome: "AEROBARCO",
        categoria: "TRANSPORTES"
    },
    palavra016={
        nome: "SHOTOVER JET",
        categoria: "TRANSPORTES"
    },
    palavra017={
        nome: "DIRIGIVEL",
        categoria: "TRANSPORTES"
    },
    palavra018={
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTES"
    },
    palavra019={
        nome: "CAMINHAO",
        categoria: "TRANSPORTES"
    },
    palavra020={
        nome: "BALAO",
        categoria: "TRANSPORTES"
    },
    palavra021={
        nome: "PATAS",
        categoria: "ANIMAIS"
    },
    palavra022={
        nome: "AVESTRUZ",
        categoria: "ANIMAIS"
    },
    palavra023={
        nome: "HUMANOS",
        categoria: "ANIMAIS"
    },
    palavra024={
        nome: "GAFANHOTO",
        categoria: "ANIMAIS"
    },
    palavra025={
        nome: "HIPOPOTAMO",
        categoria: "ANIMAIS"
    },
    palavra026={
        nome: "CARDUME",
        categoria: "ANIMAIS"
    },
    palavra027={
        nome: "ANFIBIO",
        categoria: "ANIMAIS"
    },
    palavra028={
        nome: "DRAGAO DE KOMODO",
        categoria: "ANIMAIS"
    },palavra029={
        nome: "LEOPARDO",
        categoria: "ANIMAIS"
    },palavra030={
        nome: "YAK",
        categoria: "ANIMAIS"
    },
    palavra031={
        nome: "TULIPA",
        categoria: "CORES"
    },
    palavra032={
        nome: "VINHO",
        categoria: "CORES"
    },
    palavra033={
        nome: "ARCO IRIS",
        categoria: "CORES"
    },
    palavra034={
        nome: "ROSA",
        categoria: "CORES"
    },
    palavra035={
        nome: "ROXO",
        categoria: "CORES"
    },
    palavra036={
        nome: "TURQUESA",
        categoria: "CORES"
    },
    palavra037={
        nome: "DOURADO",
        categoria: "CORES"
    },
    palavra038={
        nome: "BRANCO",
        categoria: "CORES"
    },
    palavra039={
        nome: "LARANJA",
        categoria: "CORES"
    },
    palavra040={
        nome: "VERMELHO",
        categoria: "CORES"
    },
    palavra041={
        nome: "CALENDARIO",
        categoria: "OBJETO"
    },
    palavra042={
        nome: "PELUCIA",
        categoria: "OBJETO"
    },
    palavra043={
        nome: "QUADRO",
        categoria: "OBJETO"
    },
    palavra044={
        nome: "VELAS",
        categoria: "OBJETO"
    },
    palavra045={
        nome: "PERFUME",
        categoria: "OBJETO"
    },
    palavra046={
        nome: "LENTES",
        categoria: "OBJETO"
    },
    palavra047={
        nome: "GELADEIRA",
        categoria: "OBJETO"
    },
    palavra048={
        nome: "FONE DE OUVIDO",
        categoria: "OBJETO"
    },
    palavra049={
        nome: "LAMPADA",
        categoria: "OBJETO"
    },
    palavra050={
        nome: "CHUVEIRO",
        categoria: "OBJETO"
    },
    palavra051={
        nome: "DIA DOS NAMORADOS",
        categoria: "EVENTO"
    },
    palavra052={
        nome: "NATAL",
        categoria: "EVENTO"
    },palavra053={
        nome: "PASCOA",
        categoria: "EVENTO"
    },palavra054={
        nome: "CARNAVAL",
        categoria: "EVENTO"
    },palavra055={
        nome: "DIA DAS MAES",
        categoria: "EVENTO"
    },
    palavra056={
        nome: "ANO NOVO",
        categoria: "EVENTO"
    },
    palavra057={
        nome: "LOUSA",
        categoria: "ESCOLA"
    },
    palavra058={
        nome: "CANETA",
        categoria: "ESCOLA"
    },
    palavra059={
        nome: "PROFESSOR",
        categoria: "ESCOLA"
    },
    palavra060={
        nome: "BOLA",
        categoria: "ESCOLA"
    },
    palavra061={
        nome: "MERENDA",
        categoria: "ESCOLA"
    },
    palavra062={
        nome: "HOMEWORK",
        categoria: "ESCOLA"
    },
];
criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    palavraSecretaSorteada=palavras[indexPalavra].nome;
    palavraSecretaCategoria=palavras[indexPalavra].categoria;   
}
montarPalavra();
function montarPalavra(){
    const categoria=document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela=document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i=0;i<palavraSecretaSorteada.length;i++){
        if(listaDinamica[i]==undefined){
            listaDinamica[i]="&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML +"<div class='letras'>"+listaDinamica[i]+"</div>"
        }else{
            palavraTela.innerHTML = palavraTela.innerHTML +"<div class='letras'>"+listaDinamica[i]+"</div>"
        }
    }
}
function verificaALetraEscolhida(letra){
    if(tentativas >0){
        mudarStyleLetra("tecla-"+ letra);
        comparaListas(letra);
    }
    
}
function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexoff(letra)
    if(pos<0){
        tentativas--
    }else{
        for(i=0;i< palavraSecretaSorteada.length;i++){
            if(palavraSecretaSorteada[i]==letra){
                listaDinamica[i]=letra;
            }
        }
    }
    let vitoria = true;
    
}
function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}