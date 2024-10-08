document.addEventListener('DOMContentLoaded', () => {
    const calculatorForm = document.getElementById('calculatorForm');
    const resultDiv = document.getElementById('result');
    const massDisplay = document.getElementById('mass');
    const molecularMassDisplay = document.getElementById('molecularMassValue');
    const formulaDisplay = document.getElementById('formulaText');
    const descriptionDisplay = document.getElementById('descriptionText');
    const propertiesDisplay = document.getElementById('propertiesText');
    const tooltip = document.getElementById('tooltip');

    calculatorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const saltSelect = document.getElementById('salt');
        const selectedSalt = saltSelect.options[saltSelect.selectedIndex];
        const volume = parseFloat(document.getElementById('volume').value);
        const molarity = parseFloat(document.getElementById('molarity').value);
        
        const molecularMass = parseFloat(selectedSalt.getAttribute('data-molecular-mass'));
        const massNeeded = molecularMass * molarity * volume;

        massDisplay.textContent = `You need ${massNeeded.toFixed(2)} grams of ${selectedSalt.value}.`;
        resultDiv.style.display = 'block';
        resultDiv.classList.add('fade-in');

        // Display additional information
        molecularMassDisplay.textContent = `${molecularMass} g/mol`;
        formulaDisplay.textContent = selectedSalt.getAttribute('data-formula');
        descriptionDisplay.textContent = selectedSalt.getAttribute('data-description');
        propertiesDisplay.textContent = selectedSalt.getAttribute('data-properties');
    });

    // Reset button functionality
    document.getElementById('resetButton').addEventListener('click', () => {
        calculatorForm.reset();
        resultDiv.style.display = 'none';
        molecularMassDisplay.textContent = '';
        formulaDisplay.textContent = '';
        descriptionDisplay.textContent = '';
        propertiesDisplay.textContent = '';
    });

    // Tooltip for salt selection
    saltSelect.addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'OPTION') {
            const tooltipText = event.target.getAttribute('data-description');
            tooltip.textContent = tooltipText;
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.clientX}px`;
            tooltip.style.top = `${event.clientY + 20}px`;
        }
    });

    saltSelect.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});