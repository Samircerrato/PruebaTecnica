import React, { useState } from "react";

function Facturar() {
  const [nombre, setNombre] = useState("");
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [total, setTotal] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const calcularTotal = () => {
    const precioFloat = parseFloat(precio);
    const cantidadInt = parseInt(cantidad);
    const totalValue = isNaN(precioFloat) || isNaN(cantidadInt)
      ? "0"
      : (precioFloat * cantidadInt).toFixed(2);
    setTotal(totalValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Venta realizada:");
    console.log("Nombre del cliente:", nombre);
    console.log("Producto:", producto);
    console.log("Precio:", precio);
    console.log("Cantidad:", cantidad);
    console.log("Total:", total);
    console.log("Observaciones:", observaciones);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del cliente:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <br />

        <label htmlFor="producto">Producto:</label>
        <input
          type="text"
          id="producto"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          required
        />
        <br />

        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <br />

        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />
        <br />

        <label htmlFor="total">Total:</label>
        <input type="number" id="total" value={total} readOnly />
        <br />

        <label class="form-label"  htmlFor="observaciones">
          Observaciones:
        </label>
        <textarea
          id="observaciones"
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
        ></textarea>
        <br />

        <input
          className="btn  btn-danger "
          type="submit"
          value="Realizar Venta"
        />
      </form>
    </div>
  );
}

export default Facturar;
