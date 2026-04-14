import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let who = [' Mi perro ', ' Mi abuelita ', ' Tu tio ', ' mi pana '];
  let action = [' corrio ', ' se cayo ', ' rompio ', ' averio '];
  let what = [' mi tarea ', ' mi celular ', ' mi nave '];
  let when = [' antes de la clase ', ' Al salir de casa ', ' mientras dormia ', ' cuando saltaba en un pie ', ' cuando comenzo el apocalipsis zombie '];
  
  function getRandomElement (arr){
    return arr[Math.floor(Math.random() * arr.length)]
  }
  let excuse = getRandomElement(who) +""+ getRandomElement(action) +""+ getRandomElement(what) +""+ getRandomElement(when);
  console.log(excuse);
  document.getElementById('excuse').innerHTML = excuse;
};
