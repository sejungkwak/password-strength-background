const password = document.getElementById('password');
const bgImg = document.getElementById('background-image');

password.addEventListener('input', changeBlurriness);

function changeBlurriness() {
  const pwLength = password.value.length;
  if ( pwLength <= 10 ) bgImg.style.filter = `blur(${10 - pwLength}px)`;
  if ( pwLength > 10) bgImg.style.filter = 0;
}