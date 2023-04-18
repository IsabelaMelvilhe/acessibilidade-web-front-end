var conteudoForaDialog = document.querySelector('#conteudoForaDialog');
var video = document.querySelector('video');

var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

btnAbreDialog.style.display = 'block'

btnAbreDialog.addEventListener('click', function () {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-label').focus();
  conteudoForaDialog.inert = true;

  document.querySelector('video').removeAttribute('controls');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
  conteudoForaDialog.inert = false;
  btnAbreDialog.focus();
  document.querySelector('video').setAttribute('controls', 'true');
}

document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
dialogOverlay.addEventListener('click', fechandoDialog);

document.addEventListener('keyup', function (evento) {
  if (evento.keyCode == 27) {
    fechandoDialog()
  }
})