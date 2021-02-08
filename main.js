const cvs = document.getElementById("canvas");
const ctx = cvs.getContext('2d');
let coffOfEl = 0.5;
let coffOfFr = 0;
ctx.width = 500;
ctx.height = 500;
var pos = {x:400,y:70,r:30}
let speed = {x:0,y:5}
let acc = {x:0,y:10}
let bl = {x:100,y:1500,w:1000,h:150}
let br = {x:1100,y:650,w:150,h:1000}
function loop(){
	pos.y += speed.y;
	pos.x += speed.x;
	speed.x += acc.x;
	speed.y += acc.y;
	let angle = Math.atan(speed.y/speed.x)*180/Math.PI;
	ctx.fillRect(0,0,400,2000);
	ctx.beginPath();
	ball('red',pos.x,pos.y,pos.r);
	block('brown',bl.x,bl.y,bl.w,bl.h)
	collide(coffOfEl);
	console.log(angle)
	requestAnimationFrame(loop);
}
function collide(e){
	if(pos.y >=  bl.y-pos.r){
		speed.y = (-speed.y)*e;
	//	if(speed.x > 0){acc.x = -acc.y*u}else if(speed.x < 0){acc.x = acc.y*u}else{acc.x =0;}
	}
//	if(pos.x >= br.x-(2*pos.r)){
		//speed.x = (-speed.x)*e;
//	}
}
function ball(color,x,y,r){
	ctx.fillStyle = color
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.arc(x,y,r,0,Math.PI*2,0);
	ctx.fill();
}
function block(color,x,y,w,h){
	ctx.fillStyle = color;
	ctx.fillRect(x,y,w,h)
}
loop();