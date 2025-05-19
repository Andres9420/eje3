function showSection(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach((section) => {
    section.style.display = 'none';
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}

// Mostrar la sección de inicio por defecto
document.addEventListener('DOMContentLoaded', () => {
  showSection('inicio');
});
