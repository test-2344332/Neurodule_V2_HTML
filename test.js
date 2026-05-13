let zoom = new Image;

let disp = document.getElementById("disp")
display = new Display(750, 915, 915, 750, 3, disp);

zoom.onload = function () {
	zoom_img = new Customimage(0,0, 2, display, 600, 914, zoom, 0, 0, 1728, 512);
	display.contents.push(zoom_img);
	zoom_ready = true;
	console.log("Zoom box initialized.");
	//check_ready();
}

setTimeout(load_img, 500)
function load_img() {
	console.log("test")
	zoom.src = "png_files/zoom.png";
}