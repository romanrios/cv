document.getElementById("en").onclick = function () {
    /*hero*/
    document.getElementById("hhero").innerHTML = "Visual Communication Designer<br>+ Front-End Developer"
    /*navbar y títulos*/
    document.getElementById("nav_inicio").innerHTML = "Home";
    document.getElementById("nav_experiencia").innerHTML = "Experience";
    document.getElementById("nav_habilidades").innerHTML = "Skills";
    document.getElementById("nav_proyectos").innerHTML = "Projects";
    document.getElementById("nav_contacto").innerHTML = "Contact";
    document.getElementById("title_experiencia").innerHTML = "Experience";
    document.getElementById("title_habilidades").innerHTML = "Skills";
    document.getElementById("title_proyectos").innerHTML = "Projects";
    document.getElementById("title_datos").innerHTML = "Contact";
    /*experiencia*/
    document.getElementById("exp_academica").innerHTML = "ACADEMIC";
    document.getElementById("exp_cursos").innerHTML = "COURSES";
    document.getElementById("exp_laboral").innerHTML = "WORK";
    document.getElementById("exp_universidad").innerHTML = "<i>Licenciatura en Diseño de Comunicación Visual.</i><br>University Degree. Facultad de Arquitectura, Diseño y Urbanismo.</p>";
    document.getElementById("exp_argentina").innerHTML = "Languages and knowledge of programming and digital skills.";
    document.getElementById("exp_motion").innerHTML = "<i>Del diseño gráfico al diseño en movimiento.</i><br>Postgraduate course. FADU UNL.";
    document.getElementById("exp_fusa").innerHTML = "Freelance graphic design, development of digital and printed graphic pieces.";
    document.getElementById("exp_seal").innerHTML = "Administration and invoincing in the plastic products industry.";
    document.getElementById("exp_zona").innerHTML = "Sales and technical service of video games and computing.";
    /*habilidades*/
    document.getElementById("hab_desarrollo").innerHTML = "DEVELOPMENT";
    document.getElementById("hab_diseño").innerHTML = "DESIGN";
    document.getElementById("hab_identidadvisual").innerHTML = "Visual identity";
    document.getElementById("hab_diseñowebyapps").innerHTML = "Web design & apps";
    document.getElementById("hab_interfazdeusuario").innerHTML = "User interface";
    document.getElementById("hab_diseñodeinformacion").innerHTML = "Infomation design";
    document.getElementById("hab_diseñoeditorial").innerHTML = "Editorial design";
    /*proyectos*/
    document.getElementById("link_a").innerHTML = "> Link to project&nbsp;";
    document.getElementById("link_b").innerHTML = "> Link to project&nbsp;";
    document.getElementById("link_c").innerHTML = "> Link to project&nbsp;";
    document.getElementById("proyecto_futumag").innerHTML = "Digital magazine about design and technology";
    document.getElementById("proyecto_wesound").innerHTML = "Social network for collab music production";
    document.getElementById("proyecto_pirogram").innerHTML = "Visual identity for design studio";
    /*contacto*/
    document.getElementById("boton_enviar").value = "Send";
    document.getElementById("form_nombre").placeholder = "Name:";
    document.getElementById("form_mensaje").placeholder = "Message:";
}

document.getElementById("es").onclick = function () {
    /*hero*/
    document.getElementById("hhero").innerHTML = "Diseñador de Comunicación Visual<br>+ Desarrollador Front-End";
    /*navbar y títulos*/
    document.getElementById("nav_inicio").innerHTML = "Inicio";
    document.getElementById("nav_experiencia").innerHTML = "Experiencia";
    document.getElementById("nav_habilidades").innerHTML = "Habilidades";
    document.getElementById("nav_proyectos").innerHTML = "Proyectos";
    document.getElementById("nav_contacto").innerHTML = "Contacto";
    document.getElementById("title_experiencia").innerHTML = "Experiencia";
    document.getElementById("title_habilidades").innerHTML = "Habilidades";
    document.getElementById("title_proyectos").innerHTML = "Proyectos";
    document.getElementById("title_datos").innerHTML = "Contacto";
    /*experiencia*/
    document.getElementById("exp_academica").innerHTML = "ACADÉMICA";
    document.getElementById("exp_cursos").innerHTML = "CURSOS";
    document.getElementById("exp_laboral").innerHTML = "LABORAL";
    document.getElementById("exp_universidad").innerHTML = "<i>Licenciatura en Diseño de Comunicación Visual.</i><br>Carrera de grado. Facultad de Arquitectura, Diseño y Urbanismo.</p>";
    document.getElementById("exp_argentina").innerHTML = "Lenguajes y conocimientos de programación y habilidades digitales.";
    document.getElementById("exp_motion").innerHTML = "<i>Del diseño gráfico al diseño en movimiento.</i><br>Curso de posgrado. FADU UNL.";
    document.getElementById("exp_fusa").innerHTML = "Diseño gráfico freelance, desarrollo de piezas gráficas digitales e impresas.";
    document.getElementById("exp_seal").innerHTML = "Administración y facturación en industria de productos plásticos.";
    document.getElementById("exp_zona").innerHTML = "Ventas y servicio técnico de videojuegos e informática.";
    /*habilidades*/
    document.getElementById("hab_desarrollo").innerHTML = "DESARROLLO";
    document.getElementById("hab_diseño").innerHTML = "DISEÑO";
    document.getElementById("hab_identidadvisual").innerHTML = "Identidad visual";
    document.getElementById("hab_diseñowebyapps").innerHTML = "Diseño web y apps";
    document.getElementById("hab_interfazdeusuario").innerHTML = "Interfaz de usuario";
    document.getElementById("hab_diseñodeinformacion").innerHTML = "Diseño de información";
    document.getElementById("hab_diseñoeditorial").innerHTML = "Diseño editorial";
    /*proyectos*/
    document.getElementById("link_a").innerHTML = "> Enlace al proyecto&nbsp;";
    document.getElementById("link_b").innerHTML = "> Enlace al proyecto&nbsp;";
    document.getElementById("link_c").innerHTML = "> Enlace al proyecto&nbsp;";
    document.getElementsByClassName("link").innerHTML = "Enlace al proyecto";
    document.getElementById("proyecto_futumag").innerHTML = "Magazine digital sobre diseño y tecnología";
    document.getElementById("proyecto_wesound").innerHTML = "Red social de producción musical colaborativa";
    document.getElementById("proyecto_pirogram").innerHTML = "Identidad visual para estudio de diseño";
    /*contacto*/
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