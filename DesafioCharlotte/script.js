function enviar() {
    var nome = document.getElementById("anime").value

    nome = nome.toUpperCase()

    if(nome == "CHARLOTTE") {
        alert("Acertou!")
    } else {
        alert("Errou!")
    }
}