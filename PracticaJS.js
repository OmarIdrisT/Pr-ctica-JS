let numeroRandom = Math.floor(Math.random()*100000);
let numeroUsuari = document.getElementById("numero");
let numeroUsuariChain = numeroUsuari.split("");
let numeroRandomChain = numeroRandom.split("");
let 

let tries = 0;
let aciertos = 0;

function numblejs() {

        if (tries < 5 || numeroUsuari != numeroRandom) {

            for (let i = 0; i < 5; i++) {

                const newdiv = document.createElement("div");
                newdiv.className = "newdiv";
                document.getElementById("intentos").appendChild(newdiv);
                let mensaje = document.getElementById("mensaje");

                newdiv.innerHTML = numeroUsuariChain[i]    

                if (numeroUsuariChain[i] == numeroRandomChain[i]) {
                        document.getElementsByClassName("newdiv").style.backgroundColor = "green";
                        aciertos++
                }
                else {
                        for (let j = 0; j < 5, j++) {
                                if (numeroUsuariChain[i] == numeroRandomChain[j]) {
                                        document.getElementsByClassName("newdiv").style.backgroundColor = "yellow";
                                }
                        }
                }
            } 
            tries++
            document.getElementById("numero").value = "";    

            if (aciertos == 5) {
                    mensaje.innerHTML = "Has acertado!";
                    document.getElementById("mensaje").style.backgroundColor = "green";
            }
            else {    
                    switch (tries) {
                        case 1: {
                            mensaje.innerHTML = "Segundo intento, suerte!";
                            break
                        }
                        case 2: {
                            mensaje.innerHTML = "Tercer intento, suerte!";
                            break
                        } 
                        case 3: {
                            mensaje.innerHTML = "Cuidado, te quedan sólo 2 intentos.";
                            break
                        }
                        case 4: {
                            mensaje.innerHTML = "Último intento...";
                            break
                        }
                        case 5: {
                            mensaje.innerHTML = "Ya no te quedan intentos...";
                            break
                        }    
                    }
         }
}
