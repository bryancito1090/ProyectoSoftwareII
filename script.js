document.getElementById('BryanButton').addEventListener('click', function() {
    const nameDisplay = document.getElementById('nameDisplay');
    if (nameDisplay) {
        nameDisplay.innerText = 'Bryan Baño Hola mundo';
    }
});

document.getElementById('SebastianButton').addEventListener('click', function() {
    const nameDisplay = document.getElementById('nameShow');
    if (nameDisplay) {
        nameDisplay.innerText = 'Sebastian Roblez Hola mundo';
    }
});
