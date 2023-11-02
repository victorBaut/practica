const doc = document;
let intervalReloj;

const iniciarBtn = doc.getElementById("iniciar");
const horaActualText = doc.getElementById("hora-actual");
const pausarActualText = doc.getElementById("detener-reloj")
const horaTex = doc.getElementById("tiempo-real");
const iniciarAlarmabtn = doc.getElementById("iniciar-alarma");
const detenerAlarma = doc.getElementById("detener-alarma")

iniciarBtn.addEventListener("click", (e) => {
  intervalReloj = setInterval(() => {
    const myDate = new Date();
    const hours = myDate.getHours(); 
    const minutes = myDate.getMinutes();
    const seconds = myDate.getSeconds();
    const horaActual = hours + ":" + minutes + ":" + seconds;
    console.log(horaActual);
    horaActualText.innerText = horaActual;
  }, 1000);
});

pausarActualText.addEventListener("click",(e)=>{
  clearInterval(intervalReloj);
})

iniciarAlarmabtn.addEventListener("click",(e)=>{
  intervalReloj = setInterval(() => {
    const myDate = new Date();
    const hours = myDate.getHours();
    const minutes = myDate.getMinutes();
    const seconds = myDate.getSeconds();
    const horaActual = hours + ":" + minutes + ":" + seconds;
    console.log(horaActual);
    horaTex.innerText = horaActual;
  }, 1000)
});
detenerAlarma.addEventListener("click",(e)=>{
  clearInterval(intervalReloj)
  console.log("deteneralarma")
});

