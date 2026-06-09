'use strict';

document.querySelectorAll('.js-open-popup').forEach(btn => {
  btn.addEventListener('click', () => {
    const popupId = btn.dataset.popup;
    document.getElementById(`popup-${popupId}`).classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
});

document.querySelectorAll('.js-close-popup').forEach(el => {
  el.addEventListener('click', () => {
    el.closest('.popup').classList.remove('is-open');
    document.body.style.overflow = '';
  });
});
