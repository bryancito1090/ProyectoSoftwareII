document.getElementById('BryanButton').addEventListener('click', function() {
    const nameDisplay = document.getElementById('nameDisplay');
    if (nameDisplay) {
        nameDisplay.innerText = 'Bryan Baño Hola mundo';
    }
});

document.getElementById('btnElizabeth').addEventListener('click', function() {
    const nameDisplay = document.getElementById('nombreEli');
    if (nameDisplay) {
        nameDisplay.innerText = 'Elizabeth Silva';
    }
});
document.getElementById('MelanyButton').addEventListener('click', function() {
    const nameDisplay = document.getElementById('name');
    if (nameDisplay) {
        nameDisplay.innerText = 'Melany Enriquez ';
    }
});