$(document).ready(function(){
	createGamePlan();
	addObstacles();
	setObstacles();
	setPlayer();

	$(document).keydown(function(e){
		var $player = $('#player');
		var top = parseInt($player.css('top'));
		var left = parseInt($player.css('left'));

		if(e.keyCode == 37){	//left
			if(left>63){
				moveTo($player, top, (left-64));
			}
		} else if(e.keyCode == 38){	//up
			if(top>63){
				moveTo($player, (top-64), left);
			}
		} else if(e.keyCode == 39){	//right
			if(left<576){
				moveTo($player, top, (left+64));
			}
		} else if(e.keyCode == 40){	//down
			if(top<576){
				moveTo($player, (top+64), left);
			}
		}
	});

});

function createGamePlan(){
	for(var i = 0; i < 100; i++){
			$('div#playground').append('<div class="square"></div>');
		}
}

function addObstacles(){
	var max = parseInt(prompt('How many obstacles do you wanna play with? Choose any number between 1 and 70'));

		if(max<1){
			max = parseInt(prompt('That is not enough, please choose again'));
		} else if(max>70){
			max = parseInt(prompt('That is too many, please choose again'));
		}

		for (var i=0; i<max; i++){
			$('div#obstacles').append('<div class="obstacle"></div>');
		}
}

function setObstacles(){
	
	var positions = new Array();

	$('div.obstacle').each(function(index, obstacle){

		var x = Math.floor(Math.random() * 10);
		var y = Math.floor(Math.random() * 10);

		var pixelPosition = getPixels(x,y);

		positions[index] = pixelPosition;
		if(!positions.indexOf(pixelPosition)){
			x = x++;
			y = y++;
		}

		moveTo($(obstacle), pixelPosition.top, pixelPosition.left);
	});
}

var width = 60;
var border = 4;

function getPixels(x,y){
	return{
		'top': (y * (width+border) + 2) + 'px',
		'left': (x * (width+border) + 2) + 'px'
	}
}

function moveTo($obstacle, newTop, newLeft){
	$obstacle.css('top', newTop);
	$obstacle.css('left', newLeft);
}

function setPlayer(){
	$('div#playground').append('<div id="player"></div>');
}