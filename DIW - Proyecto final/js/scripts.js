$(document).ready(function() {
    carrito();
    var precioResta = 0;
    var precio1 = parseFloat($('.precio').text());
    var precio2 = parseFloat($('.preci').text());
    var precio3 = parseFloat($('.PrecioEnvio').text());
    var precio = (precio1 + precio2 + precio3 - precioResta);
    compra();
    eliminarProducto(precioResta, precio3);
});

function compra() {
    var cantidad = 0;
    $(".precios").each(function() {
        cantidad += parseFloat($(this).text());
        dinero(cantidad);
    })
}

function carrito() {
    var row_no = $('table tbody tr').length;
    document.querySelector('#shopping-cart span').innerHTML = row_no;
    precioResta = parseFloat($('.precios').text());
    precioResta = (precio3 + precioResta);
    dinero(precioResta.toFixed(2));
}
/*function eliminarMoney(row_now){
    if (row_now = 1) {
        precioResta = parseFloat($('.precios').text());
        precioResta = (precio3 + precioResta);
        dinero(precioResta.toFixed(2));
    }
}*/
function eliminarProducto(precioResta, precio3) {
    $(document).on('click', '.eliminarFila', function() {
        $(this).parent('td').parent('tr').remove();
        carrito();
    });
}

function cantidad(precio1, precio2) {
    var cantidad1 = parseFloat($('.cantidad1').text());
    var cantidad2 = parseFloat($('.cantidad2').text());
    var c = precio1 * cantidad1;
    var precioFinal2 = precio2 * cantidad2;

}

function dinero(precio) {
    document.querySelector('table tfoot .PrecioF').innerHTML = precio + "&euro;";
}
$(document).scoll(function() {
    if ($(this).scrollTop() > 20) {
        $('#totop').fadeIn(500);
    } else {
        $('#totop').fadeIn(500);
    }
});
$('#totop').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600)
})