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
        cad +=`<tr>
                    <td  onclick="cargarDatosEstudiante('${data.results[i].correo}')" class="link" title="Ver informacion del estudiante.">${data.results[i].nombre}</td>
                    <td>${data.results[i].correo}</td>
                    <td>${data.results[i].creacion_cuenta.toLocaleString()}</td>
                    <td>${data.results[i].ultima_sesion.toLocaleString()}</td>
                </tr>`;
    }
    cad +=`</table>`;
    div.innerHTML= cad;
    })
    .catch(error => console.error('Error:', error));
}

function cargarDatosEstudiante(correo){
    alert(correo);
}