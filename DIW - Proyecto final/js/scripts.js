$(document).ready(function() {
    var row_no;
    eliminarProducto(row_no);
    compra(row_no);
    carrito(row_no);
    $(document).scroll(function() {

        if($(this).scrollTop() > 30){          
          $('#totop').fadeIn(500);
    
        }else{          
          $('#totop').fadeOut(500);
        }
      });
    
      $('#totop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
      });
});

function compra(row_no) {
    var objeto = 0;
    var cantidad = 0;
    var PrecioEnvio = parseFloat($('.PrecioEnvio').text());

    $("table tbody .precios").each(function() {

        objeto += parseFloat($(this).text());
    })
    dinero(objeto + PrecioEnvio);

    if (row_no == 0) {
        $('#main').text('No hay ningún producto en el carrito');

    }
}

function carrito(row_no) {
    row_no = $('table tbody tr').length;
    document.querySelector('#shopping-cart span').innerHTML = row_no;
    compra(row_no);
}

function eliminarProducto(row_no) { /**/
    $(document).on('click', '.eliminarFila', function() {
        $(this).parent('td').parent('tr').remove();
        carrito(row_no);
        compra(row_no);
    });
}

function dinero(precio) { /*Muestra el precio final x pantalla*/
    document.querySelector('table tfoot .PrecioF').innerHTML = precio.toFixed(2) + "&euro;";
}

