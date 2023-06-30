CREATE DATABASE proyect_ecommerce;

USE proyect_ecommerce;

CREATE TABLE `usuario` (

    `Id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,

    `nombre`VARCHAR(50),

    `apellido`VARCHAR(50), 

    `email` VARCHAR(50),

    `nombre usuario` VARCHAR(5000),

    `contraseña` VARCHAR(5000)

);
