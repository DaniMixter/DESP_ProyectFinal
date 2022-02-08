$(document).ready(function() {
    carrito();
    eliminarProducto(precioResta);
    var precioResta = '0';

    dinero(precioResta);

});

function carrito() {
    var row_no = $('table tbody tr').length;
    document.querySelector('#shopping-cart span').innerHTML = row_no;
}

function eliminarProducto(precioResta) {
    $(document).on('click', '.eliminarFila', function() {
        $(this).parent('td').parent('tr').remove();
        var row_no = $('table tbody tr').length;
        document.querySelector('#shopping-cart span').innerHTML = row_no;
        precioResta = parseFloat($('.precios').text());

    });
}

function dinero(precioResta) {

    var precio1 = parseFloat($('.precio').text());
    var precio2 = parseFloat($('.preci').text());
    var precio3 = parseFloat($('.PrecioEnvio').text());
    var precio = (precio1 + precio2 + precio3 - precioResta);
    document.querySelector('table tfoot .PrecioF').innerHTML = precio;
}