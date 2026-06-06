// Contact Pro Form submit handler
(function() {
  const form = document.getElementById('contactProForm');
  const success = document.getElementById('formSuccessPro');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.contact-pro-btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;
    await new Promise(r => setTimeout(r, 1500));
    btn.innerHTML = originalHTML;
    btn.disabled = false;
    form.reset();
    success.classList.add('show');
    setTimeout(() => success.classList.remove('show'), 5000);
  });
})();
