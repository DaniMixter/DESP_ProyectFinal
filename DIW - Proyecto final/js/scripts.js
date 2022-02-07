$(document).ready(function() {
    var row_no = $('table tbody tr').length;
    document.querySelector('#shopping-cart span').innerHTML = row_no - 1;
    $(document).on('click', '.eliminarFila', function() {
        $(this).parent('td').parent('tr').remove();
        var row_no = $('table tbody tr').length;
        document.querySelector('#shopping-cart span').innerHTML = row_no - 1;
        var row_precio = $('table tbody tr .precio').length;

    });

    row_precio = document.querySelector('table tbody tr .precio').innerHTML;
    row_precio2 = document.querySelector('table tbody tr .preci').innerHTML;


});