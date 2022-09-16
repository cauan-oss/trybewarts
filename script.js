const countLetters = document.getElementById('comments');
const countDown = document.getElementById('countdown');

countLetters.addEventListener('keyup', () => {
  const count = countLetters.value.length;
  const maxChar = 500 - count;
  countDown.innerHTML = maxChar;
});
