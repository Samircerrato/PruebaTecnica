USE [test];
SELECT TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE';

--crear la tabla empleados--
CREATE TABLE empleados (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  salario DECIMAL(10, 2),
  fecha_contratacion DATE
);
--crear la tabla cliente--
CREATE TABLE clientes (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  email VARCHAR(100),
  telefono VARCHAR(20),
  direccion VARCHAR(100)
);
--crear la tabla producto--
CREATE TABLE productos (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  descripcion VARCHAR(255),
  precio DECIMAL(10, 2),
  stock INT
);
----crear la tabla stock--
CREATE TABLE inventario (
  id INT PRIMARY KEY,
  producto_id INT,
  cantidad INT,
  fecha_actualizacion DATE,
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);

--Crear la tabla de registro de ventas
CREATE TABLE ventas (
  id INT PRIMARY KEY,
  empleado_id INT,
  cliente_id INT,
  producto_id INT,
  cantidad_vendida INT,
  precio_unitario DECIMAL(10,2),
  total DECIMAL(10,2),
  fecha_venta DATE,
  FOREIGN KEY (empleado_id) REFERENCES empleados(id),
  FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id),
);



/*
* Para asignar usuario y comtraseña a la BD
*/
--CREATE LOGIN samir_cerrato WITH PASSWORD = 'contraseñasegura';---

USE [test];
CREATE USER samir_cerrato FOR LOGIN samir_cerrato;




USE [test];
SELECT name
FROM sys.tables;


/*
*Crear Vista que devuelva Empleado, Cliente, producto, cantidad vendida, producto en inventario.
*/


-- crear la vista--
CREATE VIEW vista_ventas AS
SELECT v.id as venta_id, e.nombre AS empleado, c.nombre AS cliente, p.nombre AS producto, v.cantidad_vendida, i.cantidad AS producto_en_inventario
FROM ventas v

JOIN empleados e ON v.empleado_id = e.id
JOIN clientes c ON v.cliente_id = c.id
JOIN productos p ON v.producto_id = p.id
JOIN inventario i ON v.producto_id  = i.producto_id;

--llamar la vista de ventas--

SELECT *FROM vista_ventas;




