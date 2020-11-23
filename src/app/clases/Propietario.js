class Propietario {
    
    obtenerInmuebles(){
        return []
    }
}

const DATOS_INMUEBLES = {nombre : "Andres"}

console.log(DATOS_INMUEBLES)

function suma(n1, n2){
    return n1 + n2
}

export {Propietario, suma as sumaNumeros, DATOS_INMUEBLES}