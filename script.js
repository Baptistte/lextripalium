(() => {
  // Menu mobile
  const burger = document.querySelector('.nav__burger');
  const menu = document.getElementById('menu');
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      menu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  // Barre de navigation : transparente sur le hero, pleine ensuite (changement instantané)
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('is-solid', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Formulaire : ouvre le client mail (pas de serveur pour l'instant)
  const form = document.getElementById('form-contact');
  const msg = document.getElementById('form-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    msg.classList.remove('is-error');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.classList.add('is-error');
      msg.textContent = 'Adresse e-mail invalide.';
      form.email.focus();
      return;
    }
    const subject = encodeURIComponent('Je souhaite suivre Lex Tripalium');
    const body = encodeURIComponent(`Bonjour,\n\nMerci de me prévenir des prochaines rencontres.\n\nMon adresse : ${email}`);
    window.location.href = `mailto:contact@lextripalium.fr?subject=${subject}&body=${body}`;
    msg.textContent = 'Votre messagerie va s\'ouvrir pour envoyer la demande.';
  });
})();
