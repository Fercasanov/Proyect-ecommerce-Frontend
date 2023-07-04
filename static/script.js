
  // menu desplegable de productos

  document.addEventListener("DOMContentLoaded", function(){

    document.querySelector(".productos").addEventListener("mouseover", function(){

      document.querySelector(".list_product").style.display="flex";

    })

    document.querySelector(".productos").addEventListener("mouseout", function(){

      document.querySelector(".list_product").style.display="none";

    })


  })







  