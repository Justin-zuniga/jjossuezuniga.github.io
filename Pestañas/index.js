function openCity(evt, cityName) {

    var i, pestañacontent, pestañalinks;
    pestañacontent = document.getElementsByClassName("pestañacontent");
    for (i = 0; i < pestañacontent.length; i++) { 
        pestañacontent[1].style.display = "none";
        }
    pestañalinks = document.getElementsByClassName("pestañalinks");
    for (i = 0; i < pestañalinks.length; i++) {
        pestañalinks[i].className = pestañalinks[i].className.replace(" active", "");
    } 
    document.getElementById(cityName).style.display="block"; 
    evt.currentTarget.className += "active";
}