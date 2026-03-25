function mostrarpag(id){
    let paginas = document.querySelectorAll(".pgs");
    
    paginas.forEach(pgs => {
        pgs.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

mostrarpag("inicio");