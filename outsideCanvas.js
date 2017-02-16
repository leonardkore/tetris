
function Outside(shapeObj){

	this.begin = function(){

	    this.XandY();
	    this.pause();
	    this.startOver();
	    this.debug();
	    this.score();

	}

	this.debug = function(){

		debugModeDiv = createButton("Debug Mode");
	    debugModeDiv.position(x + width + 50, y + 350);

	    completeDiv = createButton("On");
	    completeDiv.position(x + width + 150, y + 350);

	    completeDiv1 = createButton("Off");
	    completeDiv1.position(x + width + 200, y + 350);


	    completeDiv.mousePressed(function(){
	        debugMode = true;
	    });

	    completeDiv1.mousePressed(function(){
	        debugMode = false;

	    });

	}

	this.score = function(){


		if ((score/100) % 8 === 0 && !first){
			level++;
			speed += 0.125;
			masterSpeed = speed;
		}


		if (!first){

			if (level === -1){
				level = 0;
			}

			scoreDiv.hide();

			scoreDiv = createDiv("Score " + score + "   Level " + level);
	    	scoreDiv.position(x + width + 50, y + 450);

	    	scoreDiv.show();
		}

		if (first){

			scoreDiv = createDiv("Score " + score + "   Level " + level);
	    	scoreDiv.position(x + width + 50, y + 450);
	    	first = false;

		}

	}

	this.XandY = function(){

       x = (windowWidth - (width + rightWidthOffset)) / 2;
       y = (windowHeight - height) / 2;
	}

	this.startOver = function(){

		restartDiv = createButton("Restart");
	    restartDiv.position(x + width + 50, y + 250);

	    restartDiv.mousePressed(function(){
	        restartThings('yes');
	    });
	}

	this.pause = function(){

		pauseDiv = createButton("Pause");
	    unPauseDiv = createButton("UnPause");
	    unPauseDiv.position(x + width + 50, y + 150);
	    unPauseDiv.hide();

	    pauseDiv.position(x + width + 50, y + 150);
	    pauseDiv.mousePressed(function(){
	        shapeObj.pause();
	        if (paused){
	        	pauseDiv.hide();
	        	unPauseDiv.show();
	        }

	    });

	    unPauseDiv.mousePressed(function(){
	        shapeObj.pause();

	        if (!paused){
	        	pauseDiv.show();
	        	unPauseDiv.hide();
	        }
	        

	    });

	}

	this.nextShape = function(next) {

		if (first_){
			nextShapeDiv = createButton('Next Shape ' + next );
	    	nextShapeDiv.position(x + width + 50, y + 50);
	    	first_ = false;
		}

		if (!first_){
			nextShapeDiv.hide();
			nextShapeDiv = createButton('Next Shape ' + next );
	    	nextShapeDiv.position(x + width + 50, y + 50);
	    	nextShapeDiv.show();
	    	
		}

	}

}