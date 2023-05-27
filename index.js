import  stringSimilarity from "string-similarity"
import fs from 'fs'


function comparar (palabra, array){
    if (array.length <= 0){
        return true
    }
    let respuesta = true
    for (let ar of array){
        let comparacion = stringSimilarity.compareTwoStrings(palabra,ar)
        // console.log(comparacion)
        if(comparacion >= 0.8){
            return false
        }
    }
    return true
}

function eliminar(array){
    
    let salida = []
    
    for (let key of array ){
        let resultado = comparar(key,salida)
        if (resultado === true){
            salida.push(key.trim())
        }
        
    }

    return salida
    
}


// Test

let datos = fs.readFileSync('./keys.txt','utf-8').split('\n')

let respuesta = eliminar(datos)

console.log(respuesta)
