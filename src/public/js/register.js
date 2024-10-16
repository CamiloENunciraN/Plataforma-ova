document.getElementById('formRegistrar').addEventListener('submit', async (e) => {
    e.preventDefault();
    //inhabilitar boton
      const boton = document.getElementById('registrarse');
      boton.disabled=true;
    //captura form
    const nombre = document.getElementById('nombre');
    const usuario = document.getElementById('usuario');
    const contrasena = document.getElementById('contrasena');
    const datos = {"correo":usuario.value,
              "contrasena":contrasena.value,
              "nombre":nombre.value,
                "curso":1}
  //envio form
    const response = await fetch('/registrar', {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {"Content-Type": "application/json",},
    });
    //respuesta
    const data = await response.json();
    console.log(data);
    //proocesamiento respuesta
    if(data.msg==="Ha ocurrido un error"){
        const notificacion = document.getElementById('notificacion');
        notificacion.innerHTML = data.msg ;
        notificacion.style.backgroundColor = 'red';
        boton.disabled=false;
    }else{
    localStorage.setItem('nombre', data.results[0].nombre);
      localStorage.setItem('correo', data.results[0].correo);
      localStorage.setItem('rol', data.results[0].rol);
      location.href='/public/html/dashboard.html';
    }
  });