const datos = require("./pelis.js")


function parsearTerminos(texto){
    const respuesta = {}

    texto.forEach(function (item, ind) {
        if (item.startsWith("--")) {
            const sinGuiones = item.slice(2)
            respuesta[sinGuiones] = texto[ind + 1]
        }
    });

   return respuesta  
}
function filtroAEjecutar(objeto){
    if (objeto.primerTermino == "search"){
      const resultado = datos.filtroSearch(objeto.search)
      return resultado 
    
    }
     else if(objeto.primerTermino == "sort"){
        const resultado = datos.filtroSort(objeto.segundoTermino)
        return resultado
    
    } else if(objeto.primerTermino == "tag"){
        const resultado = datos.filtroTag(objeto.tag)
        return resultado
    } else if (objeto.primerTermino == "no-format") {
        const resultado = datos.noFormat(objeto.primerTermino)
        return resultado
    }
      
    
}

function main() {
    const filtroParseado = parsearTerminos(process.argv.slice(2))
    const resultado = filtroAEjecutar (filtroParseado)
    console.log("Se ha encontrado", resultado)
}

main()
