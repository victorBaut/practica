const d = document

  let conteoReg;

  conteoReg = setInterval(() => {

    const myDate = new Date();
    const day = myDate.getDay();
    const hours = myDate.getHours();
    const minutes = myDate.getMinutes();
    const seconds = myDate.getSeconds();
    const horaActual = day + ":" + hours + ":" + minutes + ":" + seconds;
    console.log(horaActual);
    horaActualText.innerText = horaActual;
  }, interval);



