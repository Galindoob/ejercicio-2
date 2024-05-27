let ventas = [];

function guardarVenta() {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const valorProducto = parseFloat(document.getElementById('valorProducto').value);
    const cantidadProducto = parseInt(document.getElementById('cantidadProducto').value);
    const resultado = document.getElementById('resultado');

    if (nombreProducto && !isNaN(valorProducto) && !isNaN(cantidadProducto)) {
        ventas.push({ nombre: nombreProducto, valor: valorProducto, cantidad: cantidadProducto });
        alert('Venta guardada');
        document.getElementById('ventaForm').reset();
        resultado.innerText = '';
    } else {
        resultado.innerText = 'Por favor, complete todos los campos para guardar los datos';
    }
}

function totalAPagar() {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const valorProducto = parseFloat(document.getElementById('valorProducto').value);
    const cantidadProducto = parseInt(document.getElementById('cantidadProducto').value);
    const resultado = document.getElementById('resultado');

    if (nombreProducto && !isNaN(valorProducto) && !isNaN(cantidadProducto)) {
        let total = valorProducto * cantidadProducto;
        resultado.innerText = `El total a pagar por ${nombreProducto} es ${total.toFixed(2)}`;
    } else {
        resultado.innerText = 'Por favor, complete todos los campos para calcular el total a pagar';
    }
}

function cantidadProductosVendidos() {
    let totalCantidad = ventas.reduce((acc, venta) => acc + venta.cantidad, 0);
    document.getElementById('resultado').innerText = `Cantidad total de productos vendidos: ${totalCantidad}`;
}
