function abrirNav() {
    document.getElementById("navegación lateral").style.width = "250px"; 
    document.getElementById("main").style.marginLeft = "250px"; 
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    

}
    
function cerrarNav() {
    document.getElementById("navegación lateral").style.width = "0"; 
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundcolor = "white";
    
}