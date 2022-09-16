const countLetters = document.getElementById('comments');
const countDown = document.getElementById('counter');
const buttonSubmitForms = document.getElementById('submit-btn');
const checkBoxAgreement = document.getElementById('agreement');

countLetters.addEventListener('keyup', () => {
  const count = countLetters.value.length;
  const maxChar = 500 - count;
  countDown.innerHTML = maxChar;
});

checkBoxAgreement.addEventListener('click', () => {
  const attr = buttonSubmitForms.attributes;
  const checked = attr.length;
  let count = 0;
  for (let i = 0; i < attr.length; i += 1) {
    if (attr[i].name === 'disabled') {
      buttonSubmitForms.removeAttribute('disabled');
    } else count += 1;
  }
  if (count === checked) buttonSubmitForms.setAttribute('disabled', '');
});
