// taille labo ou 10'000
let labosynapse = false

let presencecurare = false
let presencenervin = false
let presencetetrodotoxine = false

let btnlabo = document.getElementById("labosynapse")
let commandeslabo = document.getElementById("CommandesSpecifiqueslabo")
let btn10000 = document.getElementById("zoomsynapse")
let commandes10000 = document.getElementById("CommandesSpecifiques10000")

let curarebtn = document.getElementById("curare")
let nervinbtn = document.getElementById("nervin")
let tetrodotoxinebtn = document.getElementById("tetrodotoxine")


function passage10000(){
    labosynapse = false;
    btn10000.style.display="none";
    commandes10000.style.display="block";
    btnlabo.style.display="block";
    commandeslabo.style.display="none";
}
function passagelabo(){
    labosynapse = true;
    btn10000.style.display="block";
    commandes10000.style.display="none";
    btnlabo.style.display="none";
    commandeslabo.style.display="block";
}

// controles d'ajout ou retrait des poisons
function changecurare(){
    if(presencecurare == false){
        presencecurare = true
        curarebtn.innerHTML = "retirer curare"
    }
    else{
        presencecurare = false
        curarebtn.innerHTML = "injecter curare"
    }

}

function changenervin(){
    if(presencenervin == false){
        presencenervin = true
        nervinbtn.innerHTML = "retirer nervin"
    }
    else{
        presencenervin = false
        nervinbtn.innerHTML = "injecter nervin"
    }

}

function changetetrodotoxine(){
    if(presencetetrodotoxine == false){
        presencetetrodotoxine = true
        tetrodotoxinebtn.innerHTML = "retirer tetrodotoxine"
    }
    else{
        presencetetrodotoxine = false
        tetrodotoxinebtn.innerHTML = "injecter tetrodotoxine"
    }

}