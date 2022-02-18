const container = document.getElementById('container');
const superDiv = document.createElement('div');
const subDiv = document.createElement('div');

superDiv.style.cssText = 'display: flex; flex-direction: column; flex-basis: 100%; height: 100%';
subDiv.style.cssText = 'display: flex; flex-direction: column; flex-basis: 6.25%; height: 100%';

container.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'green'; 
})

let numberOfGrids = 16;

const createPad = (numberOfGrids) => {
  for (let i = 0; i < numberOfGrids; i++) {
    superDiv.appendChild(subDiv.cloneNode(true));
  }
  
  for (let i = 0; i < numberOfGrids; i++) {
    container.appendChild(superDiv.cloneNode(true));
  }
}

createPad();

const resetBtn = document.getElementById('reset-grid-btn');
resetBtn.addEventListener('click', () => {
  numberOfGrids = prompt('how many grids would you like?');

  superDiv.textContent = '';
  container.textContent = '';
  if (numberOfGrids > 16 && numberOfGrids <= 100) {
    createPad(numberOfGrids);
  } else {
    while (numberOfGrids <= 16 || numberOfGrids > 100) {
      numberOfGrids = prompt('grid size cannot exceed 100x100 and cannot be below 16x16\nhow many grids would you like?');
    }
    createPad(numberOfGrids);
  }
});