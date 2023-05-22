
  // validacion del formulario de contacto, sesion y registro


$(document).ready(function(){

    $.validator.addMethod("formletter", function(value, element){
  
          var pattern = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/;
  
          return this.optional(element) || pattern.test(value);
  
  
    }, "El campo es obligatorio y de debe contener solamente letras");

    $.validator.addMethod("password_validate", function(value, element){
  
      var pattern = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

      return this.optional(element) || pattern.test(value);

},"La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.");
  
  
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


    $(".usuario_sesion").validate({
      
      submitHandler: function(form) {
         
          let data = $(form).serialize();
  
          alert(data);
  
          $('input[type="text"], input[type="email"], .form-control').val('');
     
      },
  
        rules: {

          usuario:{required: true},
          contraseña: {required: true, password_validate: true},

        },
  
        messages: {

          usuario:"Campo obligatorio",


        }
        
    });

    $(".usuario_registro").validate({
      
      submitHandler: function(form) {
         
          let data = $(form).serialize();
  
          alert(data);
  
          $('input[type="text"], input[type="email"], .form-control').val('');
     
      },
  
        rules: {
          nombre: {required: true, formletter: true},
          apellido: {required: true, formletter: true},
          email: {required: true, email: true},
          usuario:{required: true},
          contraseña: {required: true, password_validate: true},

        },
  
        messages: {

          email: "El campo es obligatorio y debe tener formato de email correcto.",
          usuario:"Campo obligatorio",

        }
        
    });


  });


  // menu desplegable de productos

  document.addEventListener("DOMContentLoaded", function(){

    document.querySelector(".productos").addEventListener("click", function(){


      document.querySelector(".list_product").style.display="flex";

    })

  })







  