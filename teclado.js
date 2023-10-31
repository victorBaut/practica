const d = document;
// nos atyuda a controlar el moviento
let x = 0;
let y = 0;

export function moveball(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();
  console.log(e.keyCode);
  console.log(e.key);
  console.log(limitsBall,limitsStage);

  //direccion
 // const move = (direction) => {
    //el moviemiento de cualquier tecla en este caso es de "x" y "y"
    // el valor de x y y multiplicado por 10
   
 // }

  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      x--;
     // move("left")
      break;
      case 38:
        e.preventDefault();
       y--;
        // move("up")
      break;
      case 39:
        e.preventDefault();
        x++;
         //move("rigth")
      break;
      case 40:
        e.preventDefault();
       y++;
       // move("Down")
      break;
    default:
      break;
   }
   $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}

export function shortcus(e) {
 /* console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(`ctrl:${e.ctrlKey}`);
  console.log(`alt:${e.altKey}`);
  console.log(`Shift:${e.ShiftKey}`);
  console.log(e);
  */
 if (e.key === "a" && e.altkey) {
  alert("Haz lanzado una alerta con el teclado")
 }
 if (e.key === "a" && e.altkey) {
  confirm("Haz lanzado una confirmacion con el teclado")
 }
 if (e.key === "a" && e.altkey) {
  prompt("Haz lanzado una aviso con el teclado")
 }
 
}

