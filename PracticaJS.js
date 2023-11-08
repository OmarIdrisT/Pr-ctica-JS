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
                setTimeout (function () {
                    const newdiv = document.createElement("div");
                    newdiv.className = "newdiv";
                    newdiv.style.width = "50px";
                    newdiv.style.height = "50px";
                    newdiv.style.transition = "width 0.5s, height 0.5s";
                    setTimeout (function () {
                        newdiv.style.width = "100px";
                        newdiv.style.height = "100px";
                        }, 19);
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
                }, i * 300);
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
                document.getElementById("gif").style.width = "550px";
                document.getElementById("gif").style.height = "400px";
                document.getElementById("gif").appendChild(gifVictoria);
                const resultat = document.getElementsByClassName("numero_pantalla");
                for (let k = 0; k < 5; k ++) {
                    resultat[k].innerHTML = numeroRandomChain[k];
                }
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
                    document.getElementById("gif").style.width = "550px";
                    document.getElementById("gif").style.height = "400px";
                    let gifDerrota = document.createElement("img");
                    gifDerrota.src="ataud.gif";
                    document.getElementById("gif").appendChild(gifDerrota);
                    break;
                }  
            }  
        }
}

