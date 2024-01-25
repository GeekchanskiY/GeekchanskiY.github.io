const canvas = document.getElementById('introCanvas')
const ctx = canvas.getContext('2d')

canvas.width = 1920
canvas.height = 1080



console.log('Canvas width: '+ canvas.getBoundingClientRect().width)
console.log('Canvas height: '+ canvas.getBoundingClientRect().height)

console.log('Window width: '+ window.innerWidth)
console.log('Window height: '+ window.innerHeight)

function getArcPriorCoords(initPosX, initPosY, maxPosX, maxPosY, prevPosX, prevPosY){
    let finish = false;

    // sets rotation

    const rotation_side = (Math.floor(Math.random() * 10) > 4) ? 1 : -1; // right or left

    const rotation_angle = (Math.random() * 30 * Math.PI * rotation_side) / 180; // sets angle from 1 to 60 deg

    // sets arc step length, checks if it fits in space

    let length = Math.floor(Math.random() * 1000) + 1; // sets length from 1 to 50 px ( hypotenuse )
    let adjacent = Math.cos(rotation_angle) * length;
    let opposite = Math.sin(rotation_angle) * length;

    let newPosX = initPosX + adjacent;
    let newPosY = initPosY + opposite;

    let fitsX =  newPosX > maxPosX ? true : false;
    
    let fitsY = newPosY > maxPosY ? true : false;

    if (!fitsX || !fitsY){
        finish = true
    }

    return {
        posX: newPosX,
        posY: newPosY,
        finish: finish
    }
}

/* window.onmousemove = function(e){
    
    console.log(e.clientX + '' + e.clientY);
    */
let arc_bool = true
const init_X = 200;
const init_Y = 200;
const max_X = 1000;
const max_Y = 1000;
let prevPosX = init_X;
let prevPosY = init_Y;
steps = 0;
while (arc_bool){
    let arc_step = getArcPriorCoords(init_X, init_Y, max_X, max_Y, prevPosX, prevPosY)

    ctx.moveTo(prevPosX, prevPosY);
    ctx.lineTo(arc_step.posX, arc_step.posY);
    ctx.stroke();
    prevPosX = arc_step.posX;
    prevPosY = arc_step.posY;
    steps += 1;
    if (steps == 10){
        break;
    }
    arc_bool = arc_step.finish;
}
    
 // }
