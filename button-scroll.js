const d = document;
const w = window;

export default function scrollTopButton(btn) {
   const $scrollBTn = d.querySelector(btn);
   
   w.addEventListener("scroll", e => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrollTop > 600) {
      $scrollBTn.classList.remove("hidden");
    } else {
      $scrollBTn.classList.add("hidden");
    }
    console.log(w.pageYOffset, d.documentElement.scrollTop)
   });

   d.addEventListener("click", (e)=>{
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior:"smooth",
        top:0,
      });
    }
   })
}
