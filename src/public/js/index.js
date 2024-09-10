




document.getElementById('formIniciarSesion').addEventListener('submit', async (e) => {
    e.preventDefault();
    //inhabilitar boton
      const boton = document.getElementById('ingresar');
      boton.disabled=true;
    //captura form
    const usuario = document.getElementById('usuario');
    const contrasena = document.getElementById('contrasena');
    const rol = document.getElementById('rol');
    const datos = {"usuario":usuario.value,
              "contrasena":contrasena.value,
              "rol":rol.value}
  //envio form
    const response = await fetch('/ingresar', {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {"Content-Type": "application/json",},
    });
    //respuesta
    const data = await response.json();
    //proocesamiento respuesta
    if(data.msg==="Ha ocurrido un error"){
        const notificacion = document.getElementById('notificacion');
        notificacion.innerHTML = data.msg ;
        notificacion.style.backgroundColor = 'red';
        boton.disabled=false;
    }else{
        location.href='/public/html/dashboard.html';
    }
  });