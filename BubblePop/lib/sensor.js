/*
 Sample code for University of Strathclyde Mobile App Development.
 Developed by Mark Dunlop for in-class usage - no warranty or guarantees given.
 
 This work is licensed under the Creative Commons Attribution 4.0 International License. 
 To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/ .
 
 This code can be freely used so long as attribution is made to "Mark Dunlop University of Strathclyde"
 This code can also be included in submissions of coursework for CS317 without declaration.
 
 CC-BY 2017
 */
/*jslint node: true, white: true, browser: true */
"use strict";

function r0(x) {return Math.round(x);}
function r1(x) {return Math.round(x*10)/10;}
function r2(x) {return Math.round(x*100)/100;}
function r4(x) {return Math.round(x*10000)/10000;}

var starttime = Date.now();
var OriData = ["StartTime: "+starttime+" Time Alpha Beta Gamma"];
var AccData = ["StartTime: "+starttime+" Time Z Y X"];
var i = 1;
var j = 1;
var Ori = 0;
var Acc = 0;
//var ScrnX = ["X"];
//var ScrnY = ["Y"];
console.log(starttime);

var init = function (){
  var oldX = 9999, oldY = 0, oldZ = 0, f=0.001;
  var a = 0, b = 0, g = 0, x = 0, y = 0, z = 0, p = 0, r = 0;
  
    if (window.DeviceOrientationEvent){
        window.addEventListener("deviceorientation", function(event){
          var aa = event.alpha, bb = event.beta, gg = event.gamma;
          a = aa;
          b = bb;
          g = gg;
        });
    }
    
    setInterval(function(){
        OriData.push((Date.now())+' '+r1(a)+' '+r1(b)+' '+r1(g));
        //localStorage.setItem('Ori.' + i, JSON.stringify((Date.now()-starttime)+' '+r1(a)+' '+r1(b)+' '+r1(g)));
        //localStorage["OriData"] = JSON.stringify(OriData);
        i += 1;
       //console.log('Ori.'+i);
    }, 11);
    
    
    
    if (window.DeviceMotionEvent){
      window.addEventListener("devicemotion", function(event){
        var xx = event.accelerationIncludingGravity.x, yy=event.accelerationIncludingGravity.y, zz=event.accelerationIncludingGravity.z, pitch, roll;
        x = xx;
        y = yy;
        z = zz;
        
        pitch = Math.atan(y/z) * 180 / Math.PI;
        roll = Math.atan( -x / Math.sqrt(y*y + z*z)) * 180 / Math.PI;
        p = pitch;
        r = roll;

      });
    }
    setInterval(function(){
        AccData.push((Date.now())+' '+r2(z)+' '+r2(y)+' '+r2(x));
        //console.log(AccData);
        //console.log((Date.now()-starttime)+' '+r2(z)+' '+r2(y)+' '+r2(x));
        //localStorage.setItem('Acc.' + j, JSON.stringify((Date.now()-starttime)+' '+r2(z)+' '+r2(y)+' '+r2(x)));
        j += 1;
    }, 11);
    
    setInterval(function(){
        Ori = JSON.stringify(OriData);
        var fd = new FormData();
        fd.append("Ori", Ori);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'posta.php', true);
        xhr.send(fd);
        console.log('Ori Data submitted');
        
        Acc = JSON.stringify(AccData);
        var fd2 = new FormData();
        fd2.append("Acc", Acc);
        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', 'postb.php', true);
        xhr2.send(fd2);
        console.log('Acc Data submitted');
        
        OriData = [' '];
        AccData = [' '];
    }, 10000);

    window.addEventListener("devicelight", function (event) {
        document.getElementById("lux").innerHTML = "Lux: "+r0(event.value);
    });

};

window.addEventListener("load",init);