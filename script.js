document.getElementById("concentrationType").addEventListener("change", function() {
    const concentrationType = this.value;
    const volumeSection = document.getElementById("volumeSection");
    const volumeLabel = document.getElementById("volumeLabel");
    
    if (concentrationType === "molality") {
        // Hide volume input for molality
        volumeSection.style.display = "none";
        volumeLabel.style.display = "none";
    } else {
        // Show volume input for molarity and normality
        volumeSection.style.display = "flex";
        volumeLabel.style.display = "block";
    }
});

document.getElementById("calculatorForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get input values
    const salt = document.getElementById("salt").value;
    const concentrationType = document.getElementById("concentrationType").value;
    const molarityValue = parseFloat(document.getElementById("molarityValue").value);
    const volume = concentrationType !== "molality" ? parseFloat(document.getElementById("volume").value) : 1; // Default volume to 1 for molality
    const volumeUnit = document.getElementById("volumeUnit").value;
    
    // Calculate mass based on salt type and concentration
    const molarMasses = {
        NaCl: 58.44,
        KCl: 74.55,
        CaCl2: 110.98,
        CuSO4: 249.68,
        Na2CO3: 105.99,
        KNO3: 101.1,
        NH4Cl: 53.49,
        ZnSO4: 161.47,
        NaHCO3: 84.01,
        MgSO4: 120.37,
        C2H2O4: 90.03,
        MohrSalt: 392.13,
        KMnO4: 158.04,
        HCl: 36.46,
        NaOH: 40.00
    };
    
    const molarMass = molarMasses[salt];
    let mass;

    if (concentrationType === "molarity") {
        mass = molarityValue * molarMass * (volumeUnit === "L" ? volume : volume / 1000);
    } else if (concentrationType === "molality") {
        mass = molarityValue * molarMass;
    } else if (concentrationType === "normality") {
        mass = molarityValue * molarMass * (volumeUnit === "L" ? volume : volume / 1000);
    }
    
    document.getElementById("mass").innerText = `You need ${mass.toFixed(2)} grams of ${salt}.`;
    document.getElementById("result").style.display = "block";

    // Display additional salt information
    const selectedSalt = document.querySelector("#salt option:checked");
    document.getElementById("usesText").innerText = `Uses: ${selectedSalt.getAttribute('data-uses')}`;
    document.getElementById("safetyText").innerText = `Safety: ${selectedSalt.getAttribute('data-safety')}`;
    document.getElementById("chemicalPropertiesText").innerText = `Chemical Properties: ${selectedSalt.getAttribute('data-chemical-properties')}`;
    document.getElementById("healthBenefitsText").innerText = `Health Benefits: ${selectedSalt.getAttribute('data-health-benefits')}`;
    document.getElementById("environmentalImpactText").innerText = `Environmental Impact: ${selectedSalt.getAttribute('data-environmental-impact')}`;
    document.getElementById("funFactsText").innerText = `Fun Facts: ${selectedSalt.getAttribute('data-fun-facts')}`;
    document.getElementById("additionalSaltInfo").style.display = "block";
});

document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("calculatorForm").reset();
    document.getElementById
    // Reset result and additional salt information
    document.getElementById("result").style.display = "none";
    document.getElementById("additionalSaltInfo").style.display = "none";
});