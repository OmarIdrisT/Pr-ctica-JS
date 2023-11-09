//Generamos el número aleatorio y le aplicamos un "split" para separarlo por dígitos. Además, nos aseguramos de que siempre tenga 5 dígitos, al delimitar el rango de números.
let numeroRandom = Math.floor((Math.random() * (99999 - 10000 + 1)) + 10000);
let numeroRandomChain = numeroRandom.toString().split("");

//Definimos "resultat", de cara a usarlo más adelante para mostrar el número aleatorio generado.
const resultat = document.getElementsByClassName("numero_pantalla");

//Inicializamos las variables "tries" y "aciertos" a 0. Dichas variables actuarán como contadores y definirán el camino que sigue el juego.
let tries = 0;
let aciertos = 0;

function numblejs() {

        //Al principio de la función reiniciamos aciertos, para evitar que los de intentos fallidos se acumulen.
        aciertos = 0;
        //Imponemos que la función sólo actúe si el número de intentos es menor que 5.
        if (tries < 5) {

            //Verificamos que el valor insertado tiene 5 caracteres (en este caso, dígitos) y que estos son números.
            if (document.getElementById("numero").value.length === 5 && !isNaN(document.getElementById("numero").value)) {
                
                //Definimos "numeroUsuariChain" a partir del input, que compararemos con "numeroRandomChain".
                let numeroUsuari = document.getElementById("numero").value;
                let numeroUsuariChain = numeroUsuari.split("");

                //Generamos los nuevos divs donde aparecerán los dígitos del número del input.
                for (let i = 0; i < 5; i++) {

                        const newdiv = document.createElement("div");
                        newdiv.className = "newdiv";
                        document.getElementById("intentos").appendChild(newdiv);
                        newdiv.innerHTML = numeroUsuariChain[i]; 
                
                        //Si en la misma posición tanto el número introducido como el aleatorio tienen el mismo dígito, contaremos un acierto y el recuadro se mostrará verde.        
                        if (numeroUsuariChain[i] === numeroRandomChain[i]) {

                                newdiv.style.backgroundColor = "green";
                                aciertos++;
                        }
                        //Si no, verificamos si el número aleatorio contiene ese dígito en otra posición.        
                        else {
                                for (let j = 0; j < 5; j++) {

                                        if (numeroUsuariChain[i] === numeroRandomChain[j]) {
                                            newdiv.style.backgroundColor = "yellow";
                                        }
                                }
                        } 
                  
                        //Si en un mismo intento se han acertado los 5 números, se mostrarán un mensaje y un gif indicando que hemos ganado.        
                        if (aciertos === 5) {
                            document.getElementById("mensaje").innerHTML = "Has acertado!";
                            document.getElementById("mensaje").style.backgroundColor = "green";
                            let gifVictoria = document.createElement("img");
                            gifVictoria.src="penguinz0-yeah-baby.gif";
                            document.getElementById("gif").style.width = "550px";
                            document.getElementById("gif").style.height = "400px";
                            document.getElementById("gif").appendChild(gifVictoria);
  
                            //Además, mostraremos en la parte superior (sección CODIGO) el número aleatorio que se había generado.            
                            for (let k = 0; k < 5; k ++) {
                                resultat[k].innerHTML = numeroRandomChain[k];
                            }
                
                            //Indicamos que se ha llegado al máximo de intentos para así detener el programa.            
                            tries = 5;
                       }
                }
                    
                //Contamos un intento y reiniciamos el contenido del campo después de cada input.   
                tries++;
                document.getElementById("numero").value = ""; 
            
                //Con un "switch" definimos los distintos mensajes que irán apareciendo mientras se avanza en el juego (sin ganar).    
                switch (tries) {
                    case 1: {
                        document.getElementById("mensaje").innerHTML = "Segundo intento, suerte!";
                        break;
                    }
                    case 2: {
                        document.getElementById("mensaje").innerHTML = "Tercer intento, suerte!";
                        break;
                    } 
                    case 3: {
                        document.getElementById("mensaje").innerHTML = "Cuidado, te quedan sólo 2 intentos.";
                        break;
                    }
                    case 4: {
                        document.getElementById("mensaje").innerHTML = "Último intento...";
                        break;
                    }
                    case 5: {
                        document.getElementById("mensaje").innerHTML = "Ya no te quedan intentos...";
                        document.getElementById("gif").style.width = "550px";
                        document.getElementById("gif").style.height = "400px";
                        let gifDerrota = document.createElement("img");
                        gifDerrota.src="ataud.gif";
                        document.getElementById("gif").appendChild(gifDerrota);

                        //Como en el caso de haber ganado, hacemos que el número aleatorio generado aparezca en la sección CODIGO.    
                        for (let k = 0; k < 5; k ++) {
                            resultat[k].innerHTML = numeroRandomChain[k];
                        }
                        break;
                    }  
                } 
            } 

            //En caso de haber intentado introducir un valor que no cumpla las condiciones impuestas, se nos mostrará este mensaje.
            else {
                document.getElementById("mensaje").innerHTML = "Espabila hombre, que tienes que poner 5 números."
            }
        }
}
