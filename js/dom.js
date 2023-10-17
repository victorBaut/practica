/*
console.log(window);
console.log(document);

let texto = "Hola soy tu amigo y docente digital Jonathan Mircha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);
*/
/*
console.log("*******Elementos del Documento*******");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
 console.log(document.getSelection().toString());
},3000);
*/
/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("cards"));
console.log(document.getElementsByName("nombre"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a").length);
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

document.documentElement.lang = "es"
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-Mx");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","nooper");
$linkDOM.setAttribute("href","https://youtube.com/jonmircha");
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo objeto de Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribiete a mi canal y comparte";
console.log(console.log($linkDOM.dataset.description));
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
/*
const ulElement = document.getElementsByClassName("ul");
console.log(ulElement);
const li = document.createElement("li");
li.appendChild(document.createTextNode("victor"));
const btn = document.createElement("button");
btn.appendChild(document.createTextNode("Mi boton"));
btn.className = "mi-boton";
ulElement[0].appendChild(li);
ulElement[0].appendChild(btn);
x

for (let index = 0; index < 10; index++) {
    const liItem = document.createElement("li");
    liItem.appendChild(document.createTextNode("item " + index));
    ulElement[0].appendChild(liItem);
}
*/

const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));



//variable CSS-Custom Properties CSS
const $html=document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
 varyellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");


 console.log(varDarkColor, varyellowColor);

 $body.style.backgroundColor = varDarkColor;
 $body.style.color = varyellowColor;

 $html.style.setProperty("--dark-color","#333");
 varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

 $body.style.setProperty("background-color", varDarkColor);
 
/*
const $card = document.querySelector(".card");
 console.log($card);
 console.log($card.className);
 console.log($card.classList);
 
 //claseList tien un metodo llamado contains devuelve un boleam//
 console.log($card.classList.contains("rotate-45"));
 $card.classList.add("rotate-45");
 console.log($card.classList.contains("rotate-45"));
 console.log($card.className);
 console.log($card.classList);
 $card.classList.remove("rotate-45");
 console.log($card.classList.contains("rotate-45"));
 $card.classList.toggle("rotate-45");
 console.log($card.classList.contains("rotate-45"));
 $card.classList.replace("rotate-45","rotate-135");
 $card.classList.add("opacity-80","sepia");
 */
/*
const $whatlsDOM = document.getElementById("que-es");
let text = `
     <p> 
     El Modelo de Objetos del Documento (<b><i>DOM Document Object Model </i></b>) es un API para documentos HTML y XML.
     </p> 
     <p>
     Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
     </p>
      <p>
     <mark>
     El DOM no es parte de la espicificacion de Javascript, es una API para los navegadores.</mark>
     </p>
     `;
//$whatlsDOM.innerText = text;
$whatlsDOM.textContent = text;
$whatlsDOM.innertHTML = text;
$whatlsDOM.outerHTML = text;
*/
/*
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
*/
/*
const $figure = document.createElement("figure");
$img = document.createElement("img");
$figcaption = document.createElement("figcaption");
$figcaptionText = document.createTextNode("Animals");
$cards = document.querySelector(".cards");


$figure.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);
$figure2 = document.createElement("figure");

$img.setAttribute("src","https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-2_d7d2206b_221212153725_310x310.jpg")
$img.setAttribute("alt","Animals");
$figure.classList.add("card");


$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = ` 
<img src="https://img.freepik.com/foto-gratis/pequeno-tronco-rio-selva-tropical_1150-13681.jpg?t=st=1693518812~exp=1693519412~hmac=4eaeb5230d7529333bd8ba9205339237e7febbddac8687f4b21f88b848820c78"
alt="Nature">
<figcaption>Nature</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);


const estaciones = ["Primavera","Verano","Otoño","Invierno"];
 $ul=document.createElement("ul");
 

    document.write("<h3>Estaciones del año </h3>");
    document.body.appendChild($ul);
    
    estaciones.forEach((el)=> {
     const $li = document.createElement("li");
     $li.textContent = el;
     $ul.appendChild($li);
    });


    const continentes = ["Africa","Europa","Oceania","Asia","America"];
    $ul2=document.createElement("ul");
   
    document.write("<h3>Continentes del Mundo</h3>");
    document.body.appendChild($ul2);
    $ul2.innerHTML = "";

    continentes.forEach((el)=> ($ul2.innerHTML += `<li>${el}</li>`));


    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ]
    $ul3 = document.createElement("ul");
    $fragment = document.createDocumentFragment();    


    meses.forEach((el)=>{
        const $li = document.createElement("li");
        $li.textContent = el;
        $fragment.appendChild($li)
    });
*/
/*

const $cards = document.querySelector(".cards");
$template = document.getElementById("template-cards").content;
$fragment = document.createDocumentFragment();
cardContent = [
    {
     title: "Tecnoligia",
     img:"https://eldiariofeminista.info/wp-content/uploads/2019/11/1_vxjAHkrXbGG6gOiPZgjeZA-1024x530.jpg"  
    },
    {
        title:"Animales",
        img:"https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-2_d7d2206b_221212153725_310x310.jpg"
    },
    {
        title: "Arquitectura",
        img:"https://humanidades.com/wp-content/uploads/2019/02/arquitectura-5-e1586622216558.jpg",
    },
    {
        title: "Gente",
        img:"https://c8.alamy.com/compes/e700yg/multitud-de-espectadores-viendo-los-eventos-deportivos-al-aire-libre-e700yg.jpg",
    },
    {
        title: "Naturaleza",
        img:"https://img.freepik.com/foto-gratis/pequeno-tronco-rio-selva-tropical_1150-13681.jpg?t=st=1693518812~exp=1693519412~hmac=4eaeb5230d7529333bd8ba9205339237e7febbddac8687f4b21f88b848820c78",
    },
];
cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template,true);
       $fragment.appendChild($clone);

});
*/
/*
const $cards = document.querySelector(".card");
$newCard=document.createElement("figure");
$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src = "https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-2_d7d2206b_221212153725_310x310.jpg"
alt = "Any">
<figcaption>Any</fiscaption`;

$newCard.classList.add("card");
*/

/* 
tres metodos 
insertAdjacent
insertAdjacentElement(position, el)
insertAdjacentHTML(position, HTML)
insertAdjacentText(position, text)


posiciones

beforebegin(hermano anterior)
afterbegin (primer hijo)
beforeend (ultimo hijo)
afterend(hermano siguiente)
*/


/*
$newCard.innerHTML = `
<img src ="https://img.freepik.com/fotos-premium/joven-bloguera-europea-sonriente-sienta-silla-escribiendo-laptop-fondo-gris-simbolos-circulos-abstractos_116547-25929.jpg?w=2000" alt = "Any">
<figcaption>Any</figcaption>
`;
*/

// ahora en vez de utilizar innerHTML utilizamos otra variable y figcaption la ponemos en vacio
/*
const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

let $contenCard = `
<img src ="https://img.freepik.com/fotos-premium/joven-bloguera-europea-sonriente-sienta-silla-escribiendo-laptop-fondo-gris-simbolos-circulos-abstractos_116547-25929.jpg?w=2000" alt = "Any">
<figcaption></figcaption>
`; 
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
//$cards.insertAdjacentElement("afterend",$newCard);
*/

//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
//$cards.after($newCard);



function holaMundo() {
  alert("Hola Mundo");
  console.log(Event);
}

function saludar(nombre = "Desconocido") {
  alert(`Hola ${nombre}`);
}
const $EventoSemantico = document.getElementById("evento-semantico");
$EventoMultiple = document.getElementById("evento-multiple");

$EventoSemantico.onclick = holaMundo;
$EventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de evento Semanico");
  console.log(e);
}


$EventoMultiple.addEventListener("click", holaMundo);
$EventoMultiple.addEventListener("clik", (e) => {
  alert("Hola Mundo Manejador de Evento Multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(Event);
});
$EventoMultiple.addEventListener("click", saludar);


$EventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Esme");
  saludar("Carla");
  saludar("Ariana");
  saludar("Victor");

});

//flujo de evento (burbuja y captura);
/*
const $divEventos = document.querySelectorAll(".eventos-flujo div");
  $div = document.querySelector("flujo-eventos")
console.log($divEventos);

function flujoEvento(e) {
  console.log(`Hola te saluda ${this.className},el click lo origina ${e.target.className}`);
  console.log($divEventos);
}
/*
$divEventos.forEach(div => {
div.addEventListener("click",flujoEvento,false);
});
*/
/*
$divEventos.forEach(div => {
  div.addEventListener("click",flujoEvento,true);
  });
  div.addEventListener("click", flujoEvento,{
  capture: false,
  once: true,
});
*/
/*
//BOM: propiedades y eventos
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.outerWidth);
*/
//para ver en que coordemnada empieza a dibujarse la ventana de tu navegador
// para ello se utiliza el screenX
// y screenY
/*
window.addEventListener("load",(e)=> {
  console.clear();
  console.log("****Evento load****");
  console.log(window.creenX);
  console.log(window.screenY);
  console.log(e);
});
window.addEventListener("scroll",(e)=>{
  console.clear();
  console.log("****Evento Scroll****");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});
document.addEventListener("DOMContentLoaded",(e)=>{
  console.log("****Evento DOMContentloaded****");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
*/

/*
const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e => {
  ventana = window.open("https://github.com/victorBaut/practica");
});

$btnCerrar.addEventListener("click",e =>{
  console.log('cerrars');
  ventana.close();
});

$btnImprimir.addEventListener("click",e =>{
  window.print();
});
*/
// BOM objetos URL, Historial y Navegador.
/*
console.log("****Objeto URL (location)****");
console.log(location);
console.log(location.protocol);
console.log(location.origin);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname);
//location.reload();
*/

/*
console.log("****Objeto Historial(History)****")
console.log(history);
console.log(history.length);
console.log(history.go);
*/
/*
console.log("****Objeto navegador");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
*/

