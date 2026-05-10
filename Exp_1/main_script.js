let neurlist = [];
const neur1 = new Neurone(0, 0, 100, 100, 4, 500, 1);
neurlist.push(neur1);
const neur2 = new Neurone(100, 100, 150, 150, 2, 500, 2);
neurlist.push(neur2);
const neur3 = new Neurone(150, 150, 200, 100, 2, 500, 3);
neurlist.push(neur3);
const neur4 = new Neurone(150, 150, 300, 300, 6, 500, 4);
neurlist.push(neur4);
const neur5 = new Neurone(150, 150, 300, 300, 6, 500, 4);
neurlist.push(neur5);

const BODY_IMG = 2;
let active_bdy = 0;

let bdy_list = [];

let disp = document.getElementById("disp")
display = new Display(300, 3072, 3072, 300, 3, disp);
let image_crps = new Image();
image_crps.onload = function () {
//	body1 = new Customimage(0, 0, 0, display, 275, 512, image_crps, 275, 0, 275, 512);
	body2 = new Customimage(0, 0, 0, display, 300, 512, image_crps, 575, 0, 300, 512);
	body3 = new Customimage(0, 0, 0, display, 275, 512, image_crps, 1525, 0, 275, 512);
//	bdy_list.push(body1);
	bdy_list.push(body2);
	bdy_list.push(body3);
//	display.contents.push(body1);
	display.contents.push(body2);
	display.contents.push(body3);
	cycle_body();
}

function cycle_body() {
	bdy_list[active_bdy].active = false;
	active_bdy = (active_bdy + 1) % BODY_IMG;
	bdy_list[active_bdy].active = true;
	console.log(active_bdy);
	setTimeout(cycle_body, 500);
}

image_crps.src = "../animation_bras_nouveau.png"
loop();