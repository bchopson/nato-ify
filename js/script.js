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
    output.textContent = toNatoMessage(input.value);
  } else {
    output.textContent = '';
  }
}
