
function aleatorio (min,max) {
    return Math.floor(Math.random()* (max-min+1)+ min)
}

let jugador = 0
let pc = 0
let derrotas = 0
let victorias = 0
let empate = 0

// lista de resultados
let opcionesJugador = ["Elegiste piedra 🗻","Elegiste papel 🧻","Elegiste tijera ✂"]
let opcionesPc = ["El PC eligio piedra 🗻","El PC eligio papel 🧻","El PC eligio tijera ✂"]

// 1 piedra, 2 papel, 3 tijera
while (victorias < 3 && derrotas < 3) {
    
    pc = aleatorio(1,3)

   jugador = prompt ("Elige entre: 1 piedra 🗻, 2 papel 🧻, 3 tijera ✂")

    //respuestas del navegador
   if (jugador == 1  || jugador == 2  || jugador == 3 ) {
        alert(opcionesJugador[jugador-1])
        alert(opcionesPc[pc-1])
    } else {
        alert("elegistes: PERDER 💣")
        alert(opcionesPc[pc-1])
    }
    // escenarios posibles
        if (jugador == pc) {
        alert("EMPATE ⚔")
        empate++
    } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2){
        alert("Ganaste 🏆")
        victorias++
    } else {
        alert("PERDISTE 💀")
        derrotas++
    }
}
alert("Ganastes: "+ victorias +" veces, perdistes: "+ derrotas +" veces y empataste: "+empate+" veces")
