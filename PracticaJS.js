let numeroRandom = Math.floor(Math.random()*100000);
let numeroUsuari = document.getElementById("numero");
let tries = 0;

function numblejs() {

        if (tries < 5 || numeroUsuari != numeroRandom) {

            for (let i = 0; i < 5; i++) {

                const newdiv = document.createElement("div");
                newdiv.className = "newdiv";
                document.getElementById("intentos").appendChild(newdiv);
                let mensaje = document.getElementById("mensaje");
            }
            tries++

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
                    mensaje.innerHTML = "Ya no te quedan intentos";
                    break
                }    
            }
        }
}