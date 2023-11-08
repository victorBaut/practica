const d = document;

export default function countdown(id, limitDate, finalMessage) {
  const $coundown = d.getElementById(id);
  const coundownDate = new Date(limitDate).getTime();


  let countdowTempo = setInterval(() => {
    let now = new Date().getTime();
    let limitTime = coundownDate - now;

    let days = Math.floor (limitTime / (1000*60*60*24)); 
    let hours = ("0" + Math.floor(limitTime %  (1000*60*60*24)/(1000*60*60))).slice(-2);
    let minutes =("0"+ Math.floor(limitTime %  (1000*60*60*24)/(1000*60))).slice(-2);
    let seconds= ("0" + Math.floor(limitTime % (1000*60*60*24)/(1000))).slice(-2);

    $coundown.innerHTML =`<h3>faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h>`;
    if (limitTime < 0) {
      clearInterval(countdowTempo);
      $coundown.innerHTML = `<h3> ${finalMessage}</h3>`;
    };
    //console.log(coundownDate,now,limitTime);
  }, 1000);
}

