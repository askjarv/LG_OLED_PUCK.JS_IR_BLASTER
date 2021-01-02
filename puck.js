function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

var prontoHex  = "0000 006C 0022 0002 015B 00AD 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 05F7 015B 0057 0016 0E6C";
var pulseTimesOK = require("pronto").decode(prontoHex );
function pressOK(){
sleep(2000);
console.log("OK");
  LED1.set();
 Puck.IR(pulseTimesOK);
  LED1.reset();
} 
var prontoHex  = "0000 006C 0022 0002 015B 00AD 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 05F7 015B 0057 0016 0E6C";
var pulseTimesUP = require("pronto").decode(prontoHex );
function pressUP(){
sleep(2000);
console.log("UP");
  LED1.set();
 Puck.IR(pulseTimesUP);
  LED1.reset();
} 
var prontoHex  = "0000 006C 0022 0002 015B 00AD 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 05F7 015B 0057 0016 0E6C";
var pulseTimesDOWN = require("pronto").decode(prontoHex );
function pressDOWN(){
console.log("DOWN");
sleep(2000);
  LED1.set();
 Puck.IR(pulseTimesDOWN);
  LED1.reset();
} 
var prontoHex  = "0000 006C 0022 0002 015B 00AD 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C";
var pulseTimesRIGHT = require("pronto").decode(prontoHex );
function pressRIGHT(){
sleep(2000);
console.log("RIGHT");
  LED1.set();
 Puck.IR(pulseTimesRIGHT);
  LED1.reset();
} 
var prontoHex  = "0000 006C 0022 0002 015B 00AD 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C";
var pulseTimesLEFT = require("pronto").decode(prontoHex );
function pressLEFT(){
sleep(2000);
console.log("LEFT");
  LED1.set();
 Puck.IR(pulseTimesLEFT);
  LED1.reset();
} 
var menu = [9.0,4.5,0.5,0.6,0.5,0.5,0.5,1.7,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.5,0.5,0.6,0.5,1.7,0.5,1.7,0.5,0.6,0.5,1.7,0.5,1.7,0.5,1.7,0.5,1.7,0.5,1.7,0.5,0.6,0.5,0.6,0.5,1.7,0.5,1.7,0.5,1.7,0.5,1.7,0.5,1.7,0.5,0.6,0.5,1.7,0.5,1.7,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,1.7,0.5,40.3,9.0,2.3,0.5,96.4,9.0,2.3,0.5,0.0,0.0,0];
function pressMENU(){
sleep(2000);
console.log("MENU");
	LED1.set();
 Puck.IR(menu);
  LED1.reset();
}

setWatch(function(e) {
  var len = e.time - e.lastTime;
  if (len > 0.3) {

  } else {
    console.log("Sequence started");
    pressMENU();
    pressRIGHT();
    pressRIGHT();
    pressRIGHT();
    pressRIGHT();
    pressRIGHT();
    pressRIGHT();
    pressRIGHT();
    pressRIGHT();
    pressRIGHT();
    pressRIGHT();
    pressRIGHT();
    pressRIGHT();
    pressOK();
    pressRIGHT();
    pressRIGHT();
    pressRIGHT();
    pressOK();
    pressDOWN();
    pressOK();
    pressOK();
    console.log("Sequence complete");
    digitalPulse(LED2,1,100);
  }
}, BTN, { edge:"falling",repeat:true,debounce:50});