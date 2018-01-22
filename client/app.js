const submitButton = document.getElementById('submit');
const input = document.getElementById('input');

submitButton.addEventListener('submit', () => {

  fetch('/sort', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(input)
  }).then((data) => {
    console.log(data.json);
  });

});