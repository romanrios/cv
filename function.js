document.getElementById("en").onclick = function () {
    document.getElementById("hhero").innerHTML = "Visual Communication Designer<br>+ Front-End Developer"
    document.getElementById("nav_inicio").innerHTML = "Home";
    document.getElementById("nav_experiencia").innerHTML = "Experience";
    document.getElementById("nav_habilidades").innerHTML = "Skills";
    document.getElementById("nav_proyectos").innerHTML = "Projects";
    document.getElementById("nav_contacto").innerHTML = "Contact";
    document.getElementById("title_experiencia").innerHTML = "Experience";
    document.getElementById("title_habilidades").innerHTML = "Skills";
    document.getElementById("title_proyectos").innerHTML = "Projects";
    document.getElementById("title_datos").innerHTML = "Contact";
    document.getElementById("hab_desarrollo").innerHTML = "DEVELOPMENT";
    document.getElementById("hab_diseño").innerHTML = "DESIGN";
    document.getElementsByClassName("link").innerHTML = "Link to project";
    document.getElementById("proyecto_futumag").innerHTML = "Digital magazine about design and technology";
    document.getElementById("proyecto_wesound").innerHTML = "Social network for collaborative music production";
    document.getElementById("proyecto_pirogram").innerHTML = "Visual identity for design studio";
    document.getElementById("boton_enviar").value = "Send";
    document.getElementById("form_nombre").placeholder = "Name:";
    document.getElementById("form_mensaje").placeholder = "Message:";
}



document.getElementById("es").onclick = function () {
    document.getElementById("hhero").innerHTML = "Diseñador de Comunicación Visual<br>+ Desarrollador Front-End";
    document.getElementById("nav_inicio").innerHTML = "Inicio";
    document.getElementById("nav_experiencia").innerHTML = "Experiencia";
    document.getElementById("nav_habilidades").innerHTML = "Habilidades";
    document.getElementById("nav_proyectos").innerHTML = "Proyectos";
    document.getElementById("nav_contacto").innerHTML = "Contacto";
    document.getElementById("title_experiencia").innerHTML = "Experiencia";
    document.getElementById("title_habilidades").innerHTML = "Habilidades";
    document.getElementById("title_proyectos").innerHTML = "Proyectos";
    document.getElementById("title_datos").innerHTML = "Contacto";
    document.getElementsByClassName("link").innerHTML = "Enlace al proyecto";
    document.getElementById("proyecto_futumag").innerHTML = "Magazine digital sobre diseño y tecnología";
    document.getElementById("proyecto_wesound").innerHTML = "Red social de producción musical colaborativa";
    document.getElementById("proyecto_pirogram").innerHTML = "Identidad visual para estudio de diseño";
    document.getElementById("boton_enviar").value = "Enviar";
    document.getElementById("form_nombre").placeholder = "Nombre:";
    document.getElementById("form_mensaje").placeholder = "Mensaje:";
}


var check = document.querySelector('#check');

document.getElementById("nav_inicio").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_experiencia").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_habilidades").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_proyectos").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_contacto").onclick = function () {
    check.checked = false;
}