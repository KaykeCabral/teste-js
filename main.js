function mudarCorTexto(){
    document.querySelector("#p1").style.color= "green"

}

function mudarCorFundo(){
    document.querySelector("#p1").style.background= "black"

}
function alterarTexto(){
    textForm= document.querySelector("#textinput").value

    document.querySelector("#texto2").innerHTML=textForm
}