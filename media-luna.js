const d = document;

export default function mediaLunaBtn(btn,classDark) {
   const $themebtn = d.querySelector(btn);
   /****cuando quieres poner estilos en html con un tipo de atributo****/
   /**especificar con corchetes***/
   const $selectors = d.querySelectorAll("[data-dark]")

   console.log($selectors)

   let moon = " 🌙 ";
   let sun = " 🌞 ";

d.addEventListener("click",(e) => {
  if (e.target.matches(btn)) {
    console.log($themebtn.textContent);
    if ($themebtn.textContent === moon) {
      $selectors.forEach((el) => el.classList.add(classDark));
      $themebtn.textContent = sun;
    }else {
      $selectors.forEach((el) => el.classList.remove(classDark));
      $themebtn.textContent = moon;
    }
  }
});
}