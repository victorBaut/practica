const d = document;

export default function countdown(id,limitDate,finalMessage) {
  const $countdown = d.getElementById(id);
  const countdownDate = new Date(limitDate).getTime();


  let countdowTempo=setInterval(() => {
    let now = new Date().getTime();
    let limiTime = countdownDate - now;
   // console.log(countdownDate, now, limiTime);
  }, 1000);
}

