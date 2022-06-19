1 - Instalar NPM
2 - Instalar Dependencias de Desarrrollo con npm install
3 - Copiar Archivo Gulpfile.js
4 - Crear sripts basico con la siguiente codigo

document.addEventListener('DOMContentLoaded',function(){
    console.log("Cargó a pagina")
    eventListeners();
    
})

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', mobileMenuClick)
};