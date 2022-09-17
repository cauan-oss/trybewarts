const countLetters = document.getElementById('textarea');
const countDown = document.getElementById('counter');
const buttonSubmitForms = document.getElementById('submit-btn');
const checkBoxAgreement = document.getElementById('agreement');
const buttonLogin = document.getElementById('button-login');
const emailLogin = document.getElementById('email-login');
const mainForm = document.getElementById('evaluation-form');

const attr = buttonSubmitForms.attributes;

buttonLogin.addEventListener('click', () => {
  const email = emailLogin.value;
  if (email.search(/[@]/g) !== -1 && email.search(/[.]/g) !== -1) {
    window.alert('Olá, Tryber!');
  } else window.alert('Email ou senha inválidos.');
});

countLetters.addEventListener('input', () => {
  const count = countLetters.value.length;
  const maxChar = 500 - count;
  countDown.innerHTML = maxChar;
});

checkBoxAgreement.addEventListener('click', () => {
  const check = attr.length;
  let count = 0;
  for (let i = 0; i < attr.length; i += 1) {
    if (attr[i].name === 'disabled') {
      buttonSubmitForms.removeAttribute('disabled');
    } else count += 1;
  }
  if (count === check) buttonSubmitForms.setAttribute('disabled', '');
});

function adicionarNomeSobrenome(n, s) {
  const concat = `${n} ${s}`;
  document.getElementById('name-confirm').innerText = concat;
}

function adicionarEmail(e) {
  document.getElementById('email-confirm').innerText = e;
}

function adicionarCasa(house) {
  document.getElementById('casa-confirm').innerText = house.value;
}

function adicionarFamilia(fam) {
  document.getElementById('familia-confirm').innerText = fam.value;
}

function adicionarLearning(learning) {
  let string = '';
  for (let i = 0; i < learning.length; i += 1) {
    string += learning[i].value;
    if (i < learning.length - 1) string += ', ';
  }
  document.getElementById('materias-confirm').innerText = string;
}

function adicionarAvaliacao(rate) {
  document.getElementById('avaliacao-confirm').innerText = rate.value;
}

function adicionarComments(string) {
  document.getElementById('comments-confirm').innerText = string.value;
}

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  mainForm.style.display = 'none';
  const nome = document.querySelector('#input-name').value;
  const sobreNome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const selectHouse = document.querySelector('option[class="house-selected"]:checked');
  const family = document.querySelector('input[name="family"]:checked');
  const favoriteLearning = document.querySelectorAll('input[class="subject"]:checked');
  const selectRate = document.querySelector('input[name="rate"]:checked');
  const comentarios = document.getElementById('textarea');
  adicionarNomeSobrenome(nome, sobreNome);
  adicionarEmail(email);
  adicionarCasa(selectHouse);
  adicionarFamilia(family);
  adicionarLearning(favoriteLearning);
  adicionarAvaliacao(selectRate);
  adicionarComments(comentarios);
  document.getElementById('form-data').style.display = 'flex';
});
