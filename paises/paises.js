function paises(){
    var paises = parseFloat(document.getElementById('pais').value);

    switch(paises){
        case 1: 
            document.getElementById('Resultado').value = 'Guatemala'
            break;
        case 2:
            document.getElementById('Resultado').value = 'Honduras'
            break;
        case 3:
            document.getElementById('Resultado').value = 'El salvador'
            break;
            case 4:
            document.getElementById('Resultado').value = 'Nicaragua'
            break;
            case 5:
            document.getElementById('Resultado').value = 'Costa Rica'
            break;
        default:
            document.write('no tenemos identificado el lugar');
            break;
    }
}