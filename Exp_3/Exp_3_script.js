let zoom1000influx = true
let zoom10000influx = false
let laboinflux = false

let btn1000influx = document.getElementById("zoominflux1000")
let commandes1000influx = document.getElementById("commandes1000influx")
let btn10000influx = document.getElementById("zoominflux10000")
let commandes10000influx = document.getElementById("commandes10000influx")
let btnlaboinflux = document.getElementById("laboinflux")
let commandeslaboinflux = document.getElementById("commandeslaboinflux")

let presenceStime = false
let stimebtn = document.getElementById("stimulateurElectrique")
let stimebox = document.getElementById("controlestime")

let presenceStime3 = false
let stim3btn = document.getElementById("stimulateurTriple")
let stim3box = document.getElementById("controle3stim")

// curseur stimulateur electrique
let stime = document.getElementById("stime1");
let stimeoutput = document.getElementById("stimeoutput")
stimeoutput.innerHTML = stime.value 

stime.oninput = function(){
    stimeoutput.innerHTML = stime.value;
}
// curseur1 simuateur triple
let stim31 = document.getElementById("3stim1");
let stim31output = document.getElementById("3stim1output")
stim31output.innerHTML = stim31.value 

stim31.oninput = function(){
    stim31output.innerHTML = stim31.value;
}
// curseur2 simuateur triple
let stim32 = document.getElementById("3stim2");
let stim32output = document.getElementById("3stim2output")
stim32output.innerHTML = stim32.value 

stim32.oninput = function(){
    stim32output.innerHTML = stim32.value;
}
// curseur3 simuateur triple
let stim33 = document.getElementById("3stim3");
let stim33output = document.getElementById("3stim3output")
stim33output.innerHTML = stim33.value 

stim33.oninput = function(){
    stim33output.innerHTML = stim33.value;
}


// gestion du niveau de zoom
function influx1000(){
    zoom1000influx = true
    zoom10000influx = false
    laboinflux = false
    commandes1000influx.style.display="block"
    commandes10000influx.style.display="none"
    commandeslaboinflux.style.display="none"
    btn1000influx.style.display="none"
    btn10000influx.style.display="block"
    btnlaboinflux.style.display="block"
}
function influx10000(){
    zoom1000influx = false
    zoom10000influx = true
    laboinflux = false
    commandes1000influx.style.display="none"
    commandes10000influx.style.display="block"
    commandeslaboinflux.style.display="none"
    btn1000influx.style.display="block"
    btn10000influx.style.display="none"
    btnlaboinflux.style.display="block"
}
function influxlabo(){
    zoom1000influx = false
    zoom10000influx = false
    laboinflux = true
    commandes1000influx.style.display="none"
    commandes10000influx.style.display="none"
    commandeslaboinflux.style.display="block"
    btn1000influx.style.display="block"
    btn10000influx.style.display="block"
    btnlaboinflux.style.display="none"
}

// affichage stimulateurs
function changeStimulateurE(){
if(presenceStime == false){
    presenceStime = true;
    presenceStime3 = false;
    stimulateurElectrique.innerHTML = "Stimulateur electrique -";
    stimulateurTriple.innerHTML = "Stimulateur triple +";
    stimebox.style.display = "block";
    stim3box.style.display = "none";
}
else{
    presenceStime = false;
    presenceStime3 = false;
    stimulateurElectrique.innerHTML = "Stimulateur electrique +";
    stimebox.style.display = "none";
    stim3box.style.display = "none";
}
}

function changeStimulateur3(){
if(presenceStime3 == false){
    presenceStime = false;
    presenceStime3 = true;
    stimulateurTriple.innerHTML = "Stimulateur triple -";
    stimulateurElectrique.innerHTML = "Stimulateur electrique +";
    stimebox.style.display = "none";
    stim3box.style.display = "block";
}
else{
    presenceStime = false;
    presenceStime3 = false;
    stimulateurTriple.innerHTML = "Stimulateur triple +";
    stimebox.style.display = "none";
    stim3box.style.display = "none";
}
}