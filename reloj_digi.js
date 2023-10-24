const doc = document;

const iniciarBtn = doc.getElementById("iniciar");
const horaActualText = doc.getElementById("hora-actual");
const pausarActualText = doc.getElementById("detener-reloj")
iniciarBtn.addEventListener("click", (e) => {
  e = setInterval(() => {
    const myDate = new Date();
    const hours = myDate.getHours();
    const minutes = myDate.getMinutes();
    const seconds = myDate.getSeconds();
    const horaActual = hours + ":" + minutes + ":" + seconds;
    console.log(horaActual);
    horaActualText.innerText = horaActual;
  }, 1000);
});


