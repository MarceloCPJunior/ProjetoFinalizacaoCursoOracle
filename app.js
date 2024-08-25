varificarCampoResposta()

function varificarCampoResposta() {
    var texto = document.getElementById("texto_resposta").value.trim();

    if(texto !== "") {
        document.getElementById("div_sem_mensagem").style.display = "none";
        document.getElementById("div_com_mensagem").style.display = "flex";
    } else {
        document.getElementById("div_sem_mensagem").style.display = "flex";
        document.getElementById("div_com_mensagem").style.display = "none";
    }
}

function criptografar() {
    var texto = document.getElementById("texto_digitado").value;

    var texto_criptografado = texto.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    
    document.getElementById("texto_resposta").value = texto_criptografado;

    varificarCampoResposta();
}

function descriptografar() {
    var texto = document.getElementById("texto_digitado").value;

    var texto_descriptografado = texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    
    document.getElementById("texto_resposta").value = texto_descriptografado;

    varificarCampoResposta();
}

function copiar() {
    var texto = document.getElementById("texto_resposta").value;

    navigator.clipboard.writeText(texto);
}