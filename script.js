document.getElementById('BryanButton').addEventListener('click', function() {
    const nameDisplay = document.getElementById('nameDisplay');
    if (nameDisplay) {
        nameDisplay.innerText = 'Bryan Baño Hola mundo';
    }
});