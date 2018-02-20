



function r1(x) {return Math.round(x*10)/10;}
function r2(x) {return Math.round(x*100)/100;}

function handleOrientation(event) {
  //var absolute = event.absolute;
  var a    = event.alpha;
  var b    = event.beta;
  var g    = event.gamma;
  console.log(Date.now()+' '+r1(a)+' '+r1(b)+' '+r1(g));
  // Do stuff with the new orientation data
}

function handleMotion(event) {
  var x = accelerationIncludingGravity.x;
  var y = accelerationIncludingGravity.y;
  var z = accelerationIncludingGravity.z;
  console.log(Date.now()+' '+r2(x)+' '+r2(y)+' '+r2(z));

  // Do stuff with the new orientation data
}


window.addEventListener('deviceorientation', handleOrientation, true);
window.addEventListener("devicemotion", handleMotion, true);