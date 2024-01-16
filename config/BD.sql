-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-06-2023 a las 04:48:16
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `generador de crud(test2)`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id` int(11) NOT NULL,
  `id_tipo_permiso` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_recurso` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id`, `id_tipo_permiso`, `id_usuario`, `id_recurso`, `createdAt`, `updatedAt`) VALUES
(62, 2, 9, 64, '2023-06-18 02:02:26', '2023-06-18 02:02:26'),
(63, 3, 9, 64, '2023-06-18 02:02:26', '2023-06-18 02:02:26'),
(64, 4, 9, 64, '2023-06-18 02:02:26', '2023-06-18 02:02:26'),
(65, 1, 9, 65, '2023-06-18 02:36:57', '2023-06-18 02:36:57'),
(66, 2, 9, 65, '2023-06-18 02:36:57', '2023-06-18 02:36:57'),
(67, 4, 9, 65, '2023-06-18 02:36:57', '2023-06-18 02:36:57'),
(68, 1, 9, 65, '2023-06-18 02:36:58', '2023-06-18 02:36:58'),
(69, 2, 9, 65, '2023-06-18 02:36:58', '2023-06-18 02:36:58'),
(70, 4, 9, 65, '2023-06-18 02:36:58', '2023-06-18 02:36:58'),
(71, 1, 9, 66, '2023-06-18 02:42:52', '2023-06-18 02:42:52'),
(72, 3, 9, 66, '2023-06-18 02:42:52', '2023-06-18 02:42:52'),
(73, 4, 9, 66, '2023-06-18 02:42:52', '2023-06-18 02:42:52'),
(74, 1, 9, 66, '2023-06-18 02:42:53', '2023-06-18 02:42:53'),
(75, 3, 9, 66, '2023-06-18 02:42:53', '2023-06-18 02:42:53'),
(76, 4, 9, 66, '2023-06-18 02:42:53', '2023-06-18 02:42:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `dni` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recursos`
--

CREATE TABLE `recursos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recursos`
--

INSERT INTO `recursos` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'permisos', '2023-06-15 19:58:41', '2023-06-15 19:58:41'),
(2, 'recursos', '2023-06-15 19:58:41', '2023-06-15 19:58:41'),
(3, 'usuarios', '2023-06-15 19:58:41', '2023-06-15 19:58:41'),
(4, 'tipos_de_permisos', '2023-06-15 19:58:41', '2023-06-15 19:58:41'),
(66, 'personas', '2023-06-18 02:42:52', '2023-06-18 02:42:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_de_permisos`
--

CREATE TABLE `tipos_de_permisos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos_de_permisos`
--

INSERT INTO `tipos_de_permisos` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'Consulta', '2023-06-15 21:43:34', '2023-06-15 21:43:34'),
(2, 'Borrado', '2023-06-15 21:43:34', '2023-06-15 21:43:34'),
(3, 'Actualizacion', '2023-06-15 21:43:34', '2023-06-15 21:43:34'),
(4, 'Incersion', '2023-06-15 21:43:34', '2023-06-15 21:43:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `pasw` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `pasw`, `mail`, `createdAt`, `updatedAt`) VALUES
(1, 'colo', '1234', 'colo', '2023-06-15 19:57:37', '2023-06-15 19:57:37'),
(2, 'nico', '123', 'nico', '2023-06-15 19:57:37', '2023-06-15 19:57:37'),
(3, 'benja', '123', 'benja', '2023-06-15 19:57:37', '2023-06-15 19:57:37'),
(4, 'enzo', '123', 'enzo', '2023-06-15 19:57:37', '2023-06-15 19:57:37'),
(6, 'nas', 'NICOvaleAuri2755', 'exmaple@gmail.co', '2023-06-17 22:17:17', '2023-06-17 22:17:17'),
(9, 'valentin', '$2b$10$EKf5YV3aoBnzyaG9/xN8CunpcBFuXgBHar5qcqcCgAhZ5./xWriR6', 'kiknashyt@gmail.com', '2023-06-17 22:52:18', '2023-06-17 22:52:18'),
(10, 'lelo', '$2b$10$tzyads4RSixw.ny/HEpppevUUyKfQVp/4wZlt8FptTlpdlJUIwVlS', 'lelo@gmail.com', '2023-06-18 02:04:22', '2023-06-18 02:04:22');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`dni`);

--
-- Indices de la tabla `recursos`
--
ALTER TABLE `recursos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `tipos_de_permisos`
--
ALTER TABLE `tipos_de_permisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT de la tabla `recursos`
--
ALTER TABLE `recursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `tipos_de_permisos`
--
ALTER TABLE `tipos_de_permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
