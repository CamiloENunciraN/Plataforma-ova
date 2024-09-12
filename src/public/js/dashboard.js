cargar();

function cargar(){
    let usuario = localStorage.getItem('correo').split("@");
    document.getElementById('bienvenida').innerHTML= 'Bienvenido '+usuario[0];
    document.getElementById('rol').innerHTML = 'Rol: '+localStorage.getItem('rol');
    cargarCurso();
}
//trae la informacion del curso
function cargarCurso(){
    ocultarDiv(document.getElementById('curso'));
    const curso = 'Bases de datos SQL'
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
    const curso = 'Bases de datos SQL'
    //peticion de datos
    fetch(`/bibliografia/curso/${curso}`)
  .then(response => response.json())
  .then(data => {
    //procesamiento respuesta
    //console.log(data);
    const div = document.getElementById('bibliografias');
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
    alert('on fire');
}

/*****************************************************************/
//elementos del menu de navegacion al dar click en ellos
/*******************************************************************/
document.getElementById('informacion').addEventListener('click',()=>{
    //traer la info
    cargarCurso()
});
document.getElementById('unidad').addEventListener('click',()=>{
    //visualizar el elemento correspondiente
    ocultarDiv(document.getElementById('unidades'));
    //traer la info
});
document.getElementById('bibliografia').addEventListener('click',()=>{
    //traer la info
    cargarBibliografia()
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