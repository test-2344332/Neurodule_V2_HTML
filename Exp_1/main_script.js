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
const candle = new Input(0,0);
const feather = new Input(0,0);

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

neur1.armed = true;

neurlist.push(neur1);
neurlist.push(neur2);
neurlist.push(neur3);
neurlist.push(neur4);
neurlist.push(neur5);
neurlist.push(brain);
neurlist.push(muscle);
neurlist.push(candle);
neurlist.push(feather);

for (let el of neurlist) {
	el.set_connections(neurlist);
}

image_crps.onload = function () {
	//	body1 = new Customimage(0, 0, 0, display, 275, 512, image_crps, 275, 0, 275, 512);
	body2 = new Customimage(0, 0, 0, display, 600, 914, image_crps, 575, 50, 300, 457);
	body3 = new Customimage(0, 0, 0, display, 550, 914, image_crps, 1535, 50, 275, 457);
	//	bdy_list.push(body1);
	bdy_list.push(body2);
	bdy_list.push(body3);
	//	display.contents.push(body1);
	display.contents.push(body2);
	display.contents.push(body3);
	cycle_body();
	crps_ready = true;
	check_ready();
}
img_neur1.onload = function () {
	neur_1_1 = new Customimage(0, 0, 2, display, 600, 914, img_neur1, 575, 50, 300, 457);
	neur_1_2 = new Customimage(0, 0, 2, display, 550, 914, img_neur1, 1535, 50, 275, 457);
	neur_1_2.active = true;
	neur_1_1.active = true;
	display.contents.push(neur_1_1);
	display.contents.push(neur_1_2);
	neur1_ready = true;
	check_ready();
}
img_neur2.onload = function () {
	neur_2 = new Customimage(0, 0, 2, display, 600, 914, img_neur2, 575, 50, 300, 457);
	neur_2.active = true;
	display.contents.push(neur_2);
	neur2_ready = true;
	check_ready();
}
img_neur3.onload = function () {
	neur_3 = new Customimage(0, 0, 2, display, 600, 914, img_neur3, 575, 50, 300, 457);
	neur_3.active = true;
	display.contents.push(neur_3);
	neur3_ready = true;
	check_ready();
}
img_neur4.onload = function () {
	neur_4 = new Customimage(0, 0, 2, display, 600, 914, img_neur4, 575, 50, 300, 457);
	neur_4.active = true;
	display.contents.push(neur_4);
	neur4_ready = true;
	check_ready();
}
img_neur5.onload = function () {
	neur_5 = new Customimage(0, 0, 2, display, 600, 914, img_neur5, 575, 50, 300, 457);
	neur_5.active = true;
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
		console.log("start");
		exp_act = true;
	}
}

function stopexp() {
	if (exp_act) {
		console.log("stop");
		exp_act = false;
	}
}

img_neur1.src = "../png_files/animation_bras_neur_1.png";
img_neur2.src = "../png_files/animation_bras_neur_2.png";
img_neur3.src = "../png_files/animation_bras_neur_3.png";
img_neur4.src = "../png_files/animation_bras_neur_4.png";
//img_neur5.src = "../png_files/animation_bras_neur_5.png";
image_crps.src = "../png_files/animation_bras_nouveau.png";