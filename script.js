// script.js

document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user inputs
    const saltMolarMass = parseFloat(document.getElementById('salt').value);
    const molarity = parseFloat(document.getElementById('molarity').value);
    const volume = parseFloat(document.getElementById('volume').value);

    // Validate volume input
    if (volume <= 0) {
        alert('Please enter a valid volume');
        return;
    }

    // Formula to calculate required mass
    const mass = molarity * saltMolarMass * volume;

    // Display the result
    document.getElementById('mass').innerText = `Required mass: ${mass.toFixed(4)} grams`;
});