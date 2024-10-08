document.getElementById("calculatorForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const salt = document.getElementById("salt");
    const molarity = parseFloat(document.getElementById("molarity").value);
    const volume = parseFloat(document.getElementById("volume").value);
    
    // Calculate the mass (grams) needed
    const molarMasses = {
        NaCl: 58.44,
        KCl: 74.55,
        CaCl2: 110.98,
        CuSO4: 159.61,
        Na2CO3: 105.99,
        KNO3: 101.10,
        NH4Cl: 53.49,
        ZnSO4: 161.44,
        NaHCO3: 84.01,
        MgSO4: 120.37
    };

    const selectedSalt = salt.value;
    const molarMass = molarMasses[selectedSalt];

    if (molarMass) {
        const mass = molarity * volume * molarMass; // g = Molarity * Volume * Molar Mass

        // Display the result
        document.getElementById("mass").innerText = `Mass needed: ${mass.toFixed(2)} grams`;

        // Display additional information about the selected salt
        displaySaltInfo(salt);
    } else {
        document.getElementById("mass").innerText = "Please select a valid salt.";
    }
});

// Function to display additional information about the selected salt
function displaySaltInfo(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    
    document.getElementById("usesText").innerText = "Uses: " + selectedOption.dataset.uses;
    document.getElementById("safetyText").innerText = "Safety: " + selectedOption.dataset.safety;
    document.getElementById("chemicalPropertiesText").innerText = "Chemical Properties: " + selectedOption.dataset.chemicalProperties;
    document.getElementById("healthBenefitsText").innerText = "Health Benefits: " + selectedOption.dataset.healthBenefits;
    document.getElementById("environmentalImpactText").innerText = "Environmental Impact: " + selectedOption.dataset.environmentalImpact;
    document.getElementById("funFactsText").innerText = "Fun Facts: " + selectedOption.dataset.funFacts;
}

// Reset button functionality
document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("calculatorForm").reset();
    document.getElementById("mass").innerText = "";
    document.getElementById("additionalSaltInfo").style.display = "none";
});

// Show additional salt info when an option is selected
document.getElementById("salt").addEventListener("change", function() {
    document.getElementById("additionalSaltInfo").style.display = "block"; // Show info section
    displaySaltInfo(this); // Update info with the selected salt
});