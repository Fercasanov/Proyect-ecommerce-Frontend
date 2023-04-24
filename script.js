
$(document).ready(function(){

  $.validator.addMethod("formletter", function(value, element){

        var pattern = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/;

        return this.optional(element) || pattern.test(value);


  }, "El campo es obligatorio y de debe contener solamente letras");

  $(".formulario").validate({
    
    submitHandler: function(form) {
       
        let data = $(form).serialize();

        alert(data);

        $('input[type="text"], input[type="email"], .form-control').val('');
   
    },

      rules: {

        nombre: {required: true, formletter: true},
        apellido: {required: true, formletter: true},
        email: {required: true, email: true},
        empresa: {required: true},
        consulta: {required: true}

      },

      messages: {

        email: "El campo es obligatorio y debe tener formato de email correcto.",
        empresa: "Campo obligatorio",
        consulta: "Campo obligatorio"

      }
      
  });

});


  
