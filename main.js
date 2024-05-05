//Criar uma referência para tela

greencar_width = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = backgroundImage;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadGreenCar
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
   ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0
	{
        greencar_y = greencar_y - 10;
        console.log("When up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
		 uploadBackground();
		 uploadGreenCar();

	}
	)
}

function down()
{
	if(greencar_y <=0
		{
			greencar_y = greencar_y - 10;
			console.log("When up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
			 uploadBackground();
			 uploadGreenCar();
}
	)
	}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
}

function right()
{
	//Definir função para mover o lado direito do carro
}
