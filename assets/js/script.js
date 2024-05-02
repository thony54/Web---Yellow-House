'use strict';

/**
 * navbar toggle in mobile
 */

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

/**
 * Header scroll state
 */

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Obtener referencia al elemento del gatito
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

/**
 * Cambiar color del enlace y redireccionar
 */

function cambiarColorAzul() {
  document.getElementById("quantum-code-link").style.color = "blue";
}

function irAPaginaWeb() {
  window.location.href = "https://www.ejemplo.com";
}

document.getElementById("quantum-code-link").addEventListener("mouseover", cambiarColorAzul);

document.getElementById("quantum-code-link").addEventListener("click", function(event) {
  event.preventDefault();
  setTimeout(irAPaginaWeb, 1000);
});