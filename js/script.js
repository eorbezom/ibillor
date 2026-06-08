document.addEventListener('DOMContentLoaded', () => {

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Mobile Menu
  const menuBtn = document.getElementById('menuBtn');
  let mobileMenu = null;

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.remove();
        mobileMenu = null;
      } else {
        mobileMenu = document.createElement('div');
        mobileMenu.className = 'md:hidden fixed inset-x-0 top-16 bg-black/95 backdrop-blur-md border-b border-red-600 z-50 py-8';
        mobileMenu.innerHTML = `
          <div class="flex flex-col items-center gap-8 text-xl">
            <a href="index.html" class="nav-link">Inicio</a>
            <a href="index.html#sobremi" class="nav-link">Sobre Mí</a>
            <a href="index.html#cursos" class="nav-link">Cursos</a>
            <a href="index.html#productos" class="nav-link">Productos</a>
            <a href="contacto.html" class="nav-link">Contacto</a>
          </div>
        `;
        document.body.appendChild(mobileMenu);
      }
    });
  }

  // Modal Términos
  const verTerminos = document.getElementById('verTerminos');
  const modalTerminos = document.getElementById('modalTerminos');
  const cerrarModal = document.getElementById('cerrarModal');

  if (verTerminos && modalTerminos) {
    verTerminos.addEventListener('click', (e) => {
      e.preventDefault();
      modalTerminos.classList.remove('hidden');
    });
  }

  if (cerrarModal && modalTerminos) {
    cerrarModal.addEventListener('click', () => {
      modalTerminos.classList.add('hidden');
    });
  }

  // Modal Éxito
  const modalExito = document.getElementById('modalExito');
  const cerrarExito = document.getElementById('cerrarExito');

  if (cerrarExito && modalExito) {
    cerrarExito.addEventListener('click', () => {
      modalExito.classList.add('hidden');
    });
  }

  // Formulario
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const terminos = document.getElementById('terminos').checked;

      if (!terminos) {
        alert("Debes aceptar los Términos y Condiciones para enviar el mensaje.");
        return;
      }

      const btn = document.getElementById('submitBtn');
      const originalText = btn.textContent;
      btn.textContent = "Enviando...";
      btn.disabled = true;

      setTimeout(() => {
        contactForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;
        modalExito.classList.remove('hidden');   // ← Muestra el modal bonito
      }, 1200);
    });
  }

  // Modal Próximo Lanzamiento
  const modalProducto = document.getElementById('modalProducto');
  const cerrarProducto = document.getElementById('cerrarProducto');

  window.abrirModalProducto = function() {
    if (modalProducto) {
      modalProducto.classList.remove('hidden');
    }
  };

  if (cerrarProducto && modalProducto) {
    cerrarProducto.addEventListener('click', () => {
      modalProducto.classList.add('hidden');
    });
  }

  if (modalProducto) {
    modalProducto.addEventListener('click', (e) => {
      if (e.target === modalProducto) {
        modalProducto.classList.add('hidden');
      }
    });
  }
});

