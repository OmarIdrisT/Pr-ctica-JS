let numeroRandom = Math.floor((Math.random() * (99999 - 10000 + 1)) + 10000);
let numeroRandomChain = numeroRandom.toString().split("");
let tries = 0;
console.log(numeroRandom);

function numblejs() {

        let aciertos = 0;

        if (tries < 5) {

            let numeroUsuari = document.getElementById("numero").value;
            numeroUsuari = numeroUsuari.padEnd  (5, "0");
            let numeroUsuariChain = numeroUsuari.split("");
            console.log(numeroUsuari)

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
            }
        } 
        
        tries++;
        document.getElementById("numero").value = "";  

        if (aciertos === 5) {
                tries = 5;
                document.getElementById("mensaje").innerHTML = "Has acertado!";
                document.getElementById("mensaje").style.backgroundColor = "green";
                let gifVictoria = document.createElement("img");
                gifVictoria.src="penguinz0-yeah-baby.gif";
                document.getElementById("gif").appendChild(gifVictoria);
        }

        else {
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
                    let gifDerrota = document.createElement("img");
                    gifDerrota.src="ataud.gif";
                    document.getElementById("gif").appendChild(gifDerrota);
                    break;
                }  
            }  
        }
}

