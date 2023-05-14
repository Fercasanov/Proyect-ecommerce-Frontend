
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



document.addEventListener("DOMContentLoaded", function(){

document.querySelector(".contacto").addEventListener("click", function(){
    
      document.querySelector(".tercera").style.display = "block"
      
//       // section_tres.forEach(function(element){

//       //   console.log(element)

//       //   document.querySelector(`.${element.ClassName}`).style.display="flex"
        
//       // });

//       // document.querySelector(".infoempresa").style.display="none"
})


//   // document.querySelector(".nosotros").addEventListener("click", function(){
  
//   //     document.querySelector(".infoempresa").style.display="flex"
  
//   //     document.querySelector(".").style.display="none"
//   //   })  

})
