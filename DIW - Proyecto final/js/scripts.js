var animales;

var tamanios;

var productos;
/*Al cargar la pagina, ocultamos el submenu y cargamos todos los items del xml*/
window.onload = function () {
  /*Ocultamos el submenu porque solo se utiliza en perros*/
  $("#menu2").hide();
  var request = new XMLHttpRequest();
  request.open("GET", "../productos.xml", false);
  request.send();
  var xml = request.responseXML;
  var users = xml.getElementsByTagName("producto");
  /*Recorremos todos los datos del xml*/
  for (var i = 0; i < users.length; i++) {


    var user = users[i];

    var name = user.getElementsByTagName("nombre");

    var price = user.getElementsByTagName("precio");

    var description = user.getElementsByTagName("descripcion");

    var urlImg = user.getElementsByTagName("imagen");
    /*Mediante JQuery añadimos dentro del div los datos que necesitamos*/
    $("#estructura").append("<div class='caja'> <h1>" + name[0].childNodes[0].nodeValue + "</h1> <img src='" + urlImg[0].childNodes[0].nodeValue + "' width='100%'><div class='tamanioletra'><label class='labelProducto'>Precio:</label> " + price[0].childNodes[0].nodeValue + "€ </br><label  class='labelProducto'>Descripcion:</label> " + description[0].childNodes[0].nodeValue + "</div></div>");

  }
  /*Clicando en la primera opcion limpiamos el div estructura, ocultamos el submenu ya que no es necesario y cargamos los items*/
  $("#slide-item-0").click(function () {
    $("#estructura").empty();
    $("#menu2").hide();

    productos = xml.getElementsByTagName("producto");
    for (var i = 0; i < productos.length; i++) {

      var producto = productos[i];

      var name = producto.getElementsByTagName("nombre");

      var price = producto.getElementsByTagName("precio");

      var description = producto.getElementsByTagName("descripcion");

      var urlImg = producto.getElementsByTagName("imagen");

      $("#estructura").append("<div class='caja'> <h1>" + name[0].childNodes[0].nodeValue + "</h1> <img src='" + urlImg[0].childNodes[0].nodeValue + "' width='100%'><div class='tamanioletra'><label class='labelProducto'>Precio:</label> " + price[0].childNodes[0].nodeValue + "€ </br><label  class='labelProducto'>Descripcion:</label> " + description[0].childNodes[0].nodeValue + "</div></div>");
    }

  });
