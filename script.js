const container = document.getElementById('container');
const superDiv = document.createElement('div');
const subDiv = document.createElement('div');

superDiv.style.cssText = 'display: flex; flex-direction: column; flex-basis: 100%; height: 100%';
subDiv.style.cssText = 'display: flex; flex-direction: column; flex-basis: 6.25%; height: 100%';

container.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'green'; 
})

let numberOfGrids = 16;

for (let i = 0; i < numberOfGrids; i++) {
  superDiv.appendChild(subDiv.cloneNode(true));
}

for (let i = 0; i < numberOfGrids; i++) {
  container.appendChild(superDiv.cloneNode(true));
}