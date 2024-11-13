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
     div.innerHTML += `<button id="enviarEvaluacion" value="Enviar" onclick="enviarEvaluacion('${id}', '${indicadorActual}','${data.id_actual_evaluacion}')" title="Enviar las respuestas de la evaluacion">Enviar evaluacion</button>`;
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
                        <input type="hidden" value="${preguntas[i].id}">
                        <input type="hidden" value="${preguntas[i].tipo}">
                        <span >Pregunta No. ${i+1} - ${preguntas[i].tipo} </span>
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
                        <input type="hidden" value="${preguntas[i].id}">
                        <input type="hidden" value="${preguntas[i].tipo}">
                        <span > Pregunta No. ${i+1} - ${preguntas[i].tipo} </span>
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
                        <input type="hidden" value="${preguntas[i].id}">
                        <input type="hidden" value="${preguntas[i].tipo}">
                        <span >Pregunta No. ${i+1} - ${preguntas[i].tipo} </span>
                        <p>${preguntas[i].enunciado}</p>
                        ${imagen}
                        <div id="respuestas_${i+1}" class="ordene_respuestas"></div>
                        <div id="palabras_${i+1}">${botones}</div>
                    </div>`;
        }
    }
    return cad;
}

async function enviarEvaluacion(id , indicadorActual, id_actual_evaluacion){
   const datas = validarRespuestas();
   let correo = localStorage.getItem('correo');
   if(datas !== null){
        console.log(datas);
        //envio form
        const response = await fetch(`/evaluacion/guardar/${id}/${correo}/${id_actual_evaluacion}`, {
            method: "POST",
            body: JSON.stringify(datas),
            headers: {"Content-Type": "application/json",},
        });
        //respuesta
        const data = await response.json();
        console.log(data);
        //proocesamiento respuesta
        let cad = `<div id="res_evaluacion">
                        <h1>Has completado la evaluacion</h1>
                        <h3>Respuestas Correctas: ${data.correctas}</h3>
                        <h3>Calificacion final: ${data.calificacion}</h3>
                        <p>Puedes presentar de nuevo la evaluacion si quieres mejorar tus conocimientos</p>
                    </div>
                    <button id="terminarContenido" onclick="contenidoCompletado('${id}', '${indicadorActual}')" > Contenido Completado</button>`;
        document.getElementById("visualizar_unidades").innerHTML = cad ;
   }
}

function validarRespuestas(){
    const datas = [];
        const preguntas = document.getElementsByClassName(`pregunta`);
        for (let i = 0; i < preguntas.length; i++) {
            let pregunta = preguntas[i];
            let preInput = pregunta.getElementsByTagName('input');
            let preguntaId = preInput[0].value;
            let preguntaTipo = preInput[1].value;
            let preguntaRespuesta = "";
            if(preguntaTipo==='Ordene'){
                res = document.getElementById(`respuestas_${i+1}`);
                if(res.innerHTML===""){
                   alert(`No se ha respondido a la pregunta ${i+1}` ); 
                   return null;
                   break;
                }
                let botones = res.getElementsByTagName('button');
                let cad = "";
                for (let f = 0; f < botones.length; f++) {
                    cad +=botones[f].innerHTML+" ";
                }
                preguntaRespuesta = cad;
            }else if(preguntaTipo === 'Seleccion Multiple' || preguntaTipo === 'Falso Verdadero'){
                let checkboxes = pregunta.getElementsByTagName('input');
                let isChecked = false;
                for (let f = 0; f < checkboxes.length; f++) {
                    if (checkboxes[f].checked) {
                        isChecked = true;
                        preguntaRespuesta = checkboxes[f].value;
                        break;
                    }
                }
                if(!isChecked){
                    alert(`No se ha respondido a la pregunta ${i+1}` ); 
                    return null;
                    break;
                 }
            }
            datas.push({'idPregunta': preguntaId, 'resPregunta' : preguntaRespuesta});
        }
    return datas;
}

//funcion para las preguntas de ordenamiento de palabras
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