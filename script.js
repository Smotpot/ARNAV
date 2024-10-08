document.getElementById("calculatorForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the selected salt and its data attributes
    const saltSelect = document.getElementById("salt");
    const selectedOption = saltSelect.options[saltSelect.selectedIndex];
    const molecularMass = parseFloat(selectedOption.getAttribute("data-molecular-mass"));
    const saltDescription = selectedOption.getAttribute("data-description");
    const saltProperties = selectedOption.getAttribute("data-properties");

    // Get molarity and volume
    const molarity = parseFloat(document.getElementById("molarity").value);
    const volume = parseFloat(document.getElementById("volume").value);

    // Calculate mass (grams)
    const mass = molarity * molecularMass * volume; // Molarity * Molar Mass * Volume (in Liters)

    // Update the results section
    document.getElementById("mass").innerText = `Mass of ${selectedOption.value}: ${mass.toFixed(2)} grams`;
    document.getElementById("molecularMassValue").innerText = `${molecularMass} g/mol`;
    document.getElementById("formulaText").innerText = selectedOption.value;
    document.getElementById("descriptionText").innerText = saltDescription;
    document.getElementById("propertiesText").innerText = saltProperties;
});

// Reset functionality
document.getElementById("resetButton").addEventListener("click", function () {
    document.getElementById("calculatorForm").reset();
    document.getElementById("mass").innerText = '';
    document.getElementById("molecularMassValue").innerText = '';
    document.getElementById("formulaText").innerText = '';
    document.getElementById("descriptionText").innerText = '';
    document.getElementById("propertiesText").innerText = '';
});

// Button for getting molecular mass
document.getElementById("calculateMolecularMassButton").addEventListener("click", function () {
    const saltSelect = document.getElementById("salt");
    const selectedOption = saltSelect.options[saltSelect.selectedIndex];
    const molecularMass = selectedOption.getAttribute("data-molecular-mass");
    alert(`Molecular Mass of ${selectedOption.value} is ${molecularMass} g/mol`);
});