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
  if (input.value) {
    output.append(...toNatoMessage(input.value).map(createToken));
  } else {
    output.innerHTML = '';
  }
}

const createToken = (token) => {
  const span = document.createElement('span');
  span.className = 'token';
  span.textContent = token;
  return span;
}
