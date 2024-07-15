//---------- Select Items ----------//
const btnEncrypt = document.querySelector(".btn-encrypt");
const txtEncrypt = document.querySelector(".text");
const alert = document.querySelector(".terms p");
const answer = document.querySelector(".message");
const content = document.querySelector(".message-encrypted");
const imgContent = document.querySelector(".doll");
const btnCopy = document.querySelector(".btn-copy");
const btnDecrypt = document.querySelector(".btn-decrypt");

//---------- Button Encrypt ----------//
btnEncrypt.addEventListener("click", e=>{
    e.preventDefault();
    let text = txtEncrypt.value;
    let txt = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "")

    if (text == ""){
        alert.style.color = "#0A3871";
        alert.style.fontWeight = "800";
        alert.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            alert.removeAttribute("style");
        },1500);
    }

    else if (text !== txt){
        alert.style.color = "#0A3871";
        alert.style.fontWeight = "800";
        alert.textContent = "El texto no debe tener acentos";

        setTimeout(()=>{
            alert.removeAttribute("style");
        },1500);
    }

    else if (text !== text.toLowerCase()){
        alert.style.color = "#0A3871";
        alert.style.fontWeight = "800";
        alert.textContent = "El texto debe tener mayúsculas";

        setTimeout(()=>{
            alert.removeAttribute("style");
        },1500);
    }

    else {
        text = text.replace(/e/mg, "enter");
        text = text.replace(/i/mg, "imes");
        text = text.replace(/a/mg, "ai");
        text = text.replace(/o/mg, "ober");
        text = text.replace(/u/mg, "ufat");

        answer.innerHTML = text;
        btnCopy.style.visibility = "inherit";
        content.remove();
        imgContent.remove();
    }
});

//---------- Button Decrypt ----------//
btnDecrypt.addEventListener("click", e=>{
    e.preventDefault();
    let text = txtEncrypt.value;
    let txt = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "")

    if (text == ""){
        alert.style.color = "#0A3871";
        alert.style.fontWeight = "800";
        alert.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            alert.removeAttribute("style");
        },1500);
    }

    else if (text !== txt){
        alert.style.color = "#0A3871";
        alert.style.fontWeight = "800";
        alert.textContent = "El texto no debe tener acentos";

        setTimeout(()=>{
            alert.removeAttribute("style");
        },1500);
    }

    else if (text !== text.toLowerCase()){
        alert.style.color = "#0A3871";
        alert.style.fontWeight = "800";
        alert.textContent = "El texto debe tener mayúsculas";

        setTimeout(()=>{
            alert.removeAttribute("style");
        },1500);
    }

    else {
        text = text.replace(/ai/mg, "a");
        text = text.replace(/enter/mg, "e");
        text = text.replace(/imes/mg, "i");
        text = text.replace(/ober/mg, "o");
        text = text.replace(/ufat/mg, "u");

        answer.innerHTML = text;
        btnCopy.style.visibility = "inherit";
        content.remove();
        imgContent.remove();
    }
});

//---------- Button Copy ----------//
btnCopy.addEventListener("click", e=> {
    e.preventDefault();
    let copy = answer;
    copy.select();
    document.execCommand("copy");
});