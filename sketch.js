var scl = 25;
var shape = [];
var control = 0;
var usedSpaces = [];
var randomShape = []; 
var shapeStorage = [];
var edger_right = true;
var edger_left = true;
var count = 0;
var numRows = 0;
var canTransform = true;
var beginX;
var beginY;
var speed = 0.5;
var masterSpeed = speed;
var paused = false;
var collision = true;
var lookAheadCollision = [];
var cnv;
var colorCount = 0;
var color_ = [];
var rightWidthOffset = 0;
var outside;
var buildPersonalShape = false;
var score = 0;
var first = true, first_ = true;
var level = 0;
var flag = true;
var searchSpaceBottom = [];
var searchSpaceRight = [];
var searchSpaceLeft = [];
var isOccupied_ = [];
var lookAheadCoord = [];
var countLookAhead = []; 
var shapeP;
var arr = [];
var currentShape;
var colorGroup = [];
var tempNum = 8;
var debugMode = false;

var one = true;
var stop = false;

function centerCanvas() {

  var x = (windowWidth - (width + rightWidthOffset)) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  //centerCanvas();
}

function setup() {

    
    selectColors();

    shapeP = new ShapeProperties();

    randomShape[0] = parseInt(random(20)) + 1;
    randomShape[1] = parseInt(random(20)) + 1;

    randomShape[0] = tempNum;
    randomShape[1] = tempNum;

    cnv = createCanvas(550, 500);
    centerCanvas();
    rightWidthOffset = 300;
    width = width - rightWidthOffset;
    
    shape = new Shape();
    shape.pickShape();
    shape.gameSetup();

    outside = new Outside(shape);
    outside.begin();

    shapeP.buildSearchSpace();
    resetLookAhead();

}

function draw() {    

    background(255);

    drawGrid();

    if (!paused){
        shape.update(0, 0);
    }
    

    if (paused){
        speed = 0;
    } else {
        speed = masterSpeed;
    }

    firstCheck();

    stroke(128,128,128);
    strokeWeight(1);
    // draw the used spaces , spaces that are occupied
    for (var i = 0; i < usedSpaces.length; i++) {
        if (usedSpaces[i].xcord != (width/scl)){
            shape.paintGrid(usedSpaces[i].xcord, usedSpaces[i].ycord, usedSpaces[i].color);
        }
    }

    if (paused)
	   shape.show();
    if (debugMode)
        shapeP.paintBoundingBox();
    shape.lookAhead();
    
}

function firstCheck(){

    if (collision) {

        shape.checkforScoring();
        restartThings('no');

        shape.update(0, 0);


        if (collision){

            restartThings('yes');
            console.log('game over');
        }
    }

}


function restartThings(restart) {

    stop = false;

    resetLookAhead();
    lookAheadCoord.length = 0; 

    collision = false;
    shape = new Shape();
    shape.pickShape();
    if (flag)
        outside.nextShape(randomShape[1]);
    if (!flag)
        outside.nextShape(randomShape[0]);

    searchSpaceBottom.length = 0; 
    searchSpaceRight.length = 0; 
    searchSpaceLeft.length = 0; 
    shapeP.buildSearchSpace();

    if (restart === 'yes'){
        level = -1;
        console.log('start over has been invoked');
        usedSpaces.length = 0;
        shape.gameSetup();
        score = 0;
        outside.score();
        speed = 0.5;
        masterSpeed = 0.5;
        
    }

}

function bottom() {

    if (stop){
        console.log('stop');
        return 0;
    }
    for (var i = 0;  i < searchSpaceBottom.length; i++){
        if (isOccupied_[searchSpaceBottom[i].xcord][parseInt(searchSpaceBottom[i].ycord) + 1]){
            down = ( parseInt(searchSpaceBottom[i].ycord) + 1 ) - (searchSpaceBottom[i].ycord) ;
            stop = true;
            return down;
        }
    }

    return 1.5;
}

function resetLookAhead(){

    for (var i = 0; i < 5; i++){
        lookAheadCollision[i] = false;
    }

    lookAheadCoord.length = 0; 
}

function keyPressed() {

	if (!paused) {
		if (keyCode === DOWN_ARROW) {
            shape.update(0, bottom());
            resetLookAhead();
            shape.lookAhead();

	    } 
	    if (edger_right) {
	        if (keyCode === RIGHT_ARROW) {
                shape.update(1,0);
                resetLookAhead();
                shape.lookAhead();
	        }
	    } 
	    if (edger_left) {
	        if (keyCode === LEFT_ARROW) {
                shape.update(-1,0);
                resetLookAhead();
                shape.lookAhead();
	        }
	    } 

	    if (key === " " ){
	    	shape.hardDrop();
	    	
	    }

        if (keyCode === UP_ARROW){
            resetLookAhead();
            //if (currentShape === 8 )
            shape.transform();
        }
	}

    if (keyPressed){
    	if (key == "p" || key == 'P' ){
    		shape.pause();
    	}

    	if (key == "r" || key == 'R' ){
            restartThings('yes');
    	}

        if (key == "d" || key == 'D' ){
            debugMode = !debugMode;
        }
    }
}

function selectColors(){

    colorGroup[0] = color(249, 56, 34);
    colorGroup[1] = color(224, 112, 30);
    colorGroup[2] = color(16, 6, 159);
    colorGroup[3] = color(206, 0, 86);
    colorGroup[4] = color(255, 215, 0);
    colorGroup[5] = color(127, 255, 0);
    colorGroup[6] = color(153, 50, 204);
}

function drawGrid(){

    stroke(220,220,220);

    strokeWeight(2);

    line(0, height -1, width, height - 1);
    
    // draw the grid (horizontal)
    for (var i = 0; i <= height; i = i + scl) {
        line(0, i, width, i);
    }
    // draw the grid (vertical)
    for (var p = 0; p <= width; p = p + scl) {
        line(p, 0, p, height);
    }
}

function boundaryCheck(){

    for (var i = 0; i < searchSpaceLeft.length; i++) {
        c = (0, 255, 0);
        shape.paintGrid(searchSpaceLeft[i].xcord, searchSpaceLeft[i].ycord, c);
    }

    for (var i = 0; i < searchSpaceBottom.length; i++) {
        c = (0, 200, 0);
        shape.paintGrid(searchSpaceBottom[i].xcord, searchSpaceBottom[i].ycord, c);
    }

    for (var i = 0; i < searchSpaceRight.length; i++) {
        c = (0, 100, 0);
        shape.paintGrid(searchSpaceRight[i].xcord, searchSpaceRight[i].ycord, c);
    }
}


