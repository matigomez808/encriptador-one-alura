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
    // let regex = /[^a-zñ\s]/g;
    // if (cadena.match(regex) == null){
    //     return true;
    // } else {
    //     return false;
    // }
    // if ((cadena.search("á") == -1) &&
    //     (cadena.search("é") == -1) &&
    //     (cadena.search("í") == -1) &&
    //     (cadena.search("ó") == -1) &&
    //     (cadena.search("ú") == -1) &&
    //     (cadena2 === cadena)
    // ) return true;
    // else {
        //     return false;
        // }
    
    
    let cadena2 = cadena.toLowerCase();
    const prohibidos = [
        "á",
        "é",
        "í",
        "ó",
        "ú"
    ] 

    let caracteres = cadena.split("");

    let valido = true;

    caracteres.forEach(caracter => {
       if (prohibidos.includes(caracter)) valido = false;
    }) 

    if (!valido) return false

    if (cadena2 !== cadena) return false

    return true 
}


function copiar() {
    let copyText = document.querySelector(".texto_encriptado").innerHTML;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard
      .writeText(copyText.value)
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
}