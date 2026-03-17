class Display {
	constructor(x,y,h,w){
		this.sizex = x;
		this.sizey = y;
		this.height = h;
		this.width = w;
		this.ctx;
		this.contents = []
	}

	refresh(){
		for(let i = 0;i <= this.contents.length;i++){
			let el = this.contents[i];
			switch (el.type){
				case "image":
					ctx.drawImage(el.image,el.posx,el.posy);
			}
		}
	}
}

class Element {
	constructor(){
		
	}
}