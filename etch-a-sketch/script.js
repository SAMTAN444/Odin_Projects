const container = document.querySelector('.container');
const resetButton = document.getElementById('reset');

function createGrid(size) {
    container.innerHTML = '';
    container.style.width = '500px';
    container.style.height = '500px';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Use percent so it always fits evenly
        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}



resetButton.addEventListener('click', () => {
    let newSize = prompt("Enter grid size (e.g 16 for 16x16)");
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1-100");
    }
});

createGrid(16);