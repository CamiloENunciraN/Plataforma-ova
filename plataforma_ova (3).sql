-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-09-2024 a las 18:52:29
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
  `link` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 'Bases de datos SQL', '\"Este curso en línea de bases de datos SQL te enseña conceptos esenciales y habilidades prácticas. Aprende a crear, leer, actualizar y eliminar datos en bases de datos relacionales. Domina consultas SQL complejas, estructuras de datos y optimización de rendimiento. ¡Avanza en tu formacion en tecnología con este curso!\"', '1. Adquiere un conocimiento sólido sobre los conceptos básicos de SQL, como la manipulación de datos, el diseño de esquemas y la optimización de consultas.\r\n\r\n2. Desarrolla habilidades prácticas en la creación, modificación y administración de bases de datos SQL utilizando escenarios y herramientas estándar de la industria.\r\n\r\n3. Aprende las mejores prácticas en materia de seguridad de bases de datos, ajuste de rendimiento y integración de datos.', '1. Comprensión de conceptos básicos de bases de datos: modelos de datos, normalización, integridad de datos y teoría de consultas.\r\n\r\n2. Maestría en SQL: consultas, subconsultas, JOINs, vistas, procedimientos almacenados y transacciones.\r\n\r\n3. Herramientas y entornos de bases de datos: gestión y administración de sistemas de bases de datos, lenguajes de programación y herramientas de desarrollo.', '1. Conocimientos básicos de programación.\r\n2. Conceptos básicos de estructura de datos y algoritmos.\r\n3. Nociones básicas de sistemas operativos y redes.\r\n4. Familiaridad con entornos de desarrollo integrado.', 'Disponible', 'Tom Marvolo Riddle', 'https://cdn-icons-png.flaticon.com/512/11220/11220620.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Evaluacion`
--

CREATE TABLE `Evaluacion` (
  `id` int(11) NOT NULL,
  `id_contenido` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `EvaluacionesXusuario`
--

CREATE TABLE `EvaluacionesXusuario` (
  `id_evaluacion` int(11) NOT NULL,
  `correo_usuario` varchar(50) NOT NULL,
  `fecha_realizacion` datetime NOT NULL,
  `calificacion` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 'El mundo de Sofía', 'https://docs.google.com/file/d/0B_uMVwwxzrXSNi03XzNwSEJTdkdlMWl4amJUMjNqdw/view?resourcekey=0-Y_3anUox4sfmZonamBgEdA', 'https://images.cdn3.buscalibre.com/fit-in/360x360/41/a6/41a665cae10e456979c5475375eb9f2d.jpg', 'Jostein Gaarder', 1991, 1);

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
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pregunta`
--

CREATE TABLE `Pregunta` (
  `id` int(11) NOT NULL,
  `id_evaluacion` int(11) NOT NULL,
  `enunciado` varchar(500) NOT NULL,
  `respuesta` varchar(500) NOT NULL,
  `tema` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `imagen` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 1, 'recurso de prueba', 'https:aaaaaa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Unidad`
--

CREATE TABLE `Unidad` (
  `id` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `numero` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Unidad`
--

INSERT INTO `Unidad` (`id`, `id_curso`, `nombre`, `numero`) VALUES
(1, 1, 'Introduccion', 1),
(2, 1, 'Historia', 2),
(3, 1, 'Modelado', 3),
(4, 1, 'Normalizacion', 4),
(5, 1, 'Lenguaje SQL', 5),
(6, 1, 'Consultas', 6),
(7, 1, 'Examen final', 7),
(8, 1, 'Conclusiones', 8),
(9, 1, 'Herramientas', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario`
--

CREATE TABLE `Usuario` (
  `correo` varchar(50) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `rol` varchar(20) NOT NULL,
  `contrasena` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Usuario`
--

INSERT INTO `Usuario` (`correo`, `nombre`, `rol`, `contrasena`) VALUES
('camilo@correo.com', NULL, 'estudiante', '0000');

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
  ADD PRIMARY KEY (`id_evaluacion`,`correo_usuario`,`fecha_realizacion`),
  ADD KEY `id_usuario` (`correo_usuario`);

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
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Contenido`
--
ALTER TABLE `Contenido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `Curso`
--
ALTER TABLE `Curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Evaluacion`
--
ALTER TABLE `Evaluacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `Libro`
--
ALTER TABLE `Libro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Pregunta`
--
ALTER TABLE `Pregunta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `Recurso`
--
ALTER TABLE `Recurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  ADD CONSTRAINT `EvaluacionesXusuario_ibfk_1` FOREIGN KEY (`id_evaluacion`) REFERENCES `Evaluacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `EvaluacionesXusuario_ibfk_2` FOREIGN KEY (`correo_usuario`) REFERENCES `Usuario` (`correo`);

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
