const sortForm = document.getElementById('sort-form');
const input = document.getElementById('input');

const submitInfo = function (e) {
  e.preventDefault();

  const data = { input: input.value };

  fetch('/sort', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data)
  }).then((info) => {
    console.log(info);
  });

};

sortForm.addEventListener('submit', submitInfo);