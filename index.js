let cont = document.getElementById("contenedor")

const copiardatos = () => {
    let codigo = document.getElementById("codigo").value;
    let pila = codigo.match(/\S+/g);
    console.log(pila);

    if(pila[0]==".CODE" && pila[pila.length-1]=="END"){
        console.log("Filtro pasado")
    }else{console.log("No tiene el '.CODE' y/o 'END'")}
}
