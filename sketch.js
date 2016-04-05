var backColor;
var sideColor;
var treeBaseColor;
var middleColor;

function setup() {
  createCanvas(600,600);
  backColor = color(30,34,13);
  sideColor = color(44,49,20);
  treeBaseColor = color(106,81,65);
  forest = new Forest();
  forest.display();
  middleColor = backColor;
  background(backColor);
}

function draw() {
  background(middleColor);
  forest.drawTrees();
  drawDeer();
  forest.drawBushes();
}

function drawDeer(){
  noStroke();
  //body
  fill(72,62,45);
  beginShape();
  vertex(220,600);
  vertex(380,600);
  vertex(380,400);
  vertex(350,300);
  vertex(250,300);
  vertex(220,400);
  endShape();
  fill(98,83,56);
  beginShape();
  vertex(260,600);
  vertex(340,600);
  vertex(360,400);
  vertex(340,300);
  vertex(260,300);
  vertex(240,400);
  endShape();
  fill(187,157,109);
  beginShape();
  vertex(130,60);
  vertex(160,95);
  vertex(160,40);
  vertex(160,100);
  vertex(150,100);
  endShape();//1.1
  triangle(150,100,160,120,160,40);//1.2
  beginShape();
  vertex(180,120);
  vertex(170,110);
  vertex(170,60);
  vertex(170,70);
  vertex(180,30);
  vertex(175,70)
  vertex(180,95);
  vertex(200,50);
  endShape();//2
  beginShape();
  vertex(420,120);
  vertex(430,90);
  vertex(425,60);
  vertex(440,90);
  vertex(440,110);
  endShape();//7.1
  beginShape();
  vertex(440,110);
  vertex(440,90);
  vertex(448,60);
  vertex(450,90);
  vertex(440,110);
  endShape();//7.2
  beginShape();
  vertex(360,165);
  vertex(420,140);
  vertex(460,110);
  vertex(470,90);
  vertex(460,40);
  vertex(465,90);
  vertex(455,110);
  vertex(410,140);
  endShape();//8.1
  beginShape();
  vertex(455,115);
  vertex(475,90);
  vertex(476,70);
  vertex(480,90);
  vertex(490,90);
  endShape();//8.2
  //Cornamenta
  stroke(99,71,47);
  strokeCap(PROJECT);
  strokeWeight(7);
  line(240,170,200,160);//1.1
  line(200,160,160,120);//1.2
  line(240,160,200,120);//3
  line(260,170,245,120);//4
  line(340,165,350,120);//5
  line(345,165,380,135);//6
  line(350,173,440,110);//7
  line(360,168,420,143);//8.1
  line(420,143,460,113);//8.2
  stroke(124,97,71);
  strokeWeight(5);
  line(240,165,200,155);//1.1
  line(200,155,160,115);//1.2
  line(160,120,150,100);//1.3
  line(160,120,150,100);//1.4
  line(235,160,210,150);//2.1
  line(210,150,170,110);//2.2
  line(240,156,200,116);//3.1
  line(200,120,190,100);//3.2
  line(245,120,240,90);//4
  line(350,120,348,110);//5
  line(380,135,410,100);//6
  line(350,170,440,110);//7
  line(360,165,420,140);//8.1
  line(420,140,460,110);//8.2
  stroke(189,168,122);
  strokeWeight(3);
  line(150,100,140,80);//1.1
  line(150,100,160,40);//1.2
  line(200,151,160,110);//1.3
  line(235,162,210,147);//2.1
  line(210,147,170,107);//2.2
  line(170,110,170,95);//2.3
  line(190,100,190,80);//3
  line(240,90,240,80);//4
  line(348,110,340,90);//5
  line(345,161,380,131);//6.1
  line(380,131,410,96);//6.2
  line(410,100,410,80);//6.3
  line(440,110,440,90);//7.1.1
  line(440,90,425,60);//7.1.2
  line(440,110,450,90);//7.2.1
  line(450,90,448,50);//7.2.2
  line(460,110,470,90);//8.1.1
  line(470,90,460,40);//8.1.2
  line(455,115,490,90);//8.2
  noStroke();
  fill(133,118,84);// base cuerpo
  triangle(300,500,350,300,250,300);
  triangle(250,300,250,260,270,270);
  triangle(350,300,350,260,330,270);
  triangle(250,190,350,190,300,500)
  fill(120,102,79); // orejas y pecho
  triangle(280,500,300,500,250,300);
  triangle(320,500,300,500,350,300);
  triangle(250,235,220,190,250,190);
  triangle(220,160,220,190,250,190);
  triangle(350,235,380,190,350,190);
  triangle(380,160,350,190,380,190);
  fill(153,141,84);
  triangle(350,300,300,300,330,320);
  triangle(250,300,300,300,270,320);
  fill(181,158,108)// pre-cornamenta
  triangle(250,190,300,190,270,170);
  triangle(350,190,300,190,330,170);
  fill(120,102,79);
  triangle(300,300,270,320,330,320);
  fill(61,50,39); // nariz
  triangle(300,300,320,300,330,270);
  triangle(300,300,280,300,270,270);
  // base cornamenta
  triangle(250,190,270,170,230,150)
  triangle(350,190,330,170,370,150)
  fill(203,183,149);
  triangle(350,300,320,300,330,270);
  triangle(250,300,280,300,270,270);
  triangle(250,235,250,190,290,190);
  triangle(350,235,350,190,310,190);
  fill(144,135,128);
  triangle(300,300,330,270,270,270);
  fill(192,175,142);
  triangle(250,260,270,270,265,235);
  triangle(350,260,330,270,335,235);
  quad(270,270,280,240,320,240,330,270);
  triangle(300,190,270,170,330,170)
  fill(161,144,117);
  triangle(270,270,265,235,288,220);
  triangle(330,270,335,235,312,220);
  fill(178,163,135);
  triangle(320,240,280,240,300,190);
  triangle(250,235,250,210,252,210);
  triangle(350,235,350,210,348,210);
  triangle(250,235,265,235,250,260);
  triangle(350,235,335,235,350,260);
  fill(75,58,46); //ojos
  triangle(250,235,265,235,252,220);
  triangle(350,235,335,235,348,220);
  fill(249,243,217); //superior-ojos
  quad(265,235,252,220,252,210,265,220);
  quad(335,235,348,220,348,210,335,220);
}

function mouseMoved(){
  if (mouseX > pmouseX) {
    forest.move("right");
  } 
  if (mouseX < pmouseX) {
    forest.move("left");
  }
  if (mouseY < pmouseY) {
    forest.move("down");
  }
  if (mouseY > pmouseY) {
    forest.move("up");
  }/*
  if(mouseX <= width/2){
    //middleColor = calculateLerpColor(sideColor, backColor, map(mouseX, 0, width/2, 0, 1));
  }
  else{
    //middleColor = calculateLerpColor(backColor, sideColor, map(mouseX, width/2, width, 0, 1));
  }*/
}

function keyPressed() {
  if (keyCode === ENTER ){
    middleColor = color(101,113,125);
    forest.snowMode();
  }
  else if (keyCode === BACKSPACE ){
    middleColor = backColor;
    forest.normalMode();
  }
  
}

function calculateLerpColor(from, to, range){
  return lerpColor(from, to, range);
}

/***** Clase Bosque: Contiene árboles y arbustos *******/

function Forest() {
  this.numOfTrees = 40;
  this.numOfBushes = 20;
  this.trees = new Array();
  this.bushes = new Array();
  
  this.display = function(){
    var i = 0;
    while( i < this.numOfTrees){
      this.trees.push(new Tree());
      i++;
    }
    var i = 0;
    while( i < this.numOfBushes){
      this.bushes.push(new Bush());
      i++;
    }
    this.trees.forEach(function(tree){
      tree.display();
      tree.drawSegments();
    });
    
    this.bushes.forEach(function(bush){
      bush.display();
      bush.drawTriangles();
    });
  }
  
  this.drawTrees = function(){
    this.trees.forEach(function(tree){
      tree.drawSegments();
    });
  }
  
  this.drawBushes = function(){
    this.bushes.forEach(function(bush){
      bush.drawTriangles();
    });
  }
  
  this.move = function(direction){
    this.trees.forEach(function(tree){
      tree.move(direction);
    });
    this.bushes.forEach(function(bush){
      bush.move(direction);
    });
  }
  
  this.snowMode = function(){
    this.trees.forEach(function(tree){
      tree.changeColors(40,54,60);
    });
    this.bushes.forEach(function(bush){
      bush.changeColors(209,234,243);
    });
  }
  
  this.normalMode = function(){
    this.trees.forEach(function(tree){
      tree.changeColors(64,57,43);
    });
    this.bushes.forEach(function(bush){
      bush.changeColors(62,68,29);
    });
  }
}

/***** Clase Arbusto *******/

function Bush() {
  this.baseX = random(-100, width + 100);
  this.baseY = height+5;
  this.randomAlpha = random(0,200);
  this.bushColor = [62,68,29];
  this.trianglesVertices = new Array();
  
  this.display = function(){
    for (i = 0; i < 7; i++){
      this.trianglesVertices.push(generateVertices([this.baseX,this.baseY]));
    }
  }
  
  generateVertices = function(position){
    var x2 = position[0] + random(-200,200);
    var y2 = constrain(position[1] + random(-200,0),420,height+10);
    var x3 = x2 + random(-50,50);
    var y3 = constrain(y2 + random(-100,0),450,height);
    return [position[0], position[1], x2, y2, x3, y3];
  }
  
  this.drawTriangles = function(){
    fill(this.bushColor[0],this.bushColor[1],this.bushColor[2],this.randomAlpha);
    noStroke();
    this.trianglesVertices.forEach(function(vertices){
      triangle(vertices[0],vertices[1],vertices[2],vertices[3],vertices[4],vertices[5]);
    });
  }
  
  this.move = function(direction){
    if (direction == "up"){
      this.randomAlpha += 5;
      fill(this.bushColor[0],this.bushColor[1],this.bushColor[2],this.randomAlpha);
      noStroke();
      this.trianglesVertices.forEach(function(vertices){
        triangle(vertices[0],vertices[1],vertices[2],vertices[3],vertices[4],vertices[5]);
      });
     }
     if (direction == "down"){
      this.randomAlpha -= 5;
      fill(this.bushColor[0],this.bushColor[1],this.bushColor[2],this.randomAlpha);
      noStroke();
      this.trianglesVertices.forEach(function(vertices){
        triangle(vertices[0],vertices[1],vertices[2],vertices[3],vertices[4],vertices[5]);
      });
     }
  }

  this.changeColors = function(r,g,b){
    this.bushColor = [r,g,b];
  }
}
  

/***** Clase Árbol *******/

function Tree() {
  this.baseX = random(-300, width + 300);
  this.baseY = height;
  this.base = [this.baseX, this.baseY];
  this.randomAlpha = random(20,255);
  this.r = 64;
  this.g = 57
  this.b = 43;
  this.treeColor = color(this.r,this.g, this.b, this.randomAlpha);
  this.actualStrokeWidth = 20;
  this.vertices = new Array();
  this.vertices.push(this.base);
  /*
  Vertices es un arreglo con las intersecciones de cada rama del arbol.
  La posición 0 de cada vértice es el eje x, la posición 1 es el eje y.
  */
  
  this.display = function(){
    var position = this.base;
    for (i = 0; i < 5; i++){
      var newVertex = calculateVertex(position)
      this.vertices.push(newVertex);
      position = newVertex;
    }
  }
  
  this.drawSegments = function(){
    stroke(this.treeColor);
    var actualStrokeWidth = this.actualStrokeWidth;
    for(i = 0; i < this.vertices.length - 1; i++){
      actualStrokeWidth = actualStrokeWidth - i*2;
      strokeWeight(actualStrokeWidth);
      line(this.vertices[i][0], this.vertices[i][1], this.vertices[i+1][0], this.vertices[i+1][1]);
    }
  }
  
  this.move = function(direction){
     if (direction == "left"){
      for(i = 0; i < this.vertices.length; i++){
        this.vertices[i][0] -= 3;
      }
     }
     else if (direction == "right"){
      for(i = 0; i < this.vertices.length; i++){
        this.vertices[i][0] += 3;
      }
     }
     else if (direction == "up"){
      for(i = 0; i < this.vertices.length; i++){
        if(this.vertices[i][1] != this.vertices[0][1]){
          this.actualStrokeWidth -= 0.04;
          this.vertices[i][1] += 3;
        }
      }
     }
     else if (direction == "down"){
       for(i = 0; i < this.vertices.length; i++){
        if(this.vertices[i][1] != this.vertices[0][1]){
          this.vertices[i][1] -= 3;
          this.actualStrokeWidth += 0.04;
        }
      }
     }
  }
  
  this.changeColors = function(r,g,b){
    this.treeColor = color(r, g, b, this.randomAlpha);
  }
  
  function calculateVertex(position){
    newPosX = position[0] + random(-20,20);
    newPosY = position[1] - random(120, 150);
    return([newPosX, newPosY]);
  }
  
}