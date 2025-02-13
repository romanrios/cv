import {
  elements_innerHTML,
  elements_value,
  elements_placeholder,
} from "./translations.js";

const translatePage = (lang) => {
  for (let id in elements_innerHTML) {
    document.getElementById(id).innerHTML = elements_innerHTML[id][lang];
  }

  for (let id in elements_placeholder) {
    document.getElementById(id).placeholder = elements_placeholder[id][lang];
  }

  for (let id in elements_value) {
    document.getElementById(id).value = elements_value[id][lang];
  }

  document.querySelectorAll(".project-header").forEach((header) => {
    header.innerHTML = header.innerHTML
      .replace(/Diseño|Design/g, lang === "en" ? "Design" : "Diseño")
      .replace(
        /Desarrollo|Development/g,
        lang === "en" ? "Development" : "Desarrollo"
      )
      .replace(/Música|Music/g, lang === "en" ? "Music" : "Música");
  });
};

document.getElementById("en").onclick = () => translatePage("en");
document.getElementById("es").onclick = () => translatePage("es");

const navItems = [
  "nav_inicio",
  "nav_experiencia",
  "nav_habilidades",
  "nav_proyectos",
  "nav_contacto",
  "nav_downloads",
];
navItems.forEach((item) => {
  document.getElementById(item).onclick = () => {
    document.querySelector("#check").checked = false;
  };
});
