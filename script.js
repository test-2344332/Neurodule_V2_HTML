class Display {
	constructor(x,y,h,w,l){
		this.sizex = x;
		this.sizey = y;
		this.height = h;
		this.width = w;
		this.ctx;
		this.contents = [];
		this.layers = l;
	}

	refresh(){
		for(let i = 0;i <= this.contents.length;i++){
			let el = this.contents[i];
			el.draw(this.ctx);
		}
	}

	get_value(value){
		return(this[value]);
	}

	sort_content(){
		let new_cont = [];
		let l = this.layers
		for (let i = 0;i < l ; i++){
			for (let el of this.contents){
				if (el.get_value("#depth") == i){
					new_cont.push(el);
				}
			}
		}
		this.contents = new_cont;
	}
}

class Element {
	#type;
	#posx;
	#posy;
	#depth;
	#display;
	#layers;

	constructor(type,x,y,d,disp,layers = 5){
		this.#type = type;
		this.#posx = x;
		this.#posy = y;
		this.#depth = d;
		this.#display = disp;
		this.#layers = layers;
	}

	get_value(el){
		console.log(el);
		console.log(this[el]);
		return(this[el]);
	}

	get_display_val(el){
		return(this.#display.get_value(el))
	}

	change_position(x,y,d=0){
		let temp_x = this.#posx + x;
		if (temp_x > this.get_display_val("width")){
			temp_x = this.get_display_val("width");
			console.log("Tried to set x out of bounds replacing with maximum value allowed");
		}else if(temp_x < 0){
			temp_x = 0;
			console.log("Tried to set x out of bounds replacing with minimum value allowed");
		}
		this.#posx = temp_x;
		let temp_y = this.#posy + y;
		if (temp_y > this.get_display_val("height")){
			temp_y = this.get_display_val("height");
			console.log("Tried to set y out of bounds replacing with maximum value allowed");
		}else if(temp_y < 0){
			temp_y = 0;
			console.log("Tried to set y out of bounds replacing with minimum value allowed");
		}
		this.#posy = temp_y;
		let temp_d = this.#depth + d;
		if (temp_d > this.#layers){
			temp_d = this.#layers;
			console.log("Tried to set depth out of bounds replacing with maximum value allowed");
		}else if(temp_d < 0){
			temp_d = 0;
			console.log("Tried to set depth out of bounds replacing with minimum value allowed");
		}
		this.#depth = temp_d;
		
	}
}

class Customimage extends Element {
	#prntx;
	#prnty;
	#sheet;
	#sx;
	#sy;
	#sizex;
	#sizey;

	constructor(posx,posy,depth,disp,prntx,prnty,sheet,sx,sy,sizex,sizey){
		super("image",posx,posy,depth,disp);
		this.#prntx = prntx;
		this.#prnty = prnty;
		this.#sheet = sheet;
		this.#sx = sx;
		this.#sy = sy;
		this.#sizex = sizex;
		this.#sizey = sizey;
	}

	draw(context){
		context.drawImage(this.#sheet,this.#sx,this.#sy,this.#sizex,this.#sizey,super.get_value("#posx"),super.get_value("#posy"),this.#prntx,this.#prnty);
	}

	change_size(x,y){
		let temp_x = this.#sx + x;
		if (temp_x > super.get_display_val("width")){
			temp_x = super.get_display_val("width");
			console.log("Tried to set x out of bounds replacing with maximum value allowed");
		}else if(temp_x <= 0){
			temp_x = 1;
			console.log("Tried to set x out of bounds replacing with minimum value allowed");
		}
		this.#sx = temp_x;
		let temp_y = this.#sy + y;
		if (temp_y > super.get_display_val("height")){
			temp_y = super.get_display_val("height");
			console.log("Tried to set y out of bounds replacing with maximum value allowed");
		}else if(temp_y <= 0){
			temp_y = 1;
			console.log("Tried to set y out of bounds replacing with minimum value allowed");
		}
		this.#sy = temp_y;
	}
}
