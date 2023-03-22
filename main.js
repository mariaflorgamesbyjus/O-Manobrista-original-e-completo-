//Criar uma referência para tela//

var canvas = document.getElementById("myCanvas")

var ctx = canvas.getContext("2d")






//Dê altura e largura específicas para a imagem do carro

var x = 5
var y = 225

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.



function add() {
	A = new Image()
	A.onload = uploadBackground
	A.src = backgroundImage
	//carregar carro e imagens de fundo na tela.

	B = new Image()
	B.onload = uploadGreenCar
	B.src = greencarImage


}



function uploadBackground() {
	//Defina a função ‘uploadBackground’

	ctx.drawImage(A,0,0,canvas.width,canvas.height)


}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.

	ctx.drawImage(B,x,y,75,100)


}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	//Definir função para mover o carro para cima

	y=y-5
	uploadBackground()
	uploadGreenCar()
}

function down() {
	//Definir função para mover o carro para baixo

	y=y+5
	uploadBackground()
	uploadGreenCar()
}


function left() {
	//Definir função para mover o carro para o lado esquerdo

	x=x-5
	uploadBackground()
	uploadGreenCar()
}

function right() {
	//Definir função para mover o lado direito do carro

	x=x+5
	uploadBackground()
	uploadGreenCar()
}
