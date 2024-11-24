-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-11-2024 a las 15:31:54
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `plataforma_ova`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Contenido`
--

CREATE TABLE `Contenido` (
  `id` int(11) NOT NULL,
  `id_unidad` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `link` varchar(500) DEFAULT NULL,
  `orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Contenido`
--

INSERT INTO `Contenido` (`id`, `id_unidad`, `nombre`, `tipo`, `link`, `orden`) VALUES
(6, 1, 'Bienvenida', 'Video', 'https://www.youtube.com/embed/bgYjEBOWTKQ?si=vcHVFwyFSPUoGyg7', 0),
(7, 2, 'Historia', 'Presentacion', 'https://docs.google.com/presentation/d/e/2PACX-1vSaNxnwIHH-6UXS3HMlfVng_Jwug9p8XqjukhMbqnBQpEKexMzzaqzWYHzR1e5wwmlpZNV8feFzwBDk/embed?start=false&loop=false&delayms=3000', 1),
(8, 2, 'Conceptos Basicos', 'Presentacion', 'https://docs.google.com/presentation/d/e/2PACX-1vTxCAS0RPtr66tWtDWiqf7SsEhZvgSkIOUuWShRrm01FXvHkyN8CW6x_JNlS7JeurbrmtxJFhXWIGQF/embed?start=false&loop=false&delayms=3000', 3),
(9, 2, 'Evaluacion Historia y Conceptos', 'Evaluacion', '', 7),
(10, 3, 'Contenido Adicional', 'Video', 'https://www.youtube.com/embed/A3cGMNxRNJ0?si=xt4-ARsTIE0g1xA-', 10),
(11, 2, 'Tipos de Bases de datos', 'Presentacion', 'https://docs.google.com/presentation/d/e/2PACX-1vRCANP8QzJKObRNqQ2s2Mena7FBR_cT9zIN2UuWoanz4DXTPHiwUPk1MjVxzJQze6H_bUMMi65zLz15/embed?start=false&loop=false', 5),
(12, 2, 'Actividad historia', 'Actividad', 'https://wordwall.net/es/embed/a15b3226783f49c6b8bec23f2b041c4f?themeId=49&templateId=10&fontStackId=0', 2),
(13, 2, 'Actividad Conceptos Basicos', 'Actividad', 'https://wordwall.net/es/embed/6e2dc64d25ef43198a366378dbb14a7a?themeId=49&templateId=73&fontStackId=0', 4),
(14, 2, 'Actividad Tipos de Bases de Datos', 'Actividad', 'https://wordwall.net/es/embed/22e6b5af40bc473d94dd547d406466b6?themeId=45&templateId=3&fontStackId=0', 6),
(15, 2, 'Contenido Adicional', 'Video', 'https://www.youtube.com/embed/LmiFNF3ZaLk?si=uxgK7x27ChxvtrsM', 9),
(16, 3, 'Lenguaje (Sintaxis y Semantica)', 'Video', '', 1),
(17, 3, 'Estructura', 'Video', '', 3),
(18, 3, 'Creación de Modelos', 'Video', '', 5),
(19, 3, 'Actividad de modelado', 'Modelado', 'https://docs.google.com/presentation/d/e/2PACX-1vRxDXXZdofdUny9Xg_eohAJ2Nh54OKdyOJ1eWMmlwLglOySeX8AFSOlMcVB1qlaM7WCpK42fCx-0LMn/embed?start=false&loop=false&delayms=3000', 6),
(22, 4, 'Primera Forma Normal', 'Video', '', 1),
(23, 4, 'Segunda Forma Normal', 'Video', '', 3),
(24, 4, 'Tercera Forma Normal', 'Video', '', 5),
(25, 4, 'Actividad Tercera Forma Normal', 'Modelado', 'https://docs.google.com/presentation/d/e/2PACX-1vT2axy8nKK5J7EwMxOQEOzcbjfg1BRXnTHV3beJyY6dIwm-7fHznB2wXIcy4_GCWv8UHlPL_0fi3CvR/embed?start=false&loop=false&delayms=3000', 6),
(26, 4, 'Evaluacion Normalizacion', 'Evaluacion', '', 7),
(27, 3, 'Interpretacion', 'Video', NULL, 7),
(28, 3, 'Actividad  de Lenguaje', 'Actividad', NULL, 2),
(29, 3, 'Actividad  de Estructura', 'Modelado', 'https://docs.google.com/presentation/d/e/2PACX-1vRXbZeTzwOivVAb9QwtrjpDMggdODGLpFSeK9QyN7C8eTmpYUn86X3KJS9p1P8yAQJMrK3Q0HR4yrT6/embed?start=false&loop=false&delayms=3000', 4),
(30, 3, 'Actividad  de Interpretacion', 'Actividad', NULL, 8),
(31, 3, 'Evaluacion de Modelado', 'Evaluacion', NULL, 9),
(32, 4, 'Actividad Primera Forma Normal', 'Modelado', 'https://docs.google.com/presentation/d/e/2PACX-1vSqUG8MuHyjGzhXrQFaFO1h9FeJmCAkKkIDlW0oq87-8gRx2aCGv-CrNWZrhOF4JsVm03ReMWAcqzAC/embed?start=false&loop=false&delayms=3000', 2),
(33, 4, 'Actividad Segunda Forma Normal', 'Modelado', 'https://docs.google.com/presentation/d/e/2PACX-1vT2axy8nKK5J7EwMxOQEOzcbjfg1BRXnTHV3beJyY6dIwm-7fHznB2wXIcy4_GCWv8UHlPL_0fi3CvR/embed?start=false&loop=false&delayms=3000', 4),
(34, 5, 'Conceptos', 'Presentacion', 'https://docs.google.com/presentation/d/e/2PACX-1vSp2QObEcZ3zVyyElJFShsd3aMWycqEjF0KBARVwKrSL3s9CaMCPYbOxmJwv0kubcUb7FAcbTyY_2Y2/embed?start=false&loop=false&delayms=3000', 1),
(35, 5, 'Actividad Conceptos', 'Actividad', 'https://es.educaplay.com/juego/21088699-crucigrama_sobre_sql.html', 2),
(36, 5, 'Palabras claves', 'Presentacion', 'https://docs.google.com/presentation/d/e/2PACX-1vRaBm7MrKShlW4iqVoldECMGzfCqeU6UX-YT8zyHMZptbqfWf0CSRzXj_yUQMwBSYDi_avlLI63x1Cs/embed?start=false&loop=false&delayms=3000', 3),
(37, 5, 'Actividad Palabras claves', 'Actividad', 'https://es.educaplay.com/juego/21088122-juego_de_parejas_palabras_claves_sql.html', 4),
(38, 5, 'Estructura', 'Video', '', 5),
(39, 5, 'Actividad Estructura', 'Actividad', 'https://es.educaplay.com/juego/21088225-juego_de_desencriptar_consultas_sql.html', 6),
(40, 5, 'Evaluacion Lenguaje SQL', 'Evaluacion', '', 7),
(41, 6, 'Insercion SQL', 'Video', NULL, 1),
(42, 6, 'Ejercicios Insercion SQL', 'Evaluacion', NULL, 2),
(43, 6, 'Actualizacion SQL', 'Video', NULL, 3),
(44, 6, 'Ejercicios Actualizacion SQL', 'Evaluacion', NULL, 4),
(45, 6, 'Eliminacion SQL', 'Video', NULL, 5),
(46, 6, 'Ejercicios Eliminacion SQL', 'Evaluacion', NULL, 6),
(47, 6, 'Consultas SQL', 'Video', NULL, 7),
(48, 6, 'Ejercicios Consultas SQL', 'Evaluacion', NULL, 8),
(49, 6, 'Evaluacion SQL', 'Evaluacion', NULL, 9),
(50, 7, 'Evaluacion Final', 'Evaluacion', NULL, 1),
(51, 8, 'Concluciones finales del OVA', 'Video', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ContenidosXusuario`
--

CREATE TABLE `ContenidosXusuario` (
  `id_contenido` int(11) NOT NULL,
  `correo_usuario` varchar(50) NOT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_finalizacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ContenidosXusuario`
--

INSERT INTO `ContenidosXusuario` (`id_contenido`, `correo_usuario`, `fecha_inicio`, `fecha_finalizacion`) VALUES
(6, 'camilo@correo.com', '2024-10-10 10:05:44', '2024-10-17 08:53:44'),
(7, 'camilo@correo.com', '2024-10-10 10:06:08', NULL),
(9, 'camilo@correo.com', '2024-10-17 09:07:40', '2024-11-12 11:12:45'),
(12, 'camilo@correo.com', '2024-10-26 09:20:33', NULL),
(15, 'camilo@correo.com', '2024-11-12 11:12:45', NULL),
(16, 'camilo@correo.com', '2024-10-21 10:29:50', NULL),
(29, 'camilo@correo.com', '2024-10-21 10:26:03', NULL),
(35, 'camilo@correo.com', '2024-10-30 08:45:09', NULL),
(37, 'camilo@correo.com', '2024-10-30 08:45:18', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Curso`
--

CREATE TABLE `Curso` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `objetivos` varchar(500) DEFAULT NULL,
  `competencias` varchar(500) DEFAULT NULL,
  `prerrequisitos` varchar(500) DEFAULT NULL,
  `estado` varchar(20) NOT NULL,
  `autor` varchar(200) DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Curso`
--

INSERT INTO `Curso` (`id`, `nombre`, `descripcion`, `objetivos`, `competencias`, `prerrequisitos`, `estado`, `autor`, `imagen`) VALUES
(1, 'Bases de datos SQL', '\"Este curso en línea de bases de datos SQL te enseña conceptos esenciales y habilidades prácticas. Aprende a crear, leer, actualizar y eliminar datos en bases de datos relacionales. Domina consultas SQL complejas, estructuras de datos y optimización de rendimiento. ¡Avanza en tu formacion en tecnología con este curso!\"', '1. Adquiere un conocimiento sólido sobre los conceptos básicos de SQL, como la manipulación de datos, el diseño de esquemas y la optimización de consultas.\r\n\r\n2. Desarrolla habilidades prácticas en la creación, modificación y administración de bases de datos SQL utilizando escenarios y herramientas estándar de la industria.\r\n\r\n3. Aprende las mejores prácticas en materia de seguridad de bases de datos, ajuste de rendimiento y integración de datos.', '1. Comprensión de conceptos básicos de bases de datos: modelos de datos, normalización, integridad de datos y teoría de consultas.\r\n\r\n2. SQL: consultas, subconsultas, JOINs, vistas, procedimientos almacenados y transacciones.\r\n\r\n3. Herramientas y entornos de bases de datos: gestión y administración de sistemas de bases de datos, lenguajes de programación y herramientas de desarrollo.', '1. Conocimientos básicos de programación.\r\n2. Conceptos básicos de estructura de datos y algoritmos.\r\n3. Nociones básicas de sistemas operativos y redes.\r\n4. Familiaridad con entornos de desarrollo integrado.', 'Disponible', 'Tom Marvolo Riddle', 'https://cdn-icons-png.flaticon.com/512/11220/11220620.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Evaluacion`
--

CREATE TABLE `Evaluacion` (
  `id` int(11) NOT NULL,
  `id_contenido` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `enunciado` varchar(500) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Evaluacion`
--

INSERT INTO `Evaluacion` (`id`, `id_contenido`, `nombre`, `descripcion`, `enunciado`) VALUES
(6, 9, 'Evaluacion Historia y Conceptos', 'Responda a cada pregunta de acuerdo a la informacion anteriormente planteada', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `EvaluacionesXusuario`
--

CREATE TABLE `EvaluacionesXusuario` (
  `id` int(11) NOT NULL,
  `id_evaluacion` int(11) NOT NULL,
  `correo_usuario` varchar(50) NOT NULL,
  `fecha_realizacion` datetime NOT NULL,
  `calificacion` float NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `EvaluacionesXusuario`
--

INSERT INTO `EvaluacionesXusuario` (`id`, `id_evaluacion`, `correo_usuario`, `fecha_realizacion`, `calificacion`) VALUES
(1, 6, 'camilo@correo.com', '2024-11-13 08:56:03', 0),
(2, 6, 'camilo@correo.com', '2024-11-13 08:56:57', 0),
(3, 6, 'camilo@correo.com', '2024-11-13 08:58:58', 0),
(4, 6, 'camilo@correo.com', '2024-11-13 08:59:45', 0),
(5, 6, 'camilo@correo.com', '2024-11-13 09:05:17', 2.5),
(6, 6, 'camilo@correo.com', '2024-11-23 07:54:26', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Frase`
--

CREATE TABLE `Frase` (
  `id` int(11) NOT NULL,
  `frase` varchar(500) NOT NULL,
  `autor` varchar(100) DEFAULT NULL,
  `imagen` varchar(500) DEFAULT 'https://cdn3d.iconscout.com/3d/premium/thumb/robot-feliz-9580058-7746754.png?f=webp'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Frase`
--

INSERT INTO `Frase` (`id`, `frase`, `autor`, `imagen`) VALUES
(1, 'No importa cuán lento avances, siempre y cuando no te detengas.', '  ', 'https://cdn3d.iconscout.com/3d/premium/thumb/robot-feliz-9580058-7746754.png?f=webp'),
(2, 'Los desafíos son lo que hacen que la vida sea interesante y superarlos es lo que hace que la vida tenga sentido.', '  ', 'https://cdn3d.iconscout.com/3d/premium/thumb/robot-feliz-9580058-7746754.png?f=webp'),
(3, 'El éxito es la suma de pequeños esfuerzos, reiterados día tras día.', 'Robert Collier', 'https://ethiopianbusinessreview.net/wp-content/uploads/2019/10/Robert_Collier.jpg'),
(4, 'No te detengas cuando estés cansado, detente cuando hayas terminado.', 'Omar Bradley', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyOIeENG5ZKvlKox4KfJ083fafMb9iXRn0Q&s'),
(5, 'La vida es como pedalear en bicicleta. Para mantener el equilibrio, debes seguir moviéndote.', 'Albert Einstein', 'https://mitsloanreview.mx/wp-content/uploads/2023/03/los-cinco-secretos-de-liderazgo-de-albert-einstein.jpg'),
(6, 'La lógica te llevará desde A hasta B, la imaginación te llevará a todas partes.', 'Albert Einstein', 'https://mitsloanreview.mx/wp-content/uploads/2023/03/los-cinco-secretos-de-liderazgo-de-albert-einstein.jpg'),
(7, 'El fracaso te prepara para el triunfo. Todo depende de cómo lo afrontes.', 'Zig Ziglar', 'https://chicagoagentmagazine.com/wp-content/uploads/2014/04/zig-ziglar.jpg'),
(8, 'No importa qué tan lento vayas, siempre y cuando no te detengas.', 'Confucio', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPx_WOY3pF8PEQRI8lQ1QuLcozoU5PgWfMvg&s'),
(9, 'La única fuente de conocimiento es la experiencia.', 'Albert Einstein', 'https://mitsloanreview.mx/wp-content/uploads/2023/03/los-cinco-secretos-de-liderazgo-de-albert-einstein.jpg'),
(10, 'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.', 'Albert Schweitzer', 'https://cdn.britannica.com/54/9454-050-D39631E8/Albert-Schweitzer-photograph-Yousuf-Karsh.jpg'),
(11, 'No hay límite para lo que puedes lograr, si no te importa quién reciba el crédito.', 'Franklin D. Roosevelt', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/1200px-FDR_1944_Color_Portrait.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Libro`
--

CREATE TABLE `Libro` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `link` varchar(500) DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL,
  `autor` varchar(200) DEFAULT NULL,
  `anio` int(4) DEFAULT NULL,
  `edicion` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Libro`
--

INSERT INTO `Libro` (`id`, `nombre`, `link`, `imagen`, `autor`, `anio`, `edicion`) VALUES
(1, 'El mundo de Sofía', 'https://docs.google.com/file/d/0B_uMVwwxzrXSNi03XzNwSEJTdkdlMWl4amJUMjNqdw/view?resourcekey=0-Y_3anUox4sfmZonamBgEdA', 'https://images.cdn3.buscalibre.com/fit-in/360x360/41/a6/41a665cae10e456979c5475375eb9f2d.jpg', 'Jostein Gaarder', 1991, 1),
(2, 'Fundamentos de\r\nSQL', 'https://pedrobeltrancanessa-biblioteca.weebly.com/uploads/1/2/4/0/12405072/fundamentos_de_sql_3edi_oppel.pdf', 'https://images.cdn3.buscalibre.com/fit-in/360x360/35/d6/35d63e8709f14bb636187e9e064af302.jpg', NULL, NULL, NULL),
(3, 'Introducción a las Bases de\r\nDatos', 'https://www.udi.edu.co/images/investigaciones/publicaciones/libros/gidsaw/04/UDI_Libro_Bases_de_Datos.pdf', 'https://images.cdn1.buscalibre.com/fit-in/360x360/f0/91/f091d904e8703a83d2dd18449eba9c62.jpg', NULL, NULL, NULL),
(4, 'Héroe en SQL: manual de iniciación', 'https://gc.scalahed.com/recursos/files/r161r/w24262w/CampusMVP.pdf', 'https://0.academia-photos.com/attachment_thumbnails/52317348/mini_magick20190123-12606-1cj3in3.png?1548242706', NULL, NULL, NULL),
(5, 'Conceptos\r\nbásicos de SQL', 'https://openaccess.uoc.edu/bitstream/10609/136026/6/Bases%20de%20datos%20para%20Data%20Warehouse_Modulo%202_Conceptos%20b%C3%A1sicos%20de%20SQL.pdf', 'https://images.cdn2.buscalibre.com/fit-in/360x360/9f/15/9f15bce25824af18422c7d2d3a003af6.jpg', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `LibrosXCurso`
--

CREATE TABLE `LibrosXCurso` (
  `id_curso` int(11) NOT NULL,
  `id_libro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `LibrosXCurso`
--

INSERT INTO `LibrosXCurso` (`id_curso`, `id_libro`) VALUES
(1, 2),
(1, 3),
(1, 4),
(1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pregunta`
--

CREATE TABLE `Pregunta` (
  `id` int(11) NOT NULL,
  `id_evaluacion` int(11) NOT NULL,
  `enunciado` varchar(500) NOT NULL,
  `respuesta` varchar(500) NOT NULL,
  `opcion1` varchar(100) DEFAULT NULL,
  `opcion2` varchar(100) DEFAULT NULL,
  `opcion3` varchar(100) DEFAULT NULL,
  `opcion4` varchar(100) DEFAULT NULL,
  `tema` varchar(100) DEFAULT NULL,
  `tipo` varchar(100) NOT NULL,
  `imagen` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Pregunta`
--

INSERT INTO `Pregunta` (`id`, `id_evaluacion`, `enunciado`, `respuesta`, `opcion1`, `opcion2`, `opcion3`, `opcion4`, `tema`, `tipo`, `imagen`) VALUES
(7, 6, 'quien gano?', 'pepito', 'pepito', 'juanito', 'pablito', 'pedrito', 'test', 'Seleccion Multiple', ''),
(8, 6, 'quien perdio?', 'juanito', 'pepito', 'juanito', 'pablito', 'pedrito', 'test', 'Seleccion Multiple', ''),
(9, 6, 'enunciado de falso verdadero', 'Verdadero', 'Falso', 'Verdadero', '', '', 'test', 'Falso Verdadero', ''),
(10, 6, 'Consultar todos los elementos de la tabla Estudiante ', 'SELECT * FROM Estudiante', 'SELECT * FROM Estudiante', NULL, NULL, NULL, NULL, 'Ordene', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Recurso`
--

CREATE TABLE `Recurso` (
  `id` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `link` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Recurso`
--

INSERT INTO `Recurso` (`id`, `id_curso`, `nombre`, `link`) VALUES
(2, 1, 'Api modelado sql GenMyModel', 'https://app.genmymodel.com/'),
(3, 1, 'XAMPP', 'https://www.apachefriends.org/es/index.html'),
(4, 1, 'Ejercicios de modelado ER', 'http://alimentos.web.unq.edu.ar/wp-content/uploads/sites/87/2018/03/Practica-2-MR.pdf'),
(5, 1, 'Herramienta de diagramas online', 'https://online.visual-paradigm.com/app/diagrams/#diagram:proj=0&type=ERDiagram&width=11&height=8.5&unit=inch');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Unidad`
--

CREATE TABLE `Unidad` (
  `id` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `orden` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Unidad`
--

INSERT INTO `Unidad` (`id`, `id_curso`, `nombre`, `orden`) VALUES
(1, 1, 'Introduccion', 1),
(2, 1, 'Historia y Conceptos', 2),
(3, 1, 'Modelado', 3),
(4, 1, 'Normalizacion', 4),
(5, 1, 'Lenguaje SQL', 5),
(6, 1, 'Consultas', 6),
(7, 1, 'Examen final', 7),
(8, 1, 'Conclusiones', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario`
--

CREATE TABLE `Usuario` (
  `correo` varchar(50) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `rol` varchar(20) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `ultima_sesion` datetime DEFAULT current_timestamp(),
  `creacion_cuenta` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Usuario`
--

INSERT INTO `Usuario` (`correo`, `nombre`, `rol`, `contrasena`, `ultima_sesion`, `creacion_cuenta`) VALUES
('camilo@correo.com', 'camilo', 'estudiante', '0000', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('pepe@correo.com', 'pepe', 'estudiante', '1111', '2024-10-16 09:56:16', '2024-10-16 09:56:16'),
('tutor@correo.com', 'eduardo', 'tutor', '0000', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `UsuariosXCurso`
--

CREATE TABLE `UsuariosXCurso` (
  `id_curso` int(11) NOT NULL,
  `correo_usuario` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `UsuariosXCurso`
--

INSERT INTO `UsuariosXCurso` (`id_curso`, `correo_usuario`) VALUES
(1, 'camilo@correo.com'),
(1, 'pepe@correo.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Contenido`
--
ALTER TABLE `Contenido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Contenido_ibfk_1` (`id_unidad`);

--
-- Indices de la tabla `ContenidosXusuario`
--
ALTER TABLE `ContenidosXusuario`
  ADD PRIMARY KEY (`id_contenido`,`correo_usuario`);

--
-- Indices de la tabla `Curso`
--
ALTER TABLE `Curso`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Evaluacion`
--
ALTER TABLE `Evaluacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_contenido` (`id_contenido`);

--
-- Indices de la tabla `EvaluacionesXusuario`
--
ALTER TABLE `EvaluacionesXusuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `EvaluacionesXusuario_ibfk_2` (`correo_usuario`);

--
-- Indices de la tabla `Frase`
--
ALTER TABLE `Frase`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Libro`
--
ALTER TABLE `Libro`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `LibrosXCurso`
--
ALTER TABLE `LibrosXCurso`
  ADD PRIMARY KEY (`id_curso`,`id_libro`),
  ADD KEY `id_libro` (`id_libro`);

--
-- Indices de la tabla `Pregunta`
--
ALTER TABLE `Pregunta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_evaluacion` (`id_evaluacion`);

--
-- Indices de la tabla `Recurso`
--
ALTER TABLE `Recurso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_curso` (`id_curso`);

--
-- Indices de la tabla `Unidad`
--
ALTER TABLE `Unidad`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_curso` (`id_curso`);

--
-- Indices de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`correo`);

--
-- Indices de la tabla `UsuariosXCurso`
--
ALTER TABLE `UsuariosXCurso`
  ADD PRIMARY KEY (`id_curso`,`correo_usuario`),
  ADD KEY `correo_usuario` (`correo_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Contenido`
--
ALTER TABLE `Contenido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `Curso`
--
ALTER TABLE `Curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Evaluacion`
--
ALTER TABLE `Evaluacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `EvaluacionesXusuario`
--
ALTER TABLE `EvaluacionesXusuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `Frase`
--
ALTER TABLE `Frase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `Libro`
--
ALTER TABLE `Libro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `Pregunta`
--
ALTER TABLE `Pregunta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `Recurso`
--
ALTER TABLE `Recurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `Unidad`
--
ALTER TABLE `Unidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Contenido`
--
ALTER TABLE `Contenido`
  ADD CONSTRAINT `Contenido_ibfk_1` FOREIGN KEY (`id_unidad`) REFERENCES `Unidad` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Evaluacion`
--
ALTER TABLE `Evaluacion`
  ADD CONSTRAINT `Evaluacion_ibfk_1` FOREIGN KEY (`id_contenido`) REFERENCES `Contenido` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `EvaluacionesXusuario`
--
ALTER TABLE `EvaluacionesXusuario`
  ADD CONSTRAINT `EvaluacionesXusuario_ibfk_1` FOREIGN KEY (`id_evaluacion`) REFERENCES `Evaluacion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `EvaluacionesXusuario_ibfk_2` FOREIGN KEY (`correo_usuario`) REFERENCES `Usuario` (`correo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `LibrosXCurso`
--
ALTER TABLE `LibrosXCurso`
  ADD CONSTRAINT `LibrosXCurso_ibfk_1` FOREIGN KEY (`id_libro`) REFERENCES `Libro` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `LibrosXCurso_ibfk_2` FOREIGN KEY (`id_curso`) REFERENCES `Curso` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `Pregunta`
--
ALTER TABLE `Pregunta`
  ADD CONSTRAINT `Pregunta_ibfk_1` FOREIGN KEY (`id_evaluacion`) REFERENCES `Evaluacion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Recurso`
--
ALTER TABLE `Recurso`
  ADD CONSTRAINT `Recurso_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `Curso` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `Unidad`
--
ALTER TABLE `Unidad`
  ADD CONSTRAINT `Unidad_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `Curso` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `UsuariosXCurso`
--
ALTER TABLE `UsuariosXCurso`
  ADD CONSTRAINT `UsuariosXCurso_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `Curso` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UsuariosXCurso_ibfk_2` FOREIGN KEY (`correo_usuario`) REFERENCES `Usuario` (`correo`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
