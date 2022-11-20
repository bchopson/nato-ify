document.addEventListener('DOMContentLoaded', () => {
  convert();

  document.querySelector('#convert-form').addEventListener('submit', (e) => {
    e.preventDefault();
    convert();
  });
});

function convert() {
  const input = document.querySelector('#input');
  const output = document.querySelector('#output');
  output.innerHTML = '';
  if (input.value) {
    output.append(...toNatoMessage(input.value).map(createToken));
  }
}

const createToken = (token) => {
  const span = document.createElement('span');
  if (token === ' ') {
    token = '\u00B7';
  }
  span.className = 'token';
  span.textContent = token;
  return span;
}
