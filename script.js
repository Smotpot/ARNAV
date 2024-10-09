document.addEventListener("DOMContentLoaded", function () {
    const calculatorForm = document.getElementById("calculatorForm");
    const resultElement = document.getElementById("mass");
    const additionalSaltInfo = document.getElementById("additionalSaltInfo");
    const usesText = document.getElementById("usesText");
    const safetyText = document.getElementById("safetyText");
    const chemicalPropertiesText = document.getElementById("chemicalPropertiesText");
    const healthBenefitsText = document.getElementById("healthBenefitsText");
    const environmentalImpactText = document.getElementById("environmentalImpactText");
    const funFactsText = document.getElementById("funFactsText");
    const resetButton = document.getElementById("resetButton");

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
            C2H2O4: 90.03,  // Oxalic Acid
            Bohar:  136.07, // Bohar Salt (if considering as Borax, Na2B4O7·10H2O)
            KMnO4: 158.04,  // Potassium Permanganate
            HCl: 36.46,     // Hydrochloric Acid
            NaOH: 40.00,    // Sodium Hydroxide
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
            massNeeded = calculateMass(parseFloat(molarityValue), volumeInLiters, molarMass); // Adjust if needed
        } else if (concentrationType === 'normality') {
            // Placeholder for normality calculation (same approach can be used as molarity)
            massNeeded = calculateMass(parseFloat(molarityValue), volumeInLiters, molarMass); // Adjust if needed
        }

        // Display the result
        resultElement.innerText = `Mass needed: ${massNeeded.toFixed(2)} grams`;

        // Display additional salt information
        displaySaltInfo(salt);
    };

    // Function to reset the form and result
    const resetForm = () => {
        document.getElementById('calculatorForm').reset();
        resultElement.innerText = '';
        additionalSaltInfo.style.display = 'none';
    };

    // Function to display additional salt information
    const displaySaltInfo = (salt) => {
        const selectedOption = document.querySelector(`#salt option[value="${salt}"]`);
        usesText.innerText = `Uses: ${selectedOption.getAttribute('data-uses')}`;
        safetyText.innerText = `Safety: ${selectedOption.getAttribute('data-safety')}`;
        chemicalPropertiesText.innerText = `Chemical Properties: ${selectedOption.getAttribute('data-chemical-properties')}`;
        healthBenefitsText.innerText = `Health Benefits: ${selectedOption.getAttribute('data-health-benefits')}`;
        environmentalImpactText.innerText = `Environmental Impact: ${selectedOption.getAttribute('data-environmental-impact')}`;
        funFactsText.innerText = `Fun Facts: ${selectedOption.getAttribute('data-fun-facts')}`;
        additionalSaltInfo.style.display = 'block';
    };

    // Event listeners
    calculatorForm.addEventListener('submit', handleFormSubmit);
    resetButton.addEventListener('click', resetForm);

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
});