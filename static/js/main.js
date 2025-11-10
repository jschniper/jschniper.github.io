window.document.addEventListener("keydown", (e) => {
  const modal = window.document.querySelector('#modal')
  if (e.key == 'Escape' && modal.checked) {
    modal.checked = false;
  }
});
