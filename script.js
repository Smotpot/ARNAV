// Function to calculate molar mass based on the selected salt
const getMolarMass = (salt) => {
    const molarMasses = {
        NaCl: 58.44,
        KCl: 74.55,
        CaCl2: 110.98,
        CuSO4: 249.68,
        Na2CO3: 105.99,
        KNO3: 101.10,
        NH4Cl: 53.49,
        ZnSO4: 161.44,
        NaHCO3: 84.01,
        MgSO4: 120.37,
    };
    return molarMasses[salt] || 0;
};

// Function to calculate mass needed based on concentration type
const calculateMass = (molarity, volume, molarMass) => {
    return molarity * volume * molarMass; // Mass = Molarity * Volume * Molar Mass
};

// Function to handle form submission
const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const salt = document.getElementById('salt').value;
    const concentrationType = document.getElementById('concentrationType').value;
    const molarityValue = document.getElementById('molarityValue').value;
    const volume = parseFloat(document.getElementById('volume').value);
    const volumeUnit = document.getElementById('volumeUnit').value;
    const molarMass = getMolarMass(salt);
    
    // Convert volume to liters if it's in milliliters
    const volumeInLiters = volumeUnit === 'mL' ? volume / 1000 : volume;

    let massNeeded = 0;

    // Calculate based on selected concentration type
    if (concentrationType === 'molarity') {
        massNeeded = calculateMass(parseFloat(molarityValue), volumeInLiters, molarMass);
    } else if (concentrationType === 'molality') {
        // Placeholder for molality calculation, assuming density of water is approximately 1kg/L
        // This is a simplified calculation.
        massNeeded = calculateMass(parseFloat(molarityValue), volumeInLiters, molarMass) * 1; // Adjust if needed
    } else if (concentrationType === 'normality') {
        // Placeholder for normality calculation (same approach can be used as molarity)
        massNeeded = calculateMass(parseFloat(molarityValue), volumeInLiters, molarMass); // Adjust if needed
    }

    // Display the result
    document.getElementById('mass').innerText = `Mass needed: ${massNeeded.toFixed(2)} grams`;

    // Display additional salt information
    displaySaltInfo(salt);
};

// Function to reset the form and result
const resetForm = () => {
    document.getElementById('calculatorForm').reset();
    document.getElementById('mass').innerText = '';
    document.getElementById('additionalSaltInfo').style.display = 'none';
};

// Function to display additional salt information
const displaySaltInfo = (salt) => {
    const selectedOption = document.querySelector(`#salt option[value="${salt}"]`);
    document.getElementById('usesText').innerText = `Uses: ${selectedOption.getAttribute('data-uses')}`;
    document.getElementById('safetyText').innerText = `Safety: ${selectedOption.getAttribute('data-safety')}`;
    document.getElementById('chemicalPropertiesText').innerText = `Chemical Properties: ${selectedOption.getAttribute('data-chemical-properties')}`;
    document.getElementById('healthBenefitsText').innerText = `Health Benefits: ${selectedOption.getAttribute('data-health-benefits')}`;
    document.getElementById('environmentalImpactText').innerText = `Environmental Impact: ${selectedOption.getAttribute('data-environmental-impact')}`;
    document.getElementById('funFactsText').innerText = `Fun Facts: ${selectedOption.getAttribute('data-fun-facts')}`;
    document.getElementById('additionalSaltInfo').style.display = 'block';
};

// Event listeners
document.getElementById('calculatorForm').addEventListener('submit', handleFormSubmit);
document.getElementById('resetButton').addEventListener('click', resetForm);

// Show/hide concentration value input based on concentration type
document.getElementById('concentrationType').addEventListener('change', (event) => {
    const selectedType = event.target.value;
    const molarityValueSelect = document.getElementById('molarityValue');
    const concentrationValueInput = document.getElementById('concentrationValue');

    if (selectedType === 'molarity') {
        molarityValueSelect.style.display = 'block';
        concentrationValueInput.style.display = 'none';
    } else {
        molarityValueSelect.style.display = 'none';
        concentrationValueInput.style.display = 'block';
    }
});