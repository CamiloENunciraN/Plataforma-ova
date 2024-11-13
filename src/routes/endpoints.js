const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("./../configDB/config.db");
const { NEWDATE } = require("mysql/lib/protocol/constants/types");

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

const getContenidoCurso = (request, response) => {
    const curso = request.params.curso;
    connection.query("SELECT u.nombre AS unidad, u.orden, ct.nombre As contenido, ct.id , ct.link , ct.tipo FROM Curso c, Unidad u, Contenido ct WHERE c.id=u.id_curso AND u.id=ct.id_unidad AND c.nombre=? ORDER BY u.orden, ct.orden ASC ",
    [curso], 
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
app.route("/contenido/curso/:curso").get(getContenidoCurso);

const getContenidoInicio = (request, response) => {
    const id = request.params.id;
    const usuario = request.params.usuario;
    const fecha = new Date();
    connection.query("INSERT INTO ContenidosXusuario (id_contenido, correo_usuario, fecha_inicio) VALUES (? , ?, ?)",
    [ id, usuario, fecha], 
    (error, results) => {
        if(error){
            response.status(200).json({'msg':'Ha ocurrido un error'});
        }else{
            response.status(200).json({'msg':'Insercion realizada'});
        }
    });
};
//ruta
app.route("/contenido/inicio/:id/:usuario").get(getContenidoInicio);

const getContenidoFin = (request, response) => {
    const id = request.params.id;
    const usuario = request.params.usuario;
    const fecha = new Date();
    connection.query("UPDATE ContenidosXusuario SET fecha_finalizacion = ? WHERE correo_usuario=? AND id_contenido = ?",
    [fecha, usuario, id, ], 
    (error, results) => {
        if(error){
            response.status(200).json({'msg':'Ha ocurrido un error'});
        }else{
            response.status(200).json({'msg':'Insercion realizada'});
        }
    });
};
//ruta
app.route("/contenido/fin/:id/:usuario").get(getContenidoFin);

const getFrases = (request, response) => {
    connection.query("SELECT * FROM Frase ORDER BY RAND()LIMIT 1;",
    (error, results) => {
        if(error){
            response.status(200).json({'msg':'Ha ocurrido un error'});
        }else{
            response.status(200).json({'msg':'Insercion realizada',
                                        'results':results});
        }
    });
};
//ruta
app.route("/frases").get(getFrases);

const getCalificaciones = (request, response) => {
    const curso = request.params.curso;
    const usuario = request.params.usuario;
    connection.query("SELECT e.nombre, e.descripcion, eu.fecha_realizacion, eu.calificacion FROM EvaluacionesXusuario eu, Evaluacion e, Curso c, Unidad un, Contenido ct, Usuario u WHERE c.id=un.id_curso AND un.id=ct.id_unidad AND ct.id=e.id_contenido AND eu.id_evaluacion=e.id AND c.nombre=? AND u.correo=?",
    [curso,usuario], 
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
app.route("/calificaciones/:curso/:usuario").get(getCalificaciones);

const getEstudiantes = (request, response) => {
    const curso = request.params.curso;
    connection.query("SELECT Usuario.correo, Usuario.nombre, Usuario.creacion_cuenta, Usuario.ultima_sesion FROM Usuario INNER JOIN UsuariosXCurso ON Usuario.correo=UsuariosXCurso.correo_usuario INNER JOIN Curso ON UsuariosXCurso.id_curso=Curso.id WHERE Usuario.rol='estudiante' AND Curso.nombre=? ",
    [curso], 
    (error, results) => {
        if(error){
            console.log(error);
            response.status(200).json({'msg':'Ha ocurrido un error'});
        }else{
            response.status(200).json({'msg':'Busqueda realizada',
                                        'results':results});
        }
    });
};
//ruta
app.route("/estudiantes/:curso").get(getEstudiantes);

const getSeguimientoEstudiante = (request, response) => {
    const curso = request.params.curso;
    const correo = request.params.correo;
    connection.query("SELECT c.nombre, c.tipo, cu.fecha_inicio, cu.fecha_finalizacion FROM Curso INNER JOIN UsuariosXCurso uc ON Curso.id=uc.id_curso  INNER JOIN Usuario u ON uc.correo_usuario=u.correo INNER JOIN ContenidosXusuario cu ON u.correo=cu.correo_usuario INNER JOIN Contenido c ON cu.id_contenido=c.id WHERE Curso.nombre=? AND u.correo=?",
    [curso, correo], 
    (error, results) => {
        if(error){
            console.log(error);
            response.status(200).json({'msg':'Ha ocurrido un error'});
        }else{
            response.status(200).json({'msg':'Busqueda realizada',
                                        'results':results});
        }
    });
};
//ruta
app.route("/estudiante/:curso/:correo").get(getSeguimientoEstudiante);

const getRecursos = (request, response) => {
    const curso = request.params.curso;
    connection.query("SELECT r.nombre, r.link FROM Recurso r, Curso c WHERE c.id=r.id_curso AND c.nombre=?",
    [curso], 
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
app.route("/recursos/:curso").get(getRecursos);

const getEvaluacion = (request, response) => {
    const id_contenido = request.params.id;
    const correo = request.params.correo;
    const fecha =new Date();

    // busca el id de la evaluacion
    connection.query("SELECT id FROM Evaluacion WHERE id_contenido=?",
           [id_contenido], 
           (error, r) => {
               if(error){
                   response.status(200).json({'msg':'Ha ocurrido un error'});
               }else{
                    // inserta la evaluacion
                    connection.query("INSERT INTO EvaluacionesXusuario (id_evaluacion, correo_usuario, fecha_realizacion) VALUES (?,?,?)",
                        [r[0].id,correo,fecha], 
                        (error, res) => {
                            if(error){
                                console.log(error);
                                response.status(200).json({'msg':'Ha ocurrido un error'});
                            }else{

                        connection.query("SELECT LAST_INSERT_ID() AS id",
                        (error, res) => {
                            if(error){
                                console.log(error);
                                response.status(200).json({'msg':'Ha ocurrido un error'});
                            }else{

                                let id_actual_evaluacion = res[0].id;
                                //consulta la evaluacion y preguntas
                                connection.query("SELECT id, nombre, descripcion, enunciado FROM Evaluacion WHERE id_contenido=?",
                                [id_contenido], 
                                (error, results) => {
                                    if(error){
                                        response.status(200).json({'msg':'Ha ocurrido un error'});
                                    }else{
                                        connection.query("SELECT id, enunciado, opcion1, opcion2, opcion3, opcion4, tema, tipo, imagen  FROM Pregunta WHERE id_evaluacion=?",
                                            [results[0].id], 
                                            (error, resultas) => {
                                                if(error){
                                                    response.status(200).json({'msg':'Ha ocurrido un error'});
                                                }else{
                                                    response.status(200).json({'msg':'Busqueda realizada',
                                                                                'evaluacion':results,
                                                                                'preguntas':resultas,
                                                                                'fecha':fecha,
                                                                                'id_actual_evaluacion' : id_actual_evaluacion});
                                                }
                                            });
                                        }
                                    });

                                    }
                                });

                            }
                    });
               }
           });


};
//ruta
app.route("/evaluacion/cargar/:id/:correo").get(getEvaluacion);

const postGuardarEvaluacion = (request, response) => {
    const id = request.params.id;
    const correo = request.params.correo;
    const id_actual_evaluacion = request.params.id_actual_evaluacion;
    const respuestas = request.body;
        connection.query("SELECT p.id_evaluacion, p.id, p.respuesta FROM Pregunta p INNER JOIN Evaluacion e ON e.id = p.id_evaluacion WHERE e.id_contenido = ?",
        [id], 
        (error, results) => {
            if(error){
                console.log(error);
                       response.status(200).json({'msg':'Ha ocurrido un error'});
            }else{
               //calificando la eva
                let correctas = 0;
                let calificacion = 0;
                let numPreguntas = results.length;
                let id_evaluacion = 0;
                results.map(res =>{
                    id_evaluacion = res.id_evaluacion;
                    respuestas.map(respt =>{
                        if(res.id == respt.idPregunta && res.respuesta === respt.resPregunta){
                            correctas ++;
                            return;
                        }
                    });
                });
                //callificacion sobre 10
                calificacion = ((10/numPreguntas)*correctas);
                //guardando los resultados
                connection.query("UPDATE EvaluacionesXusuario SET calificacion = ? WHERE id_evaluacion = ? AND correo_usuario = ? AND id = ?",
                    [calificacion, id_evaluacion, correo, id_actual_evaluacion], 
                    (error, resultas) => {
                        if(error){
                            console.log(error);
                            response.status(200).json({'msg':'Ha ocurrido un error'});
                        }else{
                            response.status(200).json( {'msg': 'Evaluacion calificada', 'correctas': `${correctas}/${numPreguntas}`, 'calificacion': calificacion});
                        }
                    });
            }
        });
}
//ruta
app.route("/evaluacion/guardar/:id/:correo/:id_actual_evaluacion").post(postGuardarEvaluacion);

const postIngresar = (request, response) => {
    const {usuario, contrasena, rol} = request.body;
    connection.query("SELECT nombre, correo, rol FROM Usuario WHERE correo=? AND contrasena=? AND rol=? ", 
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

const postRegistrar = (request, response) => {
    const {nombre, correo, contrasena, curso} = request.body;
    connection.query("INSERT INTO Usuario (nombre, correo, contrasena, rol) VALUES ( ?, ?, ?, ?)", 
    [nombre, correo , contrasena, "estudiante"],
    (error, results) => {
        if(error){
            console.log(error);
            response.status(200).json({'msg':'Ha ocurrido un error'});
        }else{
            if(results.affectedRows===1){
                connection.query("SELECT nombre, correo, rol FROM Usuario WHERE correo= ?", 
                    [correo],
                    (error, resulta) => {
                        if(error){
                            response.status(200).json({'msg':'Ha ocurrido un error'});
                        }else{
                            response.status(200).json({'msg':'Usuario valido',
                                                        'results':resulta});
                        }
                    });
            }else{
                response.status(200).json({'msg':'Ha ocurrido un error'});
            }
        }
        connection.query("INSERT INTO UsuariosXCurso (id_curso, correo_usuario) VALUES (?, ?)", 
            [curso, correo],
            (error, results) => {
                if(error){
                    console.log(results);
                }
        });
    });
};
//ruta
app.route("/registrar").post(postRegistrar);


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



module.exports = app;
