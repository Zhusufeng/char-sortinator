const sortForm = document.getElementById('sort-form');
const input = document.getElementById('input');
console.log('this loaded');

const submitInfo = function (e) {
  e.preventDefault();
  console.log('You pushed submit');
  fetch('/sort', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(input)
  }).then((data) => {
    console.log(data.json);
  });

}

sortForm.addEventListener('submit', submitInfo);