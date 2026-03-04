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

