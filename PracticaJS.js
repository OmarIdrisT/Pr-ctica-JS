let numeroRandom = Math.floor(Math.random()*100000);
let numeroRandomChain = numeroRandom.toString().split("");
let mensaje = document.getElementById("mensaje");
let tries = 0;
let aciertos = 0;

function numblejs() {

        if (tries < 5) {
            let numeroUsuari = document.getElementById("numero").value;
            let numeroUsuariChain = numeroUsuari.split("");

            for (let i = 0; i < 5; i++) {

                const newdiv = document.createElement("div");
                newdiv.className = "newdiv";
                document.getElementById("intentos").appendChild(newdiv);
                newdiv.innerHTML = numeroUsuariChain[i];    

                if (numeroUsuariChain[i] == numeroRandomChain[i]) {
                        newdiv.style.backgroundColor = "green";
                        aciertos++;
                }

                else {
                        for (let j = 0; j < 5; j++) {
                                if (numeroUsuariChain[i] === numeroRandomChain[j]) {
                                        newdiv.style.backgroundColor = "yellow";
                                }
                        }
                } 
                switch (tries) {
                    case 1: {
                        mensaje.innerHTML = "Segundo intento, suerte!";
                        break;
                    }
                    case 2: {
                        mensaje.innerHTML = "Tercer intento, suerte!";
                        break;
                    } 
                    case 3: {
                        mensaje.innerHTML = "Cuidado, te quedan sólo 2 intentos.";
                        break;
                    }
                    case 4: {
                        mensaje.innerHTML = "Último intento...";
                        break;
                    }
                    case 5: {
                        mensaje.innerHTML = "Ya no te quedan intentos...";
                        break;
                    }    
                }
            } 
        }
        
        tries++;
        document.getElementById("numero").value = "";    

        if (aciertos === 5) {
                mensaje.innerHTML = "Has acertado!";
                mensaje.style.backgroundColor = "green";
                tries = 5;
        }
}
