function cargarEvaluacion(id){
//peticion de datos
    fetch(`/evaluacion/cargar/${id}`)
    .then(response => response.json())
    .then(data => {
     //procesamiento respuesta
     console.log(data);
    });
}