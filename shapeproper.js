
function ShapeProperties() {

	this.coordinates = function(x, y){
		this.xcord = x;
		this.ycord = y;
	}

	this.buildSearchSpace = function(){

		switch(currentShape){

			case 5:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord - 1),  (arr[0].ycord + 3) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 2) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 0),  floor(arr[0].ycord + 2) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 1) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 2),  floor(arr[0].ycord + 1) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 2),  floor(arr[0].ycord + 2) ));

				break;

			case 4:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 2) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 1) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 1) ));

				break;

			case 8:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 1) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 1) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 2),  (arr[0].ycord + 1) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 3),  (arr[0].ycord + 1) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 4),  floor(arr[0].ycord + 0) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));

				break;


			case 7:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 4) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 1) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 2) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 3) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 1) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 2) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 3) ));				

				break;

			case 9:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord - 1),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord - 2),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 1) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 0),  floor(arr[0].ycord + 1) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 2),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 3),  floor(arr[0].ycord + 1) ));			

				break;

			case 6:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 3) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 1) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 2) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 1) ));			
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord + 0),  floor(arr[0].ycord + 2) ));			

				break;

			case 10:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 1) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 2),  (arr[0].ycord + 2) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 3),  floor(arr[0].ycord + 1) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 0),  floor(arr[0].ycord + 1) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));			

				break;	

			case 11:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 1) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 2),  (arr[0].ycord + 1) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 3),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 1) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 1) ));			

				break;

			case 12:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 3) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 3) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 1) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 2) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 1) ));	
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 2) ));			

				break;	

			case 13:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord - 1),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord - 2),  (arr[0].ycord + 2) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 1) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 3),  floor(arr[0].ycord + 1) ));	

				break;

			case 14:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 1) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 3) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 1) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 2) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 0),  floor(arr[0].ycord + 1) ));	
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 0),  floor(arr[0].ycord + 2) ));	

				break;	

			case 2:	
			case 15:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 1) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 1) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 2),  (arr[0].ycord + 2) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 3),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 3),  floor(arr[0].ycord + 1) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 1) ));	

				break;	

			case 3:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 3) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 1) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 1) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 2) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 1) ));	
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 2) ));	

				break;	

			case 16:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 2),  (arr[0].ycord + 2) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 3),  floor(arr[0].ycord + 1) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 1) ));	

				break;	

			case 17:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord - 1),  (arr[0].ycord + 3) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 3) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 1) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 2) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 1) ));	
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 2),  floor(arr[0].ycord + 2) ));	

				break;

			case 18:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 1) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 2),  (arr[0].ycord + 1) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 3),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 1) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 0),  floor(arr[0].ycord + 1) ));	

				break;

			case 19:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 3) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 2) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 1) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 2) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 1) ));	
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 2) ));	

				break;					

			case 1:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord - 1),  (arr[0].ycord + 2) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 1),  (arr[0].ycord + 2) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 2),  floor(arr[0].ycord + 1) ));

				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 2),  floor(arr[0].ycord + 1) ));	

				break;

			case 20:
				//bottom collisions
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord + 0),  (arr[0].ycord + 3) ));
				searchSpaceBottom.push(new this.coordinates( (arr[0].xcord - 1),  (arr[0].ycord + 2) ));

				//right collisions
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 0) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 1) ));
				searchSpaceRight.push(new this.coordinates( (arr[0].xcord + 1),  floor(arr[0].ycord + 2) ));


				//left collisions
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 0) ));
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 2),  floor(arr[0].ycord + 1) ));	
				searchSpaceLeft.push(new this.coordinates( (arr[0].xcord - 1),  floor(arr[0].ycord + 2) ));	

				break;					
		}	

	}
	
	this.getShape = function(shape){

		currentShape = shape;

		var startPos = parseInt((width/scl) / 2) - 1;

		if (shape === 8){
			for (var i = startPos; i < startPos + 4; i++){
				arr.push(new this.coordinates( i , 1 ));				
			}

			this.boxSclX = 4;
			this.boxSclY = 1;
			
		} else if (shape === 7){

			arr.push(new this.coordinates(startPos + 2 , 0 ));
			arr.push(new this.coordinates(startPos + 2 , 2 ));
			arr.push(new this.coordinates(startPos + 2 , 1 ));
			arr.push(new this.coordinates(startPos + 2 , 3 ));

			this.boxSclX = 1;
			this.boxSclY = 4;

		} else if (shape === 6){

			arr.push(new this.coordinates(startPos + 1 , 0 ));
			arr.push(new this.coordinates(startPos + 1 , 1 ));
			arr.push(new this.coordinates(startPos + 2 , 1 ));
			arr.push(new this.coordinates(startPos + 2 , 2 ));
			
			this.boxSclX = 2;
			this.boxSclY = 3;	

		} else if (shape === 5){

			for (var i = 0; i < 2; i++) {
				arr.push(new this.coordinates(startPos + 2 , i ));
			}

			for (var p = 1; p < 3; p++) {
				arr.push(new this.coordinates(startPos + 1 , p ));
			}

			this.boxSclX = 2;
			this.boxSclY = 3;

		} else if (shape === 4){
			for (var i = startPos; i < startPos + 2; i++) {
				arr.push(new this.coordinates(i , 0 ));
			}
			for (var p = startPos; p < startPos + 2; p++) {
				arr.push(new this.coordinates(p , 1 ));
			}

			this.boxSclX = 2;
			this.boxSclY = 2;

		} else if (shape === 3){

			for (var i = 0; i < 3; i++) {
				arr.push(new this.coordinates(startPos + 2 , i ));
			}	

			arr.push(new this.coordinates(startPos + 3 , 0 ));

			this.boxSclX = 2;
			this.boxSclY = 3;

		} else if (shape === 2){

			//shape = 15;
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 2, 1 ));
			arr.push(new this.coordinates(startPos + 3, 1 ));
			arr.push(new this.coordinates(startPos + 3, 2 ));
			this.boxSclX = 3;
			this.boxSclY = 2;
			
		} else if (shape === 1){

			arr.push(new this.coordinates(startPos + 1, 0 ));
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 0, 1 ));
			arr.push(new this.coordinates(startPos + 2, 1 ));

			this.boxSclX = 3;
			this.boxSclY = 2;
			
		} else if (shape === 9){

			arr.push(new this.coordinates(startPos + 2, 1 ));
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 0, 2 ));
			arr.push(new this.coordinates(startPos + 1, 2 ));

			this.boxSclX = 3;
			this.boxSclY = 2;
		} else if (shape === 10){
			arr.push(new this.coordinates(startPos    , 1 ));
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 1, 2 ));
			arr.push(new this.coordinates(startPos + 2, 2 ));
			this.boxSclX = 3;
			this.boxSclY = 2;

		} else if (shape === 11){
			arr.push(new this.coordinates(startPos    , 1 ));
			arr.push(new this.coordinates(startPos + 2, 1 ));
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 0, 2 ));
			this.boxSclX = 3;
			this.boxSclY = 2;

		} else if (shape === 12){
			arr.push(new this.coordinates(startPos + 1, 0 ));
			arr.push(new this.coordinates(startPos + 1, 2 ));
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 2, 2 ));
			this.boxSclX = 2;
			this.boxSclY = 3;

		} else if (shape === 13){
			arr.push(new this.coordinates(startPos + 2, 0 ));
			arr.push(new this.coordinates(startPos + 2, 1 ));
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 0, 1 ));
			this.boxSclX = 3;
			this.boxSclY = 2;

		} else if (shape === 14){
			arr.push(new this.coordinates(startPos + 0, 0 ));
			arr.push(new this.coordinates(startPos + 1, 0 ));
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 1, 2 ));
			this.boxSclX = 2;
			this.boxSclY = 3;

		} else if (shape === 15){
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 2, 1 ));
			arr.push(new this.coordinates(startPos + 3, 1 ));
			arr.push(new this.coordinates(startPos + 3, 2 ));
			this.boxSclX = 3;
			this.boxSclY = 2;

		} else if (shape === 16){
			arr.push(new this.coordinates(startPos + 1, 0 ));
			arr.push(new this.coordinates(startPos + 2, 1 ));
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 3, 1 ));
			this.boxSclX = 3;
			this.boxSclY = 2;

		} else if (shape === 17){
			arr.push(new this.coordinates(startPos + 2, 0 ));
			arr.push(new this.coordinates(startPos + 2, 1 ));
			arr.push(new this.coordinates(startPos + 2, 2 ));
			arr.push(new this.coordinates(startPos + 1, 2 ));
			this.boxSclX = 2;
			this.boxSclY = 3;

		} else if (shape === 18){
			arr.push(new this.coordinates(startPos + 0, 1 ));
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 2, 1 ));
			arr.push(new this.coordinates(startPos + 1, 2 ));
			this.boxSclX = 3;
			this.boxSclY = 2;

		} else if (shape === 19){
			arr.push(new this.coordinates(startPos + 1, 0 ));
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 1, 2 ));
			arr.push(new this.coordinates(startPos + 2, 1 ));
			this.boxSclX = 2;
			this.boxSclY = 3;

		} else if (shape === 20){
			arr.push(new this.coordinates(startPos + 1, 0 ));
			arr.push(new this.coordinates(startPos + 1, 1 ));
			arr.push(new this.coordinates(startPos + 1, 2 ));
			arr.push(new this.coordinates(startPos - 0, 1 ));
			this.boxSclX = 2;
			this.boxSclY = 3;

		}

	}

	this.paintBoundingBox = function(){

		if (currentShape === 5 || currentShape === 17 || currentShape === 1 || currentShape === 20){
			var x = arr[0].xcord - 1;
			var y = arr[0].ycord - 0;
		} else if (currentShape === 9){
			var x = arr[0].xcord - 2;
			var y = arr[0].ycord - 0;
		}else if (currentShape === 13){
			var x = arr[0].xcord - 2;
			var y = arr[0].ycord - 0;
		} else {
			var x = arr[0].xcord - 0;
			var y = arr[0].ycord - 0;
		}	

		noFill();

		strokeWeight(5);
		stroke(0, 255, 0);

		// top debug line
		line(scl * (x), scl * (y), scl * (x + this.boxSclX) , scl * (y ));
		//bottom debug line
		line(scl * (x), scl * (y + this.boxSclY), scl * (x + this.boxSclX) , scl * (y + this.boxSclY));

		// left debug line
		stroke(0, 255, 0);
		if (!edger_left)
			stroke(255,0,0);
		line(scl * (x ), scl * (y ), scl * (x) , scl * (y + this.boxSclY));
		 // right debug line
		stroke(0, 255, 0);
		if (!edger_right)
			stroke(255,0,0);
		line(scl * (x + this.boxSclX), scl * (y ), scl * (x + this.boxSclX) , scl * (y + this.boxSclY));


	}
}