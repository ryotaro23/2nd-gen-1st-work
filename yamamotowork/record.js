


'use strict';
{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', function () {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  close.addEventListener('click', function () {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  mask.addEventListener('click', function () {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
}


// var $target = document.querySelector('.target')
// var $button = document.querySelector('.button')
// $button.addEventListener('click', function() {
//   $target.classList.toggle('is-hidden')
// })

'use strict';
{
  const mopen = document.getElementById('mopen');
  const mclose = document.getElementById('mclose');
  const mmodal = document.getElementById('mmodal');
  const mmask = document.getElementById('mmask');

  mopen.addEventListener('click', function () {
    mmodal.classList.remove('mhidden');
    mmask.classList.remove('mhidden');
  });
  mclose.addEventListener('click', function () {
    mmodal.classList.add('mhidden');
    mmask.classList.add('mhidden');
  });
  mmask.addEventListener('click', function () {
    mmodal.classList.add('mhidden');
    mmask.classList.add('mhidden');
  });
}