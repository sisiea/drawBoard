var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1200, 600);
var onoff = false;
var oldx = 0;
var oldy = 0;
var lineColor = "white";
var bcolor;
var lineW = 4;
//添加鼠标移动事件
canvas.addEventListener("mousemove", draw, true);
//添加鼠标按下事件 
canvas.addEventListener("mousedown", down, false);
//添加鼠标弹起事件 
canvas.addEventListener("mouseup", up, false);
//添加手指移动事件
canvas.addEventListener("touchmove", draw, true);
//添加手指触摸事件 
canvas.addEventListener("touchstart", down, false);
//添加手指离开事件 
canvas.addEventListener("touchend", up, false);



function down(event) {
    onoff = true;
    oldx = event.pageX-10;
    oldy = event.pageY-25;
}
function up(event) {
    onoff = false;
}
function draw(event) {

    if (onoff === true) {
        var newx = event.pageX-10;
        var newy = event.pageY-25;

        ctx.beginPath();
        ctx.moveTo(oldx, oldy);
        ctx.lineTo(newx, newy);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineW;
        ctx.lineCap = "round";
        ctx.stroke();

        oldx = newx;
        oldy = newy;
    }
}
//改变线条颜色
function changecl(btn) {
    lineColor = btn.value;
}

//改变线条粗细
function Wup() {
    lineW++;
    if (lineW > 10) {
        lineW--;
        alert("can not bigger than 10");       
    }
}
function Wdown() {
    lineW--;
    if (lineW < 1) {
        lineW++;
        alert("can not smaller than 1");
    }
}
//保存当前图片,目前实现不了
/*function savepic(myCanvas) {
    var image = new image();
    image.src = myCanvas.toDataURL("image/png");
    return image;
}*/



