// taille labo ou 10'000
let labo = false
let curare = false
let nervin = false
let tetrotoxine = false

let btnlabo = document.getElementById("labo")
let commandeslabo = document.getElementById("CommandesSpecifiqueslabo")
let btn10000 = document.getElementById("10'000")
let commandes10000 = document.getElementById("CommandesSpecifiques10000")
function passage10000(){
    labo = false;
    btn10000.style.display="none";
    commandes10000.style.display="none";
    btnlabo.style.display="block";
    commandeslabo.style.display="block";
}
function passagelabo(){
    labo = true;
    btn10000.style.display="block";
    commandes10000.style.display="block";
    btnlabo.style.display="none";
    commandeslabo.style.display="none";
}

