//dibujo canvas
    var canvas = document.getElementById("miCanvas");
    var ctx = canvas.getContext("2d");
    // Cuerpo del perro
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(100, 200, 200, 100);
    ctx.closePath();

    // Cabeza del perro
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.arc(150, 150, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // Ojos del perro
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(135, 140, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(165, 140, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(135, 140, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(165, 140, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // Nariz del perro
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(150, 170, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // Orejas del perro
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.moveTo(115, 100);
    ctx.lineTo(135, 120);
    ctx.lineTo(145, 90);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.moveTo(185, 100);
    ctx.lineTo(165, 120);
    ctx.lineTo(155, 90);
    ctx.fill();
    ctx.closePath();

    // Patas delanteras del perro
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(110, 300, 30, 50);
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(260, 300, 30, 50);
    ctx.closePath();

    // Patas traseras del perro
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(150, 300, 30, 50);
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(220, 300, 30, 50);
    ctx.closePath();

//elementos de entrada y salida
    let input = document.getElementById("input");
    let ouput;
    let respuesta = document.getElementById("respuesta");
    let mostrar = document.getElementById("mostrar");
    let copia = document.getElementById("copia");    

const letras = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};

//encriptacion
function encripta(){
    ouput = input.value;
    let encontrado;
    let acumular = "";
    for (let i = 0; i < ouput.length; i++) {
        let letra = ouput[i];
        encontrado = false;
        for (const clave in letras) {                
            let valor = letras[clave];
            if(letra === clave){
                encontrado = valor;
            }
        }
        if (encontrado === false){
            acumular += letra;                
        } else{
            acumular += encontrado;
        }
    }
    ouput = acumular;    
    respuesta.innerHTML = ouput
    mostrar.innerHTML = `<p>Su mensaje fue encriptado</p>`;        
    copia.style.opacity = "1";
    respuesta.style.opacity = "1";
}

//desencriptacion
function desencripta(){
    ouput = input.value;
    for (const clave in letras) {
        let valor = letras[clave];            
        if(ouput.indexOf(valor) !== -1){
            ouput = ouput.replace(new RegExp(valor, "g"), clave);
        }
    }       
    respuesta.innerHTML = ouput        
    mostrar.innerHTML = `<p>Su mensaje fue desencriptado</p>`;        
    copia.style.opacity = "1";
    respuesta.style.opacity = "1"
}
function copiar(){
    navigator.clipboard.writeText(ouput)
}
