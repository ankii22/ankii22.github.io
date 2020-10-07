function changeColor() {
  var dd1=document.getElementById("div1");
  var dd2=document.getElementById("div2");
  
  dd1.className="blueblack";
  dd2.className="yellowblack";
}

function changeText() {
  var dd1=document.getElementById("div1");
  var dd2=document.getElementById("div2");
  
  dd1.innerHTML="ANKITA";
  dd2.innerHTML="ABHISHEK";
}

function dolime() {
  var a1=document.getElementById("d1");
  a1.style.backgroundColor="lime";
}

function doyellow() {
  var a1=document.getElementById("d1");
  a1.style.backgroundColor="yellow";
  var ctx=a1.getContext("2d");
  ctx.fillStyle="violet";
  ctx.fillRect(10,10,40,40);
  
  ctx.fillStyle="black";
  ctx.font= "30px Arial";
  ctx.fillText("HELLO",70,30);
}

function docolor() {
  var b1 = document.getElementById("d2");
  var colorinput = document.getElementById("clr");
  var color = colorinput.value;
  b1.style.backgroundColor= color;
}

function dosquare() {
  var sliderinput = document.getElementById("sldr");
  var len = sliderinput.value;
  var canvas = document.getElementById("d2");
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle = "yellow";
  context.fillRect(10,10,len,len);
  //context.fillRect(parseInt(len)+20,10,len,len);
  //context.fillRect(len*3,10,len,len);

}

//function upload() {
 //var fileinput= document.getElementById("finput");
  //var filename=fileinput.value;
  //alert("Choose" + filename);

var image = null;

function disp() {
  //Get input from file input
  var fileinput = document.getElementById("finput");
  //Make new SimpleImage from file input
  image = new SimpleImage(fileinput);
  //Get canvas
  var canvas = document.getElementById("can");
  //Draw image on canvas
  image.drawTo(canvas);
}

function makegray() {
  //change all pixels of image to gray
  for (var pixel of image.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}