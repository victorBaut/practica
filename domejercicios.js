import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClok, alarm} from "./alarmadigital.js";
import {moveball, shortcus } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";


const d = document;


d.addEventListener("DOMContentLoaded", e =>{
  hamburgerMenu(".panel-btn",".panel",".menu a");  
  digitalClok("#reloj","#activar-reloj","#desactivar-reloj")
  alarm("asets/alarm-clock.mp3","#activar-alarma","#desactivar-alarma")
  countdown("coundow", "dec 31, 2023, 12:00:00", "Feliz Año nuevo")
});

//el teclado tiene tres eventos Keydown, keypress, y keydoof

/*d.addEventListener("keydown", (e)=>{
  shortcus(e);
})*/

/*d.addEventListener("keyup", (e)=>{
  shortcus(e);
})*/
d.addEventListener("keydown", (e)=>{
  shortcus(e);
  moveball(e,".ball",".stage");
})


