function cargarEvaluacion(id , indicadorActual){//pasarle correoo y curso para guardar en evaluacionesXusuario
//peticion de datos registrarlo en usuarios x evaluaciones y traer el id para despues update la calificacion
    let correo = localStorage.getItem('correo');
    fetch(`/evaluacion/cargar/${id}/${correo}`)
    .then(response => response.json())
    .then(data => {
     //procesamiento respuesta
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
     const f= new Date(data.fecha);
     const div = document.getElementById('visualizar_unidades');
     div.innerHTML = `<h1>${data.evaluacion[0].nombre}</h1>
                        <h4>fecha de realizacion: ${f.toLocaleDateString('es-Es', options)}</h4>
                        <p>${data.evaluacion[0].enunciado}</p>`;
     div.innerHTML += renderizarPreguntas( data.preguntas ) ;
     div.innerHTML += `<button id="enviarEvaluacion" value="Enviar" onclick="enviarEvaluacion('${id}', '${indicadorActual}')" title="Enviar las respuestas de la evaluacion">Enviar evaluacion</button>`;
    })
    .catch(error => console.error('Error:', error));
}

function renderizarPreguntas(preguntas){
    let cad='';
    for(let i = 0 ; i < preguntas.length ; i++){
        //para saber si hay imagen
        let imagen = "";
        if(preguntas[i].imagen !== ""){
            imagen = `<img src="${preguntas[i].imagen}" alt="Imagen"/>`;
        }
        //renderiza la pregunta
        if(preguntas[i].tipo === 'Seleccion Multiple'){
            cad += `<div id="pregunta_${i+1}" class="pregunta_seleccion_multiple pregunta">
                        <span>Pregunta No. ${i+1} - ${preguntas[i].tipo} </span>
                        <p>${preguntas[i].enunciado}</p>
                        ${imagen}
                        <input type="radio" id="option1${i+1}" name="${i+1}" value="${preguntas[i].opcion1}">
                        <label for="option1${i+1}">${preguntas[i].opcion1}</label><br>
                        <input type="radio" id="option2${i+1}" name="${i+1}" value="${preguntas[i].opcion2}">
                        <label for="option2${i+1}">${preguntas[i].opcion2}</label><br>
                        <input type="radio" id="option3${i+1}" name="${i+1}" value="${preguntas[i].opcion3}">
                        <label for="option3${i+1}">${preguntas[i].opcion3}</label><br>
                        <input type="radio" id="option4${i+1}" name="${i+1}" value="${preguntas[i].opcion4}">
                        <label for="option4${i+1}">${preguntas[i].opcion4}</label><br>
                    </div>`;
        }else if(preguntas[i].tipo === 'Falso Verdadero'){
            cad += `<div id="pregunta_${i+1}" class="pregunta_falso_verdadero pregunta">
                        <span>Pregunta No. ${i+1} - ${preguntas[i].tipo} </span>
                        <p>${preguntas[i].enunciado}</p>
                        ${imagen}
                        <input type="radio" id="option1${i+1}" name="${i+1}" value="${preguntas[i].opcion1}">
                        <label for="option1${i+1}">${preguntas[i].opcion1}</label><br>
                        <input type="radio" id="option2${i+1}" name="${i+1}" value="${preguntas[i].opcion2}">
                        <label for="option2${i+1}">${preguntas[i].opcion2}</label><br>
                    </div>`;
        }else if(preguntas[i].tipo === 'Ordene'){
            let palabras = preguntas[i].opcion1.split(' ').sort();
            let botones = "";
            for(let x = 0 ; x<palabras.length ; x++){
                botones += `<button value="palabras_${i+1}" onclick="cambiarSeccion(this,'${i+1}')">${palabras[x]}</button>`;
            }
            cad += `<div id="pregunta_${i+1}" class="pregunta_ordene pregunta">
                        <span>Pregunta No. ${i+1} - ${preguntas[i].tipo} </span>
                        <p>${preguntas[i].enunciado}</p>
                        ${imagen}
                        <div id="respuestas_${i+1}" class="ordene_respuestas"></div>
                        <div id="palabras_${i+1}">${botones}</div>
                    </div>`;
        }
    }
    return cad;
}

function enviarEvaluacion(id , indicadorActual){
    alert('');
    //respuesta de ealuacion y pasar al siguiente contenido
}
function cambiarSeccion(boton, numeroPregunta){
    if(boton.value === `palabras_${numeroPregunta}`){
        let div = document.getElementById(`respuestas_${numeroPregunta}`);
        div.innerHTML += `<button value="respuestas_${numeroPregunta}" onclick="cambiarSeccion(this,'${numeroPregunta}')">${boton.innerText}</button>`;
        boton.remove();
    }else{
        let div = document.getElementById(`palabras_${numeroPregunta}`);
        div.innerHTML += `<button value="palabras_${numeroPregunta}" onclick="cambiarSeccion(this,'${numeroPregunta}')">${boton.innerText}</button>`;
        boton.remove();
    }
}