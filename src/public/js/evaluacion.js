function cargarEvaluacion(id){
//peticion de datos
    fetch(`/evaluacion/cargar/${id}`)
    .then(response => response.json())
    .then(data => {
     //procesamiento respuesta
     console.log(data);
     const div = document.getElementById('visualizar_unidades');
     div.innerHTML = `<h1>${data.evaluacion[0].nombre}</h1>
                        <p>${data.evaluacion[0].descripcion}</p>`;
     div.innerHTML += renderizarPreguntas( data.preguntas ) ;
     div.innerHTML += `<button id="enviarEvaluacion" value="Enviar" onclick="enviarEvaluacion()" title="Enviar las respuestas de la evaluacion">Enviar evaluacion</button>`;
    })
    .catch(error => console.error('Error:', error));
}

function renderizarPreguntas(preguntas){
    let cad='';
    for(let i = 0 ; i < preguntas.length ; i++){
        if(preguntas[i].tipo === 'Seleccion Multiple'){
            cad += `<div id="pregunta_${i+1}" class="pregunta_seleccion_multiple pregunta">
                        <span>Pregunta No. ${i+1} - ${preguntas[i].tipo} </span>
                        <p>${preguntas[i].enunciado}</p>
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
                        <div id="respuestas_${i+1}" class="ordene_respuestas"></div>
                        <div id="palabras_${i+1}">${botones}</div>
                    </div>`;
        }
    }
    return cad;
}

function enviarEvaluacion(){
    alert('');
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
/*
function renderArreglo (array, div) {
	const seccion = document.getElementById(div);
	seccion.innerHTML = '';
	if(array.length === 0 && div === 'respuestas'){
		seccion.innerText = 'Click en la palabra que quieras agregar.';
	}
	for (let i = 0; i < array.length; i++) {
		seccion.innerHTML += `<button value="${div}" onclick="cambiarSeccion(this)">${array[i]}</button>`;
	}
}

function cambiarSeccion(boton){
	if(boton.value === 'palabras'){
		respuestas.push(boton.innerText);
		let indexToRemove = palabras.indexOf(boton.innerText);
		palabras.splice(indexToRemove, 1);
	}else{
		palabras.push(boton.innerText);
		let indexToRemove = respuestas.indexOf(boton.innerText);
		respuestas.splice(indexToRemove, 1);
	}
	renderArreglo(palabras, 'palabras');
	renderArreglo(respuestas, 'respuestas');
}
    */