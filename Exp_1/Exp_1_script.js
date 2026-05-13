// plume active ou non
let plume = false
// bougie active ou non
let bougie = false
let Boutonbougie = document.getElementById("bougie")
let Boutonplume = document.getElementById("plume")
function PresencePlume() {
    if (plume == false) {
        plume = true;
        Boutonplume.style.color = "red";
        bougie = false;
        Boutonbougie.style.color = "black";
    } else {
        plume = false;
        Boutonplume.style.color = "black";
    }
}

function PresenceBougie() {
    if (bougie == false) {
        bougie = true;
        Boutonbougie.style.color = "red";
        plume = false;
        Boutonplume.style.color = "black";
    } else {
        bougie = false;
        Boutonbougie.style.color = "black";
    }
}
// ajouter neurone actif ou non
let addneuronevalue = false
// retirer neurone actif ou non
let removeneuronevalue = false
let Btnaddneurone = document.getElementById("addneuronebtn")
let Botnremoveneurone = document.getElementById("removeneuronebtn")
function addneurone() {
    if (addneuronevalue == false) {
        addneuronevalue = true;
        Btnaddneurone.style.color = "red";
        removeneuronevalue = false;
        Botnremoveneurone.style.color = "black";
    } else {
        addneuronevalue = false;
        Btnaddneurone.style.color = "black";
    }
}

function removeneurone() {
    if (removeneuronevalue == false) {
        removeneuronevalue = true;
        Botnremoveneurone.style.color = "red";
        addneuronevalue = false;
        Btnaddneurone.style.color = "black";
    } else {
        removeneuronevalue = false;
        Botnremoveneurone.style.color = "black";
    }
}