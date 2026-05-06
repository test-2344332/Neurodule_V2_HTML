// plume active ou non
let plume = false;
// bougie active ou non
let bougie = false;
let Boutonbougie = document.getElementById("bougie");
let Boutonplume = document.getElementById("plume");
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
function addneurone(){
    if (addneuronevalue == false){
        addneuronevalue = true;
        Btnaddneurone.style.color="red";
        removeneuronevalue = false;
        Botnremoveneurone.style.color="black";
    }else{
        addneuronevalue = false;
        Btnaddneurone.style.color="black";
    }
}

function removeneurone(){
    if (removeneuronevalue == false){
        removeneuronevalue = true;
        Botnremoveneurone.style.color="red";
        addneuronevalue = false;
        Btnaddneurone.style.color="black";
    }else{
        removeneuronevalue = false;
        Botnremoveneurone.style.color="black";
    }
}

class Neurone {
    connections = [];
    active = false;
    armed = false;
    step = 0;
    tstep = 0;
    startx;
    starty;
    endx;
    endy;
    length = 0;
    number;

    constructor(startx, starty, endx, endy, length, tstep, nb) {
        this.startx = startx;
        this.starty = starty;
        this.endx = endx;
        this.endy = endy;
        this.length = length;
        this.tstep = tstep;
        this.number = nb;
    }

    set_connections(list) {
        for (let i of list) {
            let tempsx = i.get_value("startx");
            let tempsy = i.get_value("starty");
            let dx = Math.abs(tempsx - this.endx);
            let dy = Math.abs(tempsy - this.endy);
            if (dx < 20 && dy < 20) {
                this.connections.push(i);
            }
        }
    }

    get_value(value) {
        return this[value];
    }

    set_value(id, val) {
        this[id] = val;
    }

    fire(myself) {
        if (myself.armed) {
            if (!myself.active) {
                myself.active = true;
                myself.step = 0;
            }
            console.log("Neuron n° " + myself.number + " was fired.");
            myself.animate_step();
            if (myself.step == myself.length) {
                console.log(myself.connections)
                for (let i of myself.connections) {
                    i.fire(i);
                    console.log("reached end of neuron");
                    myself.active = false
                }
            } else {
                setTimeout(myself.fire, myself.tstep, myself);
            }
            myself.step++;

            console.log("debug")
        } else {
            myself.fired = false;
        }
    animate_step()
    }
}
