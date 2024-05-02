'use strict';


/**
 * navbar toggle in mobile
 */

const /** {NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /** {NodeElement} */ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));



/**
 * Header scroll state
 */

const /** {NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});


/**
 Obtener referencia al elemento del gatito
 */

 document.addEventListener('DOMContentLoaded', function() {
  // Obtener referencia al elemento del gatito
  var gatito = document.querySelector('.gatito');

  // Verificar si se encontró el elemento del gatito
  if (gatito) {
      // Agregar un evento de clic al gatito
      gatito.addEventListener('click', function() {
          // Mostrar ventana emergente con el mensaje
          alert('Somos PetFriendly');
      });
  }
});

<script>
  // El color del enlace a azul al pasar el cursor por encima
  function cambiarColorAzul() {
    document.getElementById("quantum-code-link").style.color = "blue"
  }

  // El color del enlace a azul al pasar el cursor por encima
  document.getElementById("quantum-code-link").addEventListener("mouseover", cambiarColorAzul);

  // Función para redirigir a una página web al darle clic 
  function irAPaginaWeb() {
    window.location.href = "https://www.ejemplo.com"
  }

  // Evento para redirigir a una página web al darle clic
  document.getElementById("quantum-code-link").addEventListener "click", function(event)
    // Evitar el comportamiento predeterminado del enlace
    event.preventDefault()
    
    // Redirigir a la página web después de 1 segundo (1000 milisegundos)
    setTimeout(irAPaginaWeb, 1000)
</script>

/**
 * Add to favorite button toggle
 */

