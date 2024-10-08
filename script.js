document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the selected salt and its properties
    const saltSelect = document.getElementById('salt');
    const selectedSalt = saltSelect.value;
    const usesText = saltSelect.options[saltSelect.selectedIndex].dataset.uses;
    const safetyText = saltSelect.options[saltSelect.selectedIndex].dataset.safety;
    const chemicalPropertiesText = saltSelect.options[saltSelect.selectedIndex].dataset.chemicalProperties;
    const healthBenefitsText = saltSelect.options[saltSelect.selectedIndex].dataset.healthBenefits;
    const environmentalImpactText = saltSelect.options[saltSelect.selectedIndex].dataset.environmentalImpact;
    const funFactsText = saltSelect.options[saltSelect.selectedIndex].dataset.funFacts;

    // Get molarity and volume
    const molarity = parseFloat(document.getElementById('molarity').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const volumeUnit = document.getElementById('volumeUnit').value;

    // Convert volume to liters if the input is in milliliters
    const volumeInLiters = volumeUnit === 'mL' ? volume / 1000 : volume;

    // Calculate the molar mass of the selected salt in grams per mole
    const molarMasses = {
        'NaCl': 58.44,
        'KCl': 74.55,
        'CaCl2': 110.98,
        'CuSO4': 159.61,
        'Na2CO3': 105.99,
        'KNO3': 101.10,
        'NH4Cl': 53.49,
        'ZnSO4': 161.44,
        'NaHCO3': 84.01,
        'MgSO4': 120.37
    };

    const molarMass = molarMasses[selectedSalt];
    // Calculate mass needed (in grams)
    const massNeeded = molarity * volumeInLiters * molarMass;

    // Display result
    document.getElementById('mass').innerText = `Mass of ${selectedSalt} needed: ${massNeeded.toFixed(2)} grams`;

    // Display additional salt information
    document.getElementById('usesText').innerText = `Uses: ${usesText}`;
    document.getElementById('safetyText').innerText = `Safety: ${safetyText}`;
    document.getElementById('chemicalPropertiesText').innerText = `Chemical Properties: ${chemicalPropertiesText}`;
    document.getElementById('healthBenefitsText').innerText = `Health Benefits: ${healthBenefitsText}`;
    document.getElementById('environmentalImpactText').innerText = `Environmental Impact: ${environmentalImpactText}`;
    document.getElementById('funFactsText').innerText = `Fun Facts: ${funFactsText}`;

    // Show the additional salt info section
    document.getElementById('additionalSaltInfo').style.display = 'block';
});

// Reset button functionality
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('calculatorForm').reset();
    document.getElementById('mass').innerText = '';
    document.getElementById('additionalSaltInfo').style.display = 'none';
});