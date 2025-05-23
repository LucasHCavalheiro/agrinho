let tamanhoFonte = 100;

function aumentarFonte() {
    if (tamanhoFonte < 200) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + '%';
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 50) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + '%';
    }
}

function resetarFonte() {
    tamanhoFonte = 100;
    document.body.style.fontSize = '100%';
}
