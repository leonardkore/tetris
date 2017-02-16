function Shape() {

	arr = [];
	this.firstCheck = false;
	this.state_change = 0;
	this.xspeed = 0;
	this.yspeed = 0;
	this.boxX = 3;
	this.boxY = 0;
	this.boxSclX;
	this.boxSclY;

	this.coordinates = function(x, y, z){
		this.xcord = x;
		this.ycord = y;
		this.color = z;
	}

	this.pickShape = function() {
		  for (var i = 1; i < 21; i++){
  			 shapeStorage[i - 1] = i;
  			}
  		if (flag){
  			flag = !flag;
  			randomShape[0] = random(shapeStorage);
  			// randomShape[0] = tempNum;
  			shapeP.getShape(randomShape[1]);
  		} else {
  			flag = !flag;
  			randomShape[1] = random(shapeStorage);
  			// randomShape[1] = tempNum;
  			shapeP.getShape(randomShape[0]);
  		}
  		
  		
	}

	this.paintGrid = function(x, y, colour){
		if (colour != 'none')
			fill(colour);;
		rect((scl * (x + .2)) , (scl * (y + .2)), scl - 10, scl - 10);
		stroke(233);
		rect((scl * x) , (scl * y), scl, scl);
	}

	this.getColor = function(){
		if (currentShape === 4){
			return (colorGroup[0]);
		} else if (currentShape === 8 || currentShape === 7){
			return (colorGroup[1]);
		} else if (currentShape === 9 || currentShape === 6){
			return (colorGroup[2]);
		} else if (currentShape === 10 || currentShape === 5){
			return (colorGroup[3]);
		} else if (currentShape === 11 || currentShape === 12 || currentShape === 13 || currentShape === 14){
			return (colorGroup[4]);
		} else if (currentShape === 15 || currentShape === 2 || currentShape === 3 || currentShape === 16 || currentShape === 17){
			return (colorGroup[5]);
		} else if (currentShape === 18 || currentShape === 19 || currentShape === 1 || currentShape === 20){
			return (colorGroup[6]);
		}

		console.log('cant find ' + currentShape);
	}


	this.update = function(x, y) {	

		if (y > 0){
			speed = 0;
		}

		stroke(128,128, 0);
    	strokeWeight(1);


		this.searchSpaceBottomFunction();
		if (!collision){
			this.searchSpaceRightFunction();
			this.searchSpaceLeftFunction();
		}

		for (var i = 0; i < arr.length ; i++) {
			arr[i].xcord =  arr[i].xcord + x;
			arr[i].ycord =  arr[i].ycord + y + speed/scl;
			this.paintGrid(arr[i].xcord, arr[i].ycord, this.getColor());
		}

		for (var p = 0; p < searchSpaceBottom.length; p++){
			searchSpaceBottom[p].xcord = searchSpaceBottom[p].xcord + x;
			searchSpaceBottom[p].ycord = searchSpaceBottom[p].ycord + y + speed/scl;
		}

		for (var q = 0; q < searchSpaceRight.length; q++){
			searchSpaceRight[q].xcord = searchSpaceRight[q].xcord + x;
			searchSpaceRight[q].ycord = searchSpaceRight[q].ycord + y + speed/scl;
		}

		for (var r = 0; r < searchSpaceLeft.length; r++){
			searchSpaceLeft[r].xcord = searchSpaceLeft[r].xcord + x;
			searchSpaceLeft[r].ycord = searchSpaceLeft[r].ycord + y + speed/scl;
		}

	}

	this.getTransform = function(cs) {

		if (cs === 6){
			shapeP.getShape(9);
		} else if (cs === 9){
			shapeP.getShape(6);
		} else if (cs === 10){
			shapeP.getShape(5);
		} else if (cs === 5){
			shapeP.getShape(10);
		} else if (cs === 11){
			shapeP.getShape(12);
		} else if (cs === 12){
			shapeP.getShape(13);
		} else if (cs === 13){
			shapeP.getShape(14);
		} else if (cs === 14){
			shapeP.getShape(11);
		} else if (cs === 15 || cs === 2){
			shapeP.getShape(3);
		} else if (cs === 3){
			shapeP.getShape(16);
		} else if (cs === 16){
			shapeP.getShape(17);
		} else if (cs === 17){
			shapeP.getShape(15);
		} else if (cs === 18){
			shapeP.getShape(19);
		} else if (cs === 19){
			shapeP.getShape(1);
		} else if (cs === 1){
			shapeP.getShape(20);
		} else if (cs === 20){
			shapeP.getShape(18);
		} else if (cs === 8){
			shapeP.getShape(7);
		} else if (cs === 7){
			shapeP.getShape(8);
		} else if (cs === 4){
			shapeP.getShape(4);
		} 

		searchSpaceBottom.length = 0; 
    	searchSpaceRight.length = 0; 
    	searchSpaceLeft.length = 0; 
		shapeP.buildSearchSpace(); 
	}

	this.transform = function(){

		var changeY = arr[0].ycord - 0;
		var changeX = arr[0].xcord - 4;
		var canTransform = [];
		var cont = true;
		var originalShape = currentShape;


		if (currentShape === 6 || currentShape === 9){
			changeY = arr[1].ycord - 1;
			changeX = arr[1].xcord - 5;
		} else if (currentShape === 10){
			changeY = arr[1].ycord - 1;
			changeX = arr[1].xcord - 5;
		} else if (currentShape === 5){
			changeY = arr[2].ycord - 1;
			changeX = arr[2].xcord - 5;
		} else if (currentShape === 11 || currentShape === 12 || currentShape === 13 || currentShape === 14 ){
			changeY = arr[2].ycord - 1;
			changeX = arr[2].xcord - 5;
		} else if (currentShape === 15 || currentShape === 3 || currentShape === 16 || currentShape === 17 || currentShape === 2 ){
			changeY = arr[1].ycord - 1;
			changeX = arr[1].xcord - 6;
		} else if (currentShape === 18 || currentShape === 19 || currentShape === 1 || currentShape === 20 ){
			changeY = arr[1].ycord - 1;
			changeX = arr[1].xcord - 5;
		} else if (currentShape === 8 || currentShape === 7 ){
			changeY = arr[2].ycord - 1;
			changeX = arr[2].xcord - 6;
		}

		arr.length = 0;

		this.getTransform(currentShape);

		for (var i = 0; i < arr.length; i++){
			arr[i].xcord = arr[i].xcord + changeX;
			arr[i].ycord = arr[i].ycord + changeY;
			if (! (arr[i].xcord === -2)){
				if (isOccupied_[arr[i].xcord][parseInt(arr[i].ycord)]){
					canTransform[i] = true;
				}
			} else{
				canTransform[i] = true;
			}
		}

		for (var j = 0; j < canTransform.length; j++){
			if (canTransform[j]){
				cont = false;
			}
		}

		if (cont){
			this.resetBoundaries(changeX, changeY);

		} else {
			arr.length = 0;
			shapeP.getShape(originalShape);
			for (var i = 0; i < arr.length; i++){
				arr[i].xcord = arr[i].xcord + changeX ;
				arr[i].ycord = arr[i].ycord + changeY ;
			}

			searchSpaceBottom.length = 0; 
	    	searchSpaceRight.length = 0; 
	    	searchSpaceLeft.length = 0; 
			shapeP.buildSearchSpace(); 

			this.resetBoundaries(0, 0 );
		}

	}

	this.resetBoundaries = function(changeX, changeY) {

		for (var p = 0; p < searchSpaceBottom.length; p++){
			searchSpaceBottom[p].xcord = searchSpaceBottom[p].xcord + changeX;
			searchSpaceBottom[p].ycord = searchSpaceBottom[p].ycord + changeY;
		}

		for (var q = 0; q < searchSpaceRight.length; q++){
			searchSpaceRight[q].xcord = searchSpaceRight[q].xcord + changeX;
			searchSpaceRight[q].ycord = searchSpaceRight[q].ycord + changeY;

		}

		for (var r = 0; r < searchSpaceLeft.length; r++){
			searchSpaceLeft[r].xcord = searchSpaceLeft[r].xcord + changeX;
			searchSpaceLeft[r].ycord = searchSpaceLeft[r].ycord + changeY;

		}
	}

	this.hardDrop = function(){

		for (var i = 0; i < 4; i++) {
			arr[i].ycord = lookAheadCoord[i].ycord;
		}

		collision = true;

		for (var p = 0; p < 4; p++) {
			usedSpaces.push(new this.coordinates(Math.round(arr[p].xcord), Math.round(arr[p].ycord), this.getColor()));
			isOccupied_[Math.round(arr[p].xcord)][Math.round(arr[p].ycord)] = true;
		}

		firstCheck();


	}

	this.lookAhead = function(){

		noFill();
		strokeWeight(1);
		var num = [] ;
		var finalNum = [];

		for (var i = 0; i < searchSpaceBottom.length; i++){

			var one = false;

			while (!lookAheadCollision[i]){

				if (!one){
					one = true;
					countLookAhead[i] = parseInt(searchSpaceBottom[i].ycord);
					num[i] = parseInt(countLookAhead[i]);
					
				}
				
				if (isOccupied_[searchSpaceBottom[i].xcord][countLookAhead[i]]){ 
					
					lookAheadCollision[i] = true;
					finalNum[i] = countLookAhead[i] - num[i] + 1;
				}

				countLookAhead[i]++;
			}
		}

		var min = this.minimum(finalNum);

		for (var p = 0; p < 4; p++)
			lookAheadCoord.push(new this.coordinates( (arr[p].xcord),  (parseInt(arr[p].ycord) + min - 1) ));

		for (var i = 0; i < 4; i++) {
			stroke(0, 0, 0);
			rect((scl * (arr[i].xcord + .1)) , (scl * (lookAheadCoord[i].ycord + .1)), scl - 5, scl - 5);

		}

	}	

	this.minimum = function(num){
		
		var min = num[0];

		for (var i = 0; i < num.length; i++){
			if (num[i] < min)
				min = num[i];
		}

		return min;
	}

	this.searchSpaceBottomFunction = function(){

		for (var i = 0; i < searchSpaceBottom.length; i++){
			if (isOccupied_[floor(searchSpaceBottom[i].xcord)][floor(searchSpaceBottom[i].ycord)]){ 

				for (var p = 0; p < 4; p++) {
					usedSpaces.push(new this.coordinates(Math.round(arr[p].xcord), Math.round(arr[p].ycord), this.getColor()));
					// if (isOccupied_[floor(arr[p].xcord)][floor(arr[p].ycord)]){
					// 	// //this.pause();
					// 	// console.log('DEBUG');
					// 	// for (var debug = 0; debug < 4; debug++)
					// 	// 	console.log(arr[debug].xcord + " " + (arr[debug].ycord) + " " + isOccupied_[floor(arr[debug].xcord)][floor(arr[debug].ycord)]);

					// }
					isOccupied_[Math.round(arr[p].xcord)][Math.round(arr[p].ycord)] = true;
				}

				collision = true;

				return true;
			}
		} 
	}

	this.searchSpaceRightFunction = function(){

		for (var i = 0; i < searchSpaceRight.length; i++){

			if (isOccupied_[searchSpaceRight[i].xcord] [parseInt(searchSpaceRight[i].ycord) + 1]){ 
				edger_right = false;
				return;
			} 
		}

		edger_right = true;
	}

	this.searchSpaceLeftFunction = function(){

		for (var i = 0; i < searchSpaceLeft.length; i++){

			if (isOccupied_[searchSpaceLeft[i].xcord] [parseInt(searchSpaceLeft[i].ycord) + 1]){ 
				edger_left = false;
				return;
			} 
		}
		edger_left = true;
	}

	this.pause = function(){

		console.log('Game is paused: ' + !paused);
		if (paused){
			paused = false;
			unPauseDiv.hide();
			pauseDiv.show();

		} else {
			paused = true;
			pauseDiv.hide();
			unPauseDiv.show();
		}
		
	}

	this.gameSetup = function() {

		this.isOccupied(); 

	}

	this.isOccupied = function(){

		for (var i = -1; i < 20; i++){
			isOccupied_[i] = [];
			for (var p = -1; p < 20; p++){
				isOccupied_[i][p] = false;
			}
		}

		for (var p = 0; p < 20; p++){
			isOccupied_[-1][p] = true;
			isOccupied_[10][p] = true;
			isOccupied_[p][20] = true;
		}
	}


	this.show = function() {
		
		//stroke(176,224,230);
		stroke(128,128, 0);
    	strokeWeight(1);
		for (var i = 0; i < arr.length; i++)
			this.paintGrid(arr[i].xcord, arr[i].ycord, this.getColor());
	}

	this.includes = function(arr, obj1, obj2) {
	    for(var i=0; i<arr.length; i++) {
	        if ((arr[i].xcord == obj1) && (arr[i].ycord == obj2)) 
	        	return true;
	    }
	}

	this.removeLine = function(x) {

		for(var i = usedSpaces.length - 1; i >= 0; i--) {
   			if(usedSpaces[i].ycord === x){ 
     			usedSpaces.splice(i , 1);
     		}
		}


		for(var p = usedSpaces.length - 1; p >= 0; p--) {
   			if(usedSpaces[p].ycord < x) 
     			usedSpaces[p].ycord = usedSpaces[p].ycord + 1;
     				
     	}

     	this.isOccupied();

     	for (var d = 0; d < usedSpaces.length; d++){
     		isOccupied_[usedSpaces[d].xcord][usedSpaces[d].ycord] = true;
     	}

		score += 100;
		outside.score();

		this.checkforScoring();

	}

	this.checkforScoring = function() {
		numRows = height/scl - 1;
		do {

			for (var j = 0; j < width/scl; j++){
				if (this.includes(usedSpaces, j, numRows))
					count++;
			}

			if (count === width/scl){
				count = 0;
				this.removeLine(numRows);
				return;
			}
			numRows--;
			count = 0;

		} while (numRows > 0);

	}		
			
}