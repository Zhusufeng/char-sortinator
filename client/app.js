const sortTable = document.getElementById('sort-table');
const sortForm = document.getElementById('sort-form');
const input = document.getElementById('input');

const submitInfo = function (e) {
  e.preventDefault();
  const newRow = document.createElement('tr');
  const originalCell = document.createElement('td');
  const sortedCell = document.createElement('td');
  const originalString = document.createTextNode(input.value);
  let sortedString;

  const data = { input: input.value };

  fetch('/sort', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data)
  }).then((info) => {
    return info.json();
  }).then((newInfo) => {
    sortedString = document.createTextNode(newInfo.sortedBody);
    originalCell.appendChild(originalString);
    sortedCell.appendChild(sortedString);
    newRow.appendChild(originalCell);
    newRow.appendChild(sortedCell);
    sortTable.appendChild(newRow);
  });

};

sortForm.addEventListener('submit', submitInfo);