const mapa = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
}
const cajaResultados = document.querySelector(".texto_encriptado");
const botonCopiar = document.querySelector(".caja_boton_copiar");
const mensajesPreClick = document.querySelector(".mensajes_pre_click");
const vector = document.querySelector(".vector");

cajaResultados.style.display = "none";
botonCopiar.style.display = "none";

function encriptar(){
    cadena = document.getElementById("caja_principal").value;
    if (cadena === "" || validar(cadena) == false){
        alert("Texto inválido. Solo se admiten letras en minúscula y sin tilde");
    } else {
        textoEncriptado = codifica(cadena);  
    }
    cajaResultados.innerHTML = textoEncriptado
    mensajesPreClick.style.display = "none"
    vector.style.display = "none"
    cajaResultados.style.display = "flex"
    botonCopiar.style.display = "flex"
}

function desencriptar(){
    cadena = document.getElementById("caja_principal").value;
    if (cadena === "" || validar(cadena) == false){
        alert("Texto inválido. Solo se admiten letras en minúscula y sin tilde");
    } else {
        textoDesencriptado = decodifica(cadena);  
    }
    cajaResultados.innerHTML = textoDesencriptado
    mensajesPreClick.style.display = "none"
    vector.style.display = "none"
    cajaResultados.style.display = "flex"
    botonCopiar.style.display = "flex"    
}

function codifica(cadena){
    Object.keys(mapa).forEach((key) => {
        cadena = cadena.replaceAll(key, mapa[key]);
    })
    return cadena
}

function decodifica(cadena){
    Object.keys(mapa).forEach((key) => {
        cadena = cadena.replaceAll(mapa[key], key);
    })
    return cadena
}


function validar(cadena){
    let regex = /[^a-zñ\s]/g;
    if (cadena.match(regex) == null){
        return true;
    } else {
        return false;
    }
    
}
function copiar() {
    let copyText = document.querySelector(".texto_encriptado").innerHTML;
    navigator.clipboard.writeText(copyText);
    alert("Resultado copiado con éxito!")    
}