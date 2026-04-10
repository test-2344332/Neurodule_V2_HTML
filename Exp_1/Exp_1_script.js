// plume active ou non
let plume = false
// bougie active ou non
let bougie = false
let Boutonbougie = document.getElementById("bougie")
let Boutonplume = document.getElementById("plume")
function PresencePlume(){
    if (plume == false){
        plume = true;
        Boutonplume.style.color="red";
        bougie = false;
        Boutonbougie.style.color="black";
    }else{
        plume = false;
        Boutonplume.style.color="black";
    }
}

function PresenceBougie(){
    if (bougie == false){
        bougie = true;
        Boutonbougie.style.color="red";
        plume = false;
        Boutonplume.style.color="black";
    }else{
        bougie = false;
        Boutonbougie.style.color="black";
    }
}