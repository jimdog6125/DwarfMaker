var humans = 0;
var dwarves = 0;
var noses = 0;
var hair = 0;
var skin = 0;
var eyes = 0;
var torsos = 0;
var appendages = 0
var bits = 0;

var Dnoses = 0;
var Dhair = 0;
var Dskin = 0;
var Deyes = 0;
var Dtorsos = 0;
var Dappendages = 0
var Dbits = 0;

function kill(number){
    humans = humans + number;
    document.getElementById("humans").innerHTML = humans;
};
function seperate(number){
  if(humans >= 1){
  hair = hair + number;
     document.getElementById("hair").innerHTML = hair;
  noses = noses + number;
     document.getElementById("noses").innerHTML = noses;
  skin = skin + number;
     document.getElementById("skin").innerHTML = skin;
  eyes = eyes + number;
     document.getElementById("eyes").innerHTML = eyes;
  torsos = torsos + number;
     document.getElementById("torsos").innerHTML = torsos;
  appendages = apendages + number;
     document.getElementById("appendages").innerHTML = appendages;
  bits = bits + number;
     document.getElementById("bits").innerHTML = bits;
  humans = humans - number;
     document.getElementById("humans").innerHTML = humans;
    
  }
};



function makeDwarfStuff(){
 
 Dhair = hair * 2;
  hair = hair - 1;
     document.getElementById("hair").innerHTML = hair;
     document.getElementById("Dhair").innerHTML = Dhair;
  Dnoses = noses * 2;
  noses = noses - 1
     document.getElementById("noses").innerHTML = noses;
  document.getElementById("Dnoses").innerHTML = Dnoses;
  Dskin = skin * 2;
  skin = skin - 1;
     document.getElementById("skin").innerHTML = skin;
  document.getElementById("Dskin").innerHTML = Dskin;
  Deyes = eyes * 2;
  eyes = eyes - 1;
     document.getElementById("eyes").innerHTML = eyes;
  document.getElementById("Deyes").innerHTML = Deyes;
  Dtorsos = torsos * 2;
  torsos = torsos - 1;
     document.getElementById("torsos").innerHTML = torsos;
  document.getElementById("Dtorsos").innerHTML = Dtorsos;
  Dappendages = appendages * 2;
  appendages = appendages - 1;
     document.getElementById("appendages").innerHTML = appendages;
  document.getElementById("Dappendages").innerHTML = Dappendages;
  Dbits = bits * 2;
  bits = bits - 1;
     document.getElementById("bits").innerHTML = bits;
  document.getElementById("Dbits").innerHTML = Dbits;
 };
function make(){
if(Dhair >= 1) && (Dnoses >= 1) && (Dskin >= 1) && (Deyes >= 1) && (Dtoros >= 1) && (Dappendages >= 1) && (Dbits >= 1){
  Dhair = Dhair - 1;
    document.getElementById("Dhair").innerHTML = Dhair;
  Dnoses = Dnoses - 1;
    document.getElementById("Dnoses").innerHTML = Dnoses;
  Dskin = Dskin - 1;
    document.getElementById("Dskin").innerHTML = Dskin;
  Deyes = Deyes - 1;
    document.getElementById("Deyes").innerHTML = Deyes;
  Dtorsos = Dtorsos - 1;
    document.getElementById("Dtorsos").innerHTML = Dtorsos;
  Dappendages = Dappendages - 1;
    document.getElementById("Dappendages").innerHTML = Dappendages;
  Dbits = Dbits - 1;
    document.getElementById("Dbits").innerHTML = Dbits;
  dwarves = dwarves + 1;
};
};
