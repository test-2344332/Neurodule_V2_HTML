// js pour le style commun à toute les pages donc au final que le menu ouvrant
let menu = false
let dropdown = document.getElementById("navigationlist")
function affichage_menu(){
    console.log("test")
    if (menu == false){
        dropdown.style.display="block"
    }else{
        dropdown.style.display="none"
    }
    menu = !menu
}

