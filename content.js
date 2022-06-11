function adicionar_link(link) {
    document.getElementById('magnetExtractor').insertAdjacentHTML('afterbegin', `<div style="margin: 15px;min-height: 50px"><a href="${link}">${link}</a></div>`)
}

function mostrarLinks(listaNodes) {
    let link
    let isFilled
    let noDiv
    isFilled = listaNodes.length > 0
    noDiv = document.getElementById("magnetExtractor") === null

    if(noDiv){
        document.head.insertAdjacentHTML('afterend','<div id="magnetExtractor" style="min-height: 50px;font-color: black; font-size: 18px; background-color:white"></div>')
    } else {
        document.getElementById("magnetExtractor").innerHTML = ""
    }

    if(isFilled){
        for(link of listaNodes){
            adicionar_link(link)
        }
    } else{
        document.getElementById("magnetExtractor").innerHTML = "Nenhum Link Encontrado"
        setTimeout(() => document.getElementById("magnetExtractor").remove(), 5000)
    } 
}

function start() {
    let lista
    lista = document.body.querySelectorAll("a")
    lista = [...lista]
    lista = lista.filter((elemento) => elemento.href.includes('magnet:?xt=urn:btih:'))
    mostrarLinks(lista)
}

console.log("Starting Extractor")
start()