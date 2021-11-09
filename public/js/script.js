$(document).ready(function () {
   // Mostrar datos al modal para editar registro
   $("#mytable").on("click", ".edit", function () {
      let producto_id = $(this).data("id");
      let producto_nombre = $(this).data("producto_nombre");
      let producto_precio = $(this).data("producto_precio");
      $("#EditModal").modal("show");
      $(".producto_nombre").val(producto_nombre);
      $(".producto_precio").val(producto_precio);
      $(".producto_id").val(producto_id);
   });


// Eliminar
    $("#mytable").on("click", ".delete", function(){
        let producto_id= $(this).data("id");
        $("#DeleteModal").modal("show");
        $(".producto_id").val(producto_id)
    });

});