let links = document.getElementsByClassName("link");
let projectHeaders = document.getElementsByClassName("project-header");

document.getElementById("en").onclick = function () {
    /*hero*/
    document.getElementById("hhero").innerHTML = "Visual Communication Design<br>> Web Development and Video games"
    /*navbar y títulos*/
    document.getElementById("nav_inicio").innerHTML = "Home";
    document.getElementById("nav_experiencia").innerHTML = "Experience";
    document.getElementById("nav_habilidades").innerHTML = "Skills";
    document.getElementById("nav_proyectos").innerHTML = "Projects";
    document.getElementById("nav_contacto").innerHTML = "Contact";
    document.getElementById("nav_downloads").innerHTML = "Downloads";
    document.getElementById("title_experiencia").innerHTML = "Experience";
    document.getElementById("title_habilidades").innerHTML = "Skills";
    document.getElementById("title_proyectos").innerHTML = "Completed projects";
    document.getElementById("title_datos").innerHTML = "Contact";
    document.getElementById("title_downloads").innerHTML = "Downloads";

    /*experiencia*/
    document.getElementById("exp_academica").innerHTML = "ACADEMIC";
    document.getElementById("exp_cursos").innerHTML = "COURSES";
    document.getElementById("exp_laboral").innerHTML = "WORK";
    document.getElementById("exp_universidad").innerHTML = "<i>Bachelor in Visual Communication Design.</i> University Degree. Universidad Nacional del Litoral. Facultad de Arquitectura, Diseño y Urbanismo.</p>";
    document.getElementById("exp_argentina").innerHTML = "■ #SeProgramar course (INTI)<br>■ Front-end Development (Ticmas)<br>■ Android App Development (Ticmas)<br>■ Front-end Development (Educado en Argentina)<br>■ English Level 8 B1.2 MCER (CUI-UBA)";
    document.getElementById("exp_motion_title").innerHTML = "Postgraduate course FADU UNL";
    document.getElementById("exp_motion").innerHTML = "Motion Graphics Design: From graphic design to motion design.";
    document.getElementById("exp_fusa").innerHTML = "Freelance graphic design for digital and print media.";
    document.getElementById("exp_seal").innerHTML = "Administration and invoincing in the plastic products industry.";
    document.getElementById("exp_zona").innerHTML = "Sales and technical service of video games and computing.";
    document.getElementById("exp_codoacodo").innerHTML = "Full Stack Web Development - Node.JS";
    document.getElementById("exp_pixi").innerHTML = "Game development with Pixi.JS";
    document.getElementById("exp_react").innerHTML = "Application development with React and React Native";

    /*habilidades*/
    document.getElementById("hab_desarrollo").innerHTML = "DEVELOPMENT";
    document.getElementById("hab_diseño").innerHTML = "DESIGN";
    document.getElementById("hab_musica").innerHTML = "MUSIC";
    document.getElementById("hab_identidadvisual").innerHTML = "Visual identity";
    document.getElementById("hab_diseñowebyapps").innerHTML = "Web design & apps";
    document.getElementById("hab_interfazdeusuario").innerHTML = "User interface";
    document.getElementById("hab_diseñodeinformacion").innerHTML = "Infomation design";
    document.getElementById("hab_diseñoeditorial").innerHTML = "Editorial design";
    document.getElementById("hab_musicaoriginal").innerHTML = "Original music";
    document.getElementById("hab_efectosdesonido").innerHTML = "Sound effects";
    document.getElementById("hab_sintetizadores").innerHTML = "Synthesizers";
    document.getElementById("hab_guitarra").innerHTML = "Guitar";
    document.getElementById("hab_vst").innerHTML = "VST Virtual instruments";
    /*proyectos*/


    document.getElementById("proyecto_pino").innerHTML = "Platform game";
    document.getElementById("proyecto_rockquiz").innerHTML = "Music, puzzle & quiz game";
    document.getElementById("proyecto_spacewars").innerHTML = "Shoot'em up game";
    document.getElementById("proyecto_mostrimaker").innerHTML = "Global Game Jam 2024 game";
    document.getElementById("proyecto_futumag").innerHTML = "Digital magazine about design and technology";
    document.getElementById("proyecto_wesound").innerHTML = "Social network for collab music production";
    document.getElementById("proyecto_pirogram").innerHTML = "Visual identity for design studio";
    document.getElementById("proyecto_seal").innerHTML = "ID, prints & web";
    document.getElementById("proyecto_bienal").innerHTML = "Animation and original music";
    document.getElementById("proyecto_rpggame").innerHTML = "RPG Maker MV test game";
    document.getElementById("proyecto_musicalexperiments").innerHTML = "Collection of original compositions ";
    document.getElementById("proyecto_weather").innerHTML = "Website to check the weather";

    for (let i = 0; i < links.length; i++) {
        links[i].innerHTML = "> Link to project";
    }

    for (let i = 0; i < projectHeaders.length; i++) {
        // Obtén el contenido actual del elemento
        let currentContent = projectHeaders[i].innerHTML;

        // Realiza los reemplazos necesarios
        let updatedContent = currentContent.replace(/Diseño/g, "Design")
            .replace(/Desarrollo/g, "Development")
            .replace(/Música/g, "Music");

        // Asigna el nuevo contenido al elemento
        projectHeaders[i].innerHTML = updatedContent;
    }




    /*descargas*/
    document.getElementById("certificates").innerHTML = "📄 Certificates PDF";

    /*contacto*/
    document.getElementById("boton_enviar").value = "Send";
    document.getElementById("form_nombre").placeholder = "Name:";
    document.getElementById("form_mensaje").placeholder = "Message:";
    document.getElementById("foot_text").innerHTML = "This website was created as a final project for Ticmas Academy's Front-end Web Development course.";

}

document.getElementById("es").onclick = function () {
    /*hero*/
    document.getElementById("hhero").innerHTML = "Diseño de Comunicación Visual<br>> Desarrollo Web y Videojuegos";
    /*navbar y títulos*/
    document.getElementById("nav_inicio").innerHTML = "Inicio";
    document.getElementById("nav_experiencia").innerHTML = "Experiencia";
    document.getElementById("nav_habilidades").innerHTML = "Habilidades";
    document.getElementById("nav_proyectos").innerHTML = "Proyectos";
    document.getElementById("nav_contacto").innerHTML = "Contacto";
    document.getElementById("nav_downloads").innerHTML = "Descargas";
    document.getElementById("title_experiencia").innerHTML = "Experiencia";
    document.getElementById("title_habilidades").innerHTML = "Habilidades";
    document.getElementById("title_proyectos").innerHTML = "Proyectos realizados";
    document.getElementById("title_datos").innerHTML = "Contacto";
    document.getElementById("title_downloads").innerHTML = "Descargas";

    /*experiencia*/
    document.getElementById("exp_academica").innerHTML = "ACADÉMICA";
    document.getElementById("exp_cursos").innerHTML = "CURSOS";
    document.getElementById("exp_laboral").innerHTML = "LABORAL";
    document.getElementById("exp_universidad").innerHTML = "<i>Licenciatura en Diseño de Comunicación Visual.</i> Carrera de grado. Universidad Nacional del Litoral. Facultad de Arquitectura, Diseño y Urbanismo.</p>";
    document.getElementById("exp_argentina").innerHTML = "■ Curso #SeProgramar (INTI)<br>■ Desarrollo Front-end (Ticmas)<br>■ Desarrollo de aplicaciones Android (Ticmas)<br>■ Desarrollo Front-end (Educado en Argentina)<br>■ Inglés Nivel 8 B1.2 MCER (CUI-UBA)";
    document.getElementById("exp_motion_title").innerHTML = "Curso de Posgrado FADU UNL";
    document.getElementById("exp_motion").innerHTML = "Motion Graphics Design: Del diseño gráfico al diseño en movimiento.";
    document.getElementById("exp_fusa").innerHTML = "Diseño gráfico independiente para medios digitales e impresos.";
    document.getElementById("exp_seal").innerHTML = "Administración y facturación en industria de productos plásticos.";
    document.getElementById("exp_zona").innerHTML = "Ventas y servicio técnico de videojuegos e informática.";
    document.getElementById("exp_codoacodo").innerHTML = "Full Stack Desarrollo Web - Node.JS";
    document.getElementById("exp_pixi").innerHTML = "Desarrollo de videojuegos con Pixi.JS";
    document.getElementById("exp_react").innerHTML = "Desarrollo de aplicaciones con React y React Native";

    /*habilidades*/
    document.getElementById("hab_desarrollo").innerHTML = "DESARROLLO";
    document.getElementById("hab_diseño").innerHTML = "DISEÑO";
    document.getElementById("hab_musica").innerHTML = "MÚSICA";
    document.getElementById("hab_identidadvisual").innerHTML = "Identidad visual";
    document.getElementById("hab_diseñowebyapps").innerHTML = "Diseño web y apps";
    document.getElementById("hab_interfazdeusuario").innerHTML = "Interfaz de usuario";
    document.getElementById("hab_diseñodeinformacion").innerHTML = "Diseño de información";
    document.getElementById("hab_diseñoeditorial").innerHTML = "Diseño editorial";
    document.getElementById("hab_musicaoriginal").innerHTML = "Música original";
    document.getElementById("hab_efectosdesonido").innerHTML = "Efectos de sonido";
    document.getElementById("hab_sintetizadores").innerHTML = "Sintetizadores";
    document.getElementById("hab_guitarra").innerHTML = "Guitarra";
    document.getElementById("hab_vst").innerHTML = "Instrumentos virtuales VST";

    /*descargas*/
    document.getElementById("certificates").innerHTML = "📄 Certificados PDF";

    /*proyectos*/
    document.getElementById("proyecto_pino").innerHTML = "Videojuego de plataformas";
    document.getElementById("proyecto_rockquiz").innerHTML = "Videojuego de música, puzzle y quiz";
    document.getElementById("proyecto_spacewars").innerHTML = "Videojuego shoot'em up";
    document.getElementById("proyecto_mostrimaker").innerHTML = "Juego para la Global Game Jam 2024";
    document.getElementById("proyecto_futumag").innerHTML = "Magazine digital sobre diseño y tecnología";
    document.getElementById("proyecto_wesound").innerHTML = "Red social de producción musical colaborativa";
    document.getElementById("proyecto_pirogram").innerHTML = "Identidad visual para estudio de diseño";
    document.getElementById("proyecto_rpggame").innerHTML = "Juego de prueba en RPG Maker MV";
    document.getElementById("proyecto_seal").innerHTML = "Identidad, impresos y web";
    document.getElementById("proyecto_musicalexperiments").innerHTML = "Colección de composiciones originales";
    document.getElementById("proyecto_bienal").innerHTML = "Animación y música original";
    document.getElementById("proyecto_weather").innerHTML = "Sitio web para consultar el clima";
    for (let i = 0; i < links.length; i++) {
        links[i].innerHTML = "> Enlace al proyecto";
    }
    for (let i = 0; i < projectHeaders.length; i++) {
        // Obtén el contenido actual del elemento
        let currentContent = projectHeaders[i].innerHTML;

        // Realiza los reemplazos necesarios
        let updatedContent = currentContent.replace(/Design/g, "Diseño")
            .replace(/Development/g, "Desarrollo")
            .replace(/Music/g, "Música");

        // Asigna el nuevo contenido al elemento
        projectHeaders[i].innerHTML = updatedContent;
    }



    /*contacto*/
    document.getElementById("boton_enviar").value = "Enviar";
    document.getElementById("form_nombre").placeholder = "Nombre:";
    document.getElementById("form_mensaje").placeholder = "Mensaje:";
    document.getElementById("foot_text").innerHTML = "Este sitio web fue creado como proyecto final para el curso de Desarrollo Web Front-end de Ticmas Academy.";



}

let check = document.querySelector('#check');

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
document.getElementById("nav_downloads").onclick = function () {
    check.checked = false;
}