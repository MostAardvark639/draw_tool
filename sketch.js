//let angle = 10
//let paint_mode = false
let pen_mode = false
let pen_color = false //testing
let is_drawing = false
let brush_mode = false
let spray_paint = false
let spiral_paint = false
let stroke_chonk = 1
var angle = 0.0;
var offset = 60;
var scalar = 2;
var speed = 0.05;

function setup() {
	let canvas = createCanvas(900,600)
	canvas.parent("p5")
	fill(150)
	rect(0,0, width, height)
	angleMode(DEGREES)
		noStroke()

}

function draw() {

//stroke(0);
	if (is_drawing===true) {
		if (pen_mode==true){
			strokeWeight(stroke_chonk)
			line(mouseX, mouseY, pmouseX, pmouseY)

		
		} 
	}
//stroke(0);
	if (is_drawing===true) {
		if (brush_mode==true){
			push()
			noStroke()
			ellipse(mouseX, mouseY, stroke_chonk+15, stroke_chonk+15, 100)
			pop()
		}
	
	}

	if (is_drawing===true) {
		if (spray_paint==true) {
			push()
			//stroke()
			strokeWeight(random(stroke_chonk, stroke_chonk+3))
			point(mouseX + random(-10, 10), mouseY + random(-10, 10))
			pop()
		}
	}

	if (is_drawing === true) {
		if (spiral_paint == true) {
			push()
			strokeWeight(stroke_chonk+1)
			var x = offset + cos(angle) * scalar;
			var y = offset + sin(angle) * scalar;
			ellipse(mouseX, mouseY, stroke_chonk + 10, stroke_chonk + 10)
			angle += speed;
			scalar += speed;
			pop()
		}
	}


	//make the right tool bar
 push()
   stroke(0)
   strokeWeight(1)

   fill(200,200,200)
   rect(width-50,0,50, height)
 //pop()

   //make the line tool
   rect(width-40, 10, 30, 30)
   line(width-40, 10, width-10, 40) //x1,y1,x2,y2

   //make the circle tool
   rect(width-40, 50, 30, 30)
   ellipse(width-25, 65, 25, 25)//xcenter,ycenter,heigh,width

   //Stroke Weight increase Button
   push()
   rect(width-40, 90, 30, 30)
   fill(155)
   strokeWeight(5)
   line(width-30, 105, width-20, 105)
   pop()
  //point()
  
   //Stroke Weight Decrease Button
  	push()
  	rect(width-40, 130, 30, 30)
  	fill(155)
   	strokeWeight(1)
   	line(width-30, 145, width-20, 145)
  	pop()
   

   
	//Spray Paint Button
	push()
		rect(width-40, 170, 30, 30)
		fill(240)
		ellipse(width-20, 180, 10, 10)
		ellipse(width-25, 185, 5, 5)
		ellipse(width-35, 191, 7, 7)
		ellipse(width-15, 190, 10, 10)
		ellipse(width-35, 175, 9, 9)
	pop()


	//Spiral Button
	push()
	rect(width-40, 210, 30, 30)
	//fill(155)
	var x = offset + cos(angle) * scalar;
	var y = offset + sin(angle) * scalar;
	ellipse(width-25, 225, 20, 20);
	angle += speed;
	scalar += speed;
	pop()

	//Clear Button
	push()
	fill(255)
	rect(width-40, 250, 30, 30)
	pop()
   
	//make the left color bar
 push()
    stroke(0)

    // make the toolbar area
    fill(200, 200, 200)
    rect(0, 0, 50, height)

    // make the red button
    fill(255, 0, 0)
    rect(10, 10, 30, 30)

    // make the blue button
    fill(0, 0, 255)
    rect(10, 50, 30, 30)

    //make the green button
    fill(0,255,0)
    rect(10, 90, 30, 30)

    //make the yellow button
    fill(239, 255, 4)
    rect(10, 130, 30, 30)
 

 	//make the brown button 
 	fill(178, 130, 59)
 	rect(10, 170, 30, 30)
  
 	//make the purple button
 	fill(228, 34, 221)
 	rect(10, 210, 30, 30)

 	//make the black button
 	fill(0)
 	rect(10, 250, 30, 30)


 	//make the white button
 	fill(255)
 	rect(10, 290, 30, 30)


  pop()

pop()

}

function mousePressed() {
	
	is_drawing=true
}


function mouseReleased() {

	is_drawing=false
	
}


function mouseClicked() {

print(int(mouseX), int(mouseY))
	
	//PENMODE
	if (mouseX > width-40 && mouseX < width-10 && mouseY > 10 && mouseY < 40){
		pen_mode=true  
		brush_mode=false
		spray_paint=false
		spiral_paint=false
	}	

	//BRUSH MODE
	if (mouseX > width-40 && mouseX < width-10 && mouseY > 50 && mouseY < 80) {
		pen_mode=false
		brush_mode=true
		spray_paint=false
		spiral_paint=false
	} 


	//SPRAY PAINT
	if (mouseX > width-40 && mouseX < width-10 && mouseY > 170 && mouseY < 200) {
		pen_mode=false
		brush_mode=false
		spray_paint=true
		spiral_paint=false
	}

	//Spiral Paint
	if (mouseX > width-40 && mouseX < width-10 && mouseY > 210 && mouseY < 240) {
		pen_mode=false
		brush_mode=false
		spray_paint=false
		spiral_paint=true

	}

	//Clear Screen
	if (mouseX > width-40 && mouseX < width-10 && mouseY > 250 && mouseY < 280) {
		rect(0,0, width, height)
		fill(150)
	}


	//SIZE INCREASE
	if (mouseX > width-40 && mouseX < width-10 && mouseY > 90 && mouseY < 120){
			strokeWeight(stroke_chonk += 1)
	}
	//SIZE DECREASE
	if (mouseX > width-40 && mouseX < width-10 && mouseY > 130 && mouseY < 160){
		strokeWeight(stroke_chonk -= 1)
	}


  // check to see if the mouse click was within the red button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
        stroke(255, 0, 0, )
        fill(255, 0, 0, )
    }

    // check to see if the mouse click was within the blue button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80) {
        stroke(0, 0, 255, )
        fill(0, 0, 255, )

    }

    //check to see if mouse is on green button
    if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120) {
        stroke(0, 255, 0, )
        fill(0, 255, 0, )
    }

    //check to see if mouse is on yellow button
	if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160) {
        stroke(239, 255, 4)
        fill(239, 255, 4)
    }


    //check to see if mouse is on brown button
    if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
    	stroke(178, 130, 59)
    	fill(178, 130, 59)

    }

    //check to see if mouse is on purple button
    if (mouseX > 10 && mouseX < 40 && mouseY > 210 && mouseY < 240) {
    	stroke(228, 34, 221)
    	fill(228, 34, 221)


    }

    //check to see if mouse is on black button
    if (mouseX > 10 && mouseX < 40 && mouseY > 250 && mouseY < 280) {
    	stroke(3, 0, 3)
    	fill(3, 0, 3)

    }

    //check to see if mouse is on white button 
    if (mouseX > 10 && mouseX < 40 && mouseY > 290 && mouseY < 310) {
    	stroke(255)
    	fill(255)

    }
 }