let crps_ready = false;
let neur1_ready = false;
let neur2_ready = false;
let neur3_ready = false;
let neur4_ready = false;
let neur5_ready = true;
let exp_act = false;

let neurlist = [];
const neur1 = new Neurone(0, 0, 100, 100, 5, 500, 1);
const neur2 = new Neurone(100, 100, 100, 200, 3, 500, 2);
const neur3 = new Neurone(100, 100, 200, 100, 1, 500, 3);
const neur4 = new Neurone(200, 200, 200, 100, 6, 500, 4);
const neur5 = new Neurone(200, 100, 100, 0, 6, 500, 5);
const brain = new Neurone(100, 200, 200, 200, 8, 500, 6);
const muscle = new Output(100, 0);
const candle = new Input(0, 0);
const feather = new Input(0, 0);

brain.armed = true;

let disp = document.getElementById("disp")
display = new Display(750, 915, 915, 750, 3, disp);

const BODY_IMG = 2;
let active_bdy = BODY_IMG - 1;
let bdy_list = [];

let image_crps = new Image();
let img_neur1 = new Image();
let img_neur2 = new Image();
let img_neur3 = new Image();
let img_neur4 = new Image();
let img_neur5 = new Image();

neurlist.push(neur1);
neurlist.push(neur2);
neurlist.push(neur3);
neurlist.push(neur4);
neurlist.push(neur5);
neurlist.push(brain);
neurlist.push(muscle);
neurlist.push(candle);
neurlist.push(feather);

let neuronetoadd = [];


function addneurone(val) {
  if (neuronetoadd.length === 2){
	neuronetoadd = [];
  }

  if (neuronetoadd.length < 2) {
    neuronetoadd.push(val);
  }

  console.log(neuronetoadd);
}





const BODY_IMG = 2;
let active_bdy = 0;

let bdy_list = [];

image_crps.onload = function () {
	body2 = new Customimage(0, 0, 0, display, 600, 914, image_crps, 575, 50, 300, 457);
	body3 = new Customimage(0, 0, 0, display, 550, 914, image_crps, 1535, 50, 275, 457);
	bdy_list.push(body2);
	bdy_list.push(body3);
	display.contents.push(body2);
	display.contents.push(body3);
	cycle_body();
	crps_ready = true;
	check_ready();
}
img_neur1.onload = function () {
	neur_1_1 = new Customimage(0, 0, 2, display, 600, 914, img_neur1, 575, 50, 300, 457);
	neur_1_2 = new Customimage(0, 0, 2, display, 550, 914, img_neur1, 1535, 50, 275, 457);
	display.contents.push(neur_1_1);
	display.contents.push(neur_1_2);
	neur1_ready = true;
	check_ready();
}
img_neur2.onload = function () {
	neur_2 = new Customimage(0, 0, 2, display, 600, 914, img_neur2, 575, 50, 300, 457, neur2);
	display.contents.push(neur_2);
	neur2_ready = true;
	check_ready();
}
img_neur3.onload = function () {
	neur_3 = new Customimage(0, 0, 2, display, 600, 914, img_neur3, 575, 50, 300, 457, neur3);
	display.contents.push(neur_3);
	neur3_ready = true;
	check_ready();
}
img_neur4.onload = function () {
	neur_4 = new Customimage(0, 0, 2, display, 600, 914, img_neur4, 575, 50, 300, 457, neur4);
	display.contents.push(neur_4);
	neur4_ready = true;
	check_ready();
}
img_neur5.onload = function () {
	neur_5 = new Customimage(0, 0, 2, display, 600, 914, img_neur5, 575, 50, 300, 457, neur5);
	display.contents.push(neur_5);
	neur5_ready = true;
	check_ready();
}

function cycle_body() {
	bdy_list[active_bdy].active = false;
	active_bdy = (active_bdy + 1) % BODY_IMG;
	bdy_list[active_bdy].active = true;
	if (neur1.armed) {
		switch (active_bdy) {
			case 0:
				neur_1_1.active = true;
				neur_1_2.active = false;
				break;
			case 1:
				neur_1_2.active = true;
				neur_1_1.active = false;
				exp_act = false;
				break;
		}

	}
}

function check_ready() {
	if (crps_ready && neur1_ready && neur2_ready && neur3_ready && neur4_ready && neur5_ready) {
		loop();
	}
}

function startexp() {
	if (!exp_act) {
		exp_act = true;
		if(candle.armed){
			candle.fire(candle);
		} else if (feather.armed){
			feather.fire(feather);
		}
	}
}

function stopexp() {
	if (exp_act) {
		exp_act = false;
	}
}

function exp_loop() {
	for (let el of display.contents) {
		if (typeof el.obj === "undefined") {
		} else {
			if (el.obj.armed) {
				el.active = true;
			}
		}
	}
}

function place() {
	img_neur1.src = "../png_files/animation_bras_neur_1.png";
	img_neur2.src = "../png_files/animation_bras_neur_2.png";
	img_neur3.src = "../png_files/animation_bras_neur_3.png";
	img_neur4.src = "../png_files/animation_bras_neur_4.png";
	//img_neur5.src = "../png_files/animation_bras_neur_5.png";
	image_crps.src = "../png_files/animation_bras_nouveau.png";
}

setTimeout(place, 500)