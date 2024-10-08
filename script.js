document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const salt = document.getElementById('salt');
    const volume = document.getElementById('volume').value;
    const molarity = salt.value;
    const molarMass = {
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

    const mass = molarity * molarMass[salt.value] * volume; // Mass in grams
    document.getElementById('mass').innerText = `You need ${mass.toFixed(2)} grams of ${salt.options[salt.selectedIndex].text}.`;

    // Display additional information about the selected salt
    document.getElementById('usesText').innerText = `Uses: ${salt.options[salt.selectedIndex].dataset.uses}`;
    document.getElementById('safetyText').innerText = `Safety: ${salt.options[salt.selectedIndex].dataset.safety}`;
    document.getElementById('chemicalPropertiesText').innerText = `Chemical Properties: ${salt.options[salt.selectedIndex].dataset.chemicalProperties}`;
    document.getElementById('healthBenefitsText').innerText = `Health Benefits: ${salt.options[salt.selectedIndex].dataset.healthBenefits}`;
    document.getElementById('environmentalImpactText').innerText = `Environmental Impact: ${salt.options[salt.selectedIndex].dataset.environmentalImpact}`;
    document.getElementById('funFactsText').innerText = `Fun Facts: ${salt.options[salt.selectedIndex].dataset.funFacts}`;
});

// Reset button functionality
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('calculatorForm').reset();
    document.getElementById('mass').innerText = '';
    document.getElementById('additionalSaltInfo').querySelectorAll('p').forEach(p => p.innerText = '');
});