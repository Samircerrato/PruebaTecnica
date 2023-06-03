import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import sql from "mssql";

const config = {
  user: "samir_cerrato",
  password: "contraseñasegura",
  server: "LAPTOP-5NN75534",
  database: "test",
  options: {
    encrypt: true,
  },
};

function ReporteVentas () {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    obtenerHistorialVentas();
  }, []);

  const obtenerHistorialVentas = async () => {
    try {
      await sql.connect(config);

      const result = await sql.query("SELECT * FROM vista_ventas"); // Cambia la consulta SQL para seleccionar desde la vista

      const data = result.recordset;

      setVentas(data);

      await sql.close();
    } catch (error) {
      console.log("Error al obtener el historial de ventas:", error);
    }
  };

  return (
    <div>
      {ventas.length === 0 ? (
        <p>No hay ventas registradas.</p>
      ) : (
        <ul>
          {ventas.map((venta, index) => (
            <li key={index}>
              <strong>ID de Venta:</strong> {venta.venta_id}
              <br />
              <strong>Empleado:</strong> {venta.empleado}
              <br />
              <strong>Cliente:</strong> {venta.cliente}
              <br />
              <strong>Producto:</strong> {venta.producto}
              <br />
              <strong>Cantidad Vendida:</strong> {venta.cantidad_vendida}
              <br />
              <strong>Producto en Inventario:</strong>{" "}
              {venta.producto_en_inventario}
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReporteVentas;
