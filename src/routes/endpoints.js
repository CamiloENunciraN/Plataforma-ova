const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("./../configDB/config.db");

const getInfoCurso = (request, response) => {
    const curso = request.params.curso;
    connection.query("SELECT * FROM Curso WHERE nombre=?",[curso], 
    (error, results) => {
        if(error){
            response.status(200).json({'msg':'Ha ocurrido un error'});
        }else{
            response.status(200).json({'msg':'Busqueda realizada',
                                        'results':results});
        }
    });
};
//ruta
app.route("/informacion/curso/:curso").get(getInfoCurso);

const getBibliografiaCurso = (request, response) => {
    const curso = request.params.curso;
    connection.query("SELECT l.nombre, l.link, l.imagen FROM Curso c, LibrosXCurso lxc, Libro l WHERE c.id=lxc.id_curso AND lxc.id_libro=l.id AND c.nombre=?",[curso], 
    (error, results) => {
        if(error){
            response.status(200).json({'msg':'Ha ocurrido un error'});
        }else{
            response.status(200).json({'msg':'Busqueda realizada',
                                        'results':results});
        }
    });
};
//ruta
app.route("/bibliografia/curso/:curso").get(getBibliografiaCurso);

const postIngresar = (request, response) => {
    const {usuario, contrasena, rol} = request.body;
    connection.query("SELECT correo, rol FROM Usuario WHERE correo=? AND contrasena=? AND rol=? ", 
    [usuario, contrasena, rol],
    (error, results) => {
        if(error){
            console.log(error);
            response.status(200).json({'msg':'Ha ocurrido un error'});
        }else{
            if(results.length===1){
                response.status(200).json({'msg':'Usuario valido',
                                            'results':results});
            }else{
                response.status(200).json({'msg':'Ha ocurrido un error'});
            }
        }
    });
};
//ruta
app.route("/ingresar").post(postIngresar);


const delCarta = (request, response) => {
    const id = request.params.id;
    connection.query("Delete from carta where id = ?", 
    [id],
    (error, results) => {
        if(error){
            response.status(200).json({'msg':'Ha ocurrido un error'});
        }else{
            response.status(201).json({'msg':'Item eliminado correctamente',
                                        'results':results.affectedRows});
        }
    });
};
//ruta
app.route("/carta/:id").delete(delCarta);



// Configurar el servidor para enviar actualizaciones a través de SSE
const update = (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  
  let c=0;
  // Enviar actualizaciones cada 5 segundos (ejemplo)
  setInterval(() => {
    res.write(`data: Nueva actualización `+c+`\n\n`); // Enviar la actualización al cliente
    c++;
  }, 5000);
}
//ruta
app.route("/update").get(update);

module.exports = app;
