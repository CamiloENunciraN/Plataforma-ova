cargar();

function cargar(){
    let usuario = localStorage.getItem('correo').split("@");
    document.getElementById('bienvenida').innerHTML= 'Bienvenido: '+usuario[0];
    document.getElementById('rol').innerHTML = 'Rol: '+localStorage.getItem('rol');
    cargarCurso();
}
//trae la informacion del curso
function cargarCurso(){
    ocultarDiv(document.getElementById('curso'));
    const curso = 'Bases de datos SQL';
    //peticion de datos
    fetch(`/informacion/curso/${curso}`)
  .then(response => response.json())
  .then(data => {
    //procesamiento respuesta
    //console.log(data);
    const div = document.getElementById('curso');
    div.innerHTML = `<div id="curso_tarjeta">
                        <img src="${data.results[0].imagen}" alt="Imagen del curso"/>
                        <h2>${data.results[0].nombre}</h2>
                        <h4 class="disponible">${data.results[0].estado}</h4>
                    </div>
                    <div id="curso_info">
                        <h1>${data.results[0].nombre}</h1><br>
                        <p><span>Descripcion:</span></p><br>
                        <pre>${data.results[0].descripcion}</pre><br>
                        <p><span>Objetivos:</span></p><br>
                        <pre>${data.results[0].objetivos}</pre><br>
                        <p><span>Competencias:</span></p><br>
                        <pre>${data.results[0].competencias}</pre><br>
                        <p><span>Prerrequisitos:</span></p><br>
                        <pre>${data.results[0].prerrequisitos}</pre><br>
                        <p><span>Autor:</span></p><br>
                        <pre>${data.results[0].autor}</pre>
                    </div>`;
  })
  .catch(error => console.error('Error:', error));
}

function cargarBibliografia(){
    ocultarDiv(document.getElementById('bibliografias'));
    const curso = 'Bases de datos SQL';
    //peticion de datos
    fetch(`/bibliografia/curso/${curso}`)
  .then(response => response.json())
  .then(data => {
    //procesamiento respuesta
    //console.log(data);
    const div = document.getElementById('bibliografias');
    div.innerHTML='';
    for(let i=0; i < data.results.length; i++){
        div.innerHTML+= `<div class="libro" title="Ver" onclick=verLibro('${data.results[i].link}')>
                            <div>
                                <img src="${data.results[i].imagen}" alt="Portada"/>
                            </div>
                            <h4>${data.results[i].nombre}</h4>
                         </div>`;
    }
  })
  .catch(error => console.error('Error:', error));
}

function verLibro(link){
    window.open(link, '_blank');
}

function cargarContenido(){
    ocultarDiv(document.getElementById('unidades'));
    const curso = 'Bases de datos SQL';
    //peticion de datos
    fetch(`/contenido/curso/${curso}`)
  .then(response => response.json())
  .then(data => {
    //procesamiento respuesta
    //console.log(data);
    //console.log(obtenerUnidades(data.results));
    let unidades = obtenerUnidades(data.results);
    const div = document.getElementById('listado_unidades');
    div.innerHTML='';
    let cad = `<h1>Unidades</h1>`;
    for (let i = 0; i < unidades.length; i++) {
        let contenido = '';
        //genera una cadena con la lista de contenidos de una unidad
        for (let x = 0; x < data.results.length; x++) {
            if(data.results[x].unidad===unidades[i]){
                contenido +=`<li onclick=verContenido('${data.results[x].link}','${data.results[x].tipo}')>${data.results[x].contenido}</li>`;
            }
        }
        cad += `<details>
                    <summary>${unidades[i]}</summary>
                    <ol>
                        ${contenido}
                    </ol>
                </details>`;
        
    }
    div.innerHTML = cad;
  })
  .catch(error => console.error('Error:', error));
}
//quita las unidades repetidas que vengan en el contenido
function obtenerUnidades(data){
    let uni = [];
    for (let i = 0; i < data.length; i++) {
        if(!uni.includes(data[i].unidad)){
            uni.push(data[i].unidad);
        }
    }
    return uni;
}
//cargar el contenido del contenido xd
function verContenido(link, tipo){
    const div = document.getElementById('visualizar_unidades');
    if(tipo==='Video'){
        div.innerHTML = `<iframe src="${link}" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture; 
                        web-share" referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen></iframe>`;
    }
}
function cargarCalificaciones(){
    const div = document.getElementById('calificaciones');
    let usuario = localStorage.getItem('correo');
    ocultarDiv(div);
    const curso = 'Bases de datos SQL';
    //peticion de datos
    fetch(`/calificaciones/${curso}/${usuario}`)
  .then(response => response.json())
  .then(data => {
    //procesamiento respuesta
    let suma = 0;
    let cont = 0;
    let cad = `<h1>Calificaciones</h1>
                <table>
                    <tr>
                        <th id="tabla_evaluacion">Evaluacion</th>
                        <th id="tabla_fecha">Fecha</th>
                        <th id="tabla_calificacion">Calificacion</th>
                    </tr>`;
    for(let i=0; i < data.results.length; i++){
        let color ='';
        if(data.results[i].calificacion<5){
            color = 'cal_rojo';
        }else if(data.results[i].calificacion>=5 && data.results[i].calificacion<7){
            color = 'cal_amarillo';
        }else{
            color = 'cal_verde';
        }
        cad +=`<tr title="${data.results[i].descripcion}">
                    <td>${data.results[i].nombre}</td>
                    <td>${data.results[i].fecha_realizacion.toLocaleString()}</td>
                    <td><div class="ind_calificacion ${color}">${data.results[i].calificacion}</div></td>
                </tr>`;
        suma += data.results[i].calificacion;
        cont++;
    }
    cad +=`<tr>
                <th colspan="2">Promedio</th>
                <th>${suma/cont}</th>
            </tr>
        </table>`;
    div.innerHTML= cad;
    })
    .catch(error => console.error('Error:', error));
}

function cargarRecursos(){
    const div = document.getElementById('recursos');
    ocultarDiv(div);
    const curso = 'Bases de datos SQL';
    //peticion de datos
    fetch(`/recursos/${curso}`)
  .then(response => response.json())
  .then(data => {
    //procesamiento respuesta
    let cad = `<h1>Recursos</h1>
                <table>
                    <tr>
                        <th id="tabla_nombre_descarga">Nombre</th>
                        <th id="tabla_descarga">Descarga</th>
                    </tr>`;
        for (let i = 0; i < data.results.length; i++) {
        cad +=`<tr title="Click en descarga para obtener el recurso">
                    <td>${data.results[i].nombre}</td>
                    <td><a href="${data.results[i].link}" target="_blank">Descargar</a></td>
                </tr>`;
        }
    cad +=`</table>`;
    div.innerHTML= cad;
    })
    .catch(error => console.error('Error:', error));
}
/*****************************************************************/
//elementos del menu de navegacion al dar click en ellos
/*******************************************************************/
document.getElementById('informacion').addEventListener('click',()=>{
    //traer la info
    cargarCurso();
});
document.getElementById('unidad').addEventListener('click',()=>{
    //traer la info
    cargarContenido();
});
document.getElementById('calificacion').addEventListener('click',()=>{
    //traer la info
    cargarCalificaciones();
});
document.getElementById('recurso').addEventListener('click',()=>{
    //traer la info
    cargarRecursos();
});
document.getElementById('bibliografia').addEventListener('click',()=>{
    //traer la info
    cargarBibliografia();
});

function ocultarDiv(target){
    const elements = document.getElementsByClassName("div_opcion");
    Array.from(elements).forEach((element) => {
      element.style.display = "none";
    });
    target.style.display = 'flex';
}


/********************************************************/
//cerrar sesion - salir
/*********************************************************/
document.getElementById('salir').addEventListener('click',()=>{
    localStorage.removeItem('correo');
    localStorage.removeItem('rol');
    location.href='/';
});