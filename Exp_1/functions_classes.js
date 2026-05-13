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
        feather.armed = true;
        candle.armed = false
    } else {
        plume = false;
        Boutonplume.style.color = "black";
        feather.armed = false;
    }
}

function PresenceBougie() {
    if (bougie == false) {
        bougie = true;
        Boutonbougie.style.color = "red";
        plume = false;
        Boutonplume.style.color = "black";
        candle.armed = true;
        feather.armed = false;
    } else {
        bougie = false;
        Boutonbougie.style.color = "black";
        candle.armed = false;
    }
}
class Neurone {
    connections = [];
    active = false;
    armed = false;
    step = 0;
    old_step = 0;
    tstep = 0;
    startx;
    starty;
    endx;
    endy;
    length = 0;
    number;
    anim_list = [];

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
        if (myself.length == 1) {
            console.log("interneurone");
            console.log(candle.armed)
            if (candle.armed == false) {
                return;
            }
        }
        if (exp_act) {
            if (myself.armed) {
                if (!myself.active) {
                    myself.active = true;
                    myself.step = 0;
                }
                console.log("Neuron n° " + myself.number + " was fired.");
                myself.animate(myself);
                if (myself.step == myself.length) {
                    for (let i of myself.connections) {
                        i.fire(i);
                    }
                    myself.active = false
                } else {
                    setTimeout(myself.fire, myself.tstep, myself);
                }
                myself.old_step = myself.step;
                myself.step++;
            } else {
                myself.fired = false;
            }
        }
    }

    animate(myself) {
        let old_anim = myself.anim_list[myself.old_step];
        let anim = myself.anim_list[myself.step];
        if (typeof old_anim === "undefined") { }
        else {
            old_anim.active = false;
        }
        if (typeof anim === "undefined") { }
        else {
            anim.active = true;
        }
    }
}

class Output {
    constructor(x, y) {
        this.startx = x;
        this.starty = y;
    }

    fire(myself) {
        cycle_body();
    }

    set_connections(lists) { }

    get_value(value) {
        return this[value];
    }
}

class Input {
    armed = false;
    connections = [];

    constructor(x, y) {
        this.startx = 1000;
        this.endx = x;
        this.starty = 1000;
        this.endy = y;
    }

    fire(myself) {
        console.log("firing")
        if (myself.armed) {
            for (let i of myself.connections) {
                i.fire(i);
            }
        }
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
}
