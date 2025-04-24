// Mobile Menu Toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form Validation
  document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill out all fields.');
    }
  });
  // Certificate Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  const certificates = document.querySelectorAll('.certificate-card a');
  const modal = document.getElementById('certificateModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalIssuer = document.getElementById('modalIssuer');
  const downloadLink = document.getElementById('downloadLink');
  const closeModal = document.getElementById('closeModal');

  certificates.forEach(cert => {
    cert.addEventListener('click', function(e) {
      e.preventDefault();
      
      const card = this.closest('.certificate-card');
      const title = card.querySelector('h3').textContent;
      const issuer = card.querySelector('p').textContent;
      const imgSrc = card.querySelector('img').src;
      
      modalTitle.textContent = title;
      modalIssuer.textContent = `Issued by: ${issuer.split(' - ')[0]}`;
      modalImage.src = imgSrc;
      downloadLink.href = imgSrc;
      downloadLink.download = `${title.replace(/\s+/g, '_')}_Certificate`;
      
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  closeModal.addEventListener('click', function() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });
});