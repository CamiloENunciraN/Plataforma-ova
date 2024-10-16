document.getElementById('estudiante').addEventListener('click',()=>{
    //traer la info
    cargarEstudiantes();
});

function cargarEstudiantes(){
    const div = document.getElementById('estudiantes');
    ocultarDiv(div);
    const curso = 'Bases de datos SQL';
    //peticion de datos
    fetch(`/estudiantes/${curso}`)
  .then(response => response.json())
  .then(data => {
    //procesamiento respuesta
    let cad = `<h1>Estudiantes</h1>
                <table>
                    <tr>
                        <th id="tabla_correo">Nombre</th>
                        <th id="tabla_nombre">Correo</th>
                        <th id="tabla_fechaC">Creacion Cuenta</th>
                        <th id="tabla_fechaS">Ultima Sesion</th>
                    </tr>`;
    for(let i=0; i < data.results.length; i++){
        let fechac = new Date( data.results[i].creacion_cuenta) ;
        let fechas = new Date( data.results[i].ultima_sesion) ;
        cad +=`<tr>
                    <td  onclick="cargarDatosEstudiante('${data.results[i].correo}', '${data.results[i].nombre}' , '${fechac.toLocaleDateString()}', '${fechas.toLocaleDateString()}')" class="link" title="Ver informacion del estudiante.">${data.results[i].nombre}</td>
                    <td>${data.results[i].correo}</td>
                    <td>${fechac.toLocaleDateString()}</td>
                    <td>${fechas.toLocaleDateString()}</td>
                </tr>`;
    }
    cad +=`</table>`;
    div.innerHTML= cad;
    })
    .catch(error => console.error('Error:', error));
}

function cargarDatosEstudiante(correo, nombre, fechac, fechas){
    const div = document.getElementById('estudiantes');
    const curso = 'Bases de datos SQL';
    //peticion de datos
    fetch(`/estudiante/${curso}/${correo}`)
  .then(response => response.json())
  .then(data => {
    //procesamiento respuesta
    let cad = `<h1>Seguimiento Estudiante</h1>
                <table>
                    <tr>
                        <th id="tabla_correo">Nombre</th>
                        <th id="tabla_nombre">Correo</th>
                        <th id="tabla_fechaC">Creacion Cuenta</th>
                        <th id="tabla_fechaS">Ultima Sesion</th>
                    </tr>
                    <tr>
                        <td>${nombre}</td>
                        <td>${correo}</td>
                        <td>${fechac}</td>
                        <td>${fechas}</td>
                    </tr>
                </table>
                <h1>Contenidos</h1>
                <table>
                    <tr>
                        <th id="tabla_correo">Contenido</th>
                        <th id="tabla_nombre">Tipo</th>
                        <th id="tabla_fechaC">Fecha inicio</th>
                        <th id="tabla_fechaS">Fecha finalizacion</th>
                    </tr>`;
    for(let i=0; i < data.results.length; i++){
        let fechai = new Date( data.results[i].fecha_inicio) ;
        let fechaf = new Date( data.results[i].fecha_finalizacion) ;
        cad +=`<tr>
                    <td>${data.results[i].nombre}</td>
                    <td>${data.results[i].tipo}</td>
                    <td>${fechai.toLocaleDateString()}</td>
                    <td>${fechaf.toLocaleDateString()}</td>
                </tr>`;
    }
    cad +=`</table>`;
    div.innerHTML= cad;
    cargarEvaluacionesEstudiante(correo);
    })
    .catch(error => console.error('Error:', error));
}

function cargarEvaluacionesEstudiante(correo){
    const div = document.getElementById('estudiantes');
    const curso = 'Bases de datos SQL';
    //peticion de datos
    fetch(`/calificaciones/${curso}/${correo}`)
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
    div.innerHTML+= cad;
    })
    .catch(error => console.error('Error:', error));  
}