const compounds = [
    { name: 'Potassium Permanganate', formula: 'KMnO4', color: 'Purple', commonUses: 'Oxidizing agent in titrations', molWeight: 158.04, type: 'salt', shape: 'Crystals', cardColor: '#8E44AD' },
    { name: 'Oxalic Acid', formula: 'C2H2O4', color: 'White', commonUses: 'Cleaning agent, reducing agent', molWeight: 90.03, type: 'acid', shape: 'Crystals', cardColor: '#D35400' },
    { name: 'Boric Acid', formula: 'H3BO3', color: 'White', commonUses: 'Antiseptic, insecticide', molWeight: 61.83, type: 'acid', shape: 'Crystals', cardColor: '#C0392B' },
    { name: 'Hydrochloric Acid', formula: 'HCl', color: 'Colorless', commonUses: 'Stomach acid, pH adjustment', molWeight: 36.46, type: 'acid', shape: 'Liquid', cardColor: '#F39C12' },
    { name: 'Sulfuric Acid', formula: 'H2SO4', color: 'Colorless', commonUses: 'Battery acid, fertilizer', molWeight: 98.08, type: 'acid', shape: 'Liquid', cardColor: '#2980B9' },
    { name: 'Sodium Hydroxide', formula: 'NaOH', color: 'White', commonUses: 'Drain cleaner, soap making', molWeight: 40.00, type: 'base', shape: 'Granules', cardColor: '#27AE60' },
    // Additional compounds
    { name: 'Ethanol', formula: 'C2H5OH', color: 'Colorless', commonUses: 'Solvent, antiseptic', molWeight: 46.07, type: 'alcohol', shape: 'Liquid', cardColor: '#FFD700' },
    { name: 'Acetic Acid', formula: 'C2H4O2', color: 'Colorless', commonUses: 'Vinegar, food preservative', molWeight: 60.05, type: 'acid', shape: 'Liquid', cardColor: '#FF6347' },
    { name: 'Sodium Chloride', formula: 'NaCl', color: 'White', commonUses: 'Table salt, preservative', molWeight: 58.44, type: 'salt', shape: 'Crystals', cardColor: '#FFF' },
    { name: 'Citric Acid', formula: 'C6H8O7', color: 'Colorless', commonUses: 'Food additive, cleaning agent', molWeight: 192.13, type: 'acid', shape: 'Crystals', cardColor: '#FF4500' },
    { name: 'Sodium Bicarbonate', formula: 'NaHCO3', color: 'White', commonUses: 'Baking soda, antacid', molWeight: 84.01, type: 'base', shape: 'Crystals', cardColor: '#E8E8E8' },
    { name: 'Calcium Carbonate', formula: 'CaCO3', color: 'White', commonUses: 'Calcium supplement, antacid', molWeight: 100.09, type: 'salt', shape: 'Crystals', cardColor: '#D3D3D3' },
    { name: 'Ammonium Chloride', formula: 'NH4Cl', color: 'White', commonUses: 'Electrolyte in batteries, food additive', molWeight: 53.49, type: 'salt', shape: 'Crystals', cardColor: '#D1C4E9' },
    { name: 'Sodium Hydroxide', formula: 'NaOH', color: 'White', commonUses: 'Drain cleaner, soap making', molWeight: 40.00, type: 'base', shape: 'Granules', cardColor: '#FFCC00' },
    { name: 'Calcium Hydroxide', formula: 'Ca(OH)2', color: 'White', commonUses: 'Water treatment, food additive', molWeight: 74.09, type: 'base', shape: 'Powder', cardColor: '#B2DFDB' },
    { name: 'Magnesium Sulfate', formula: 'MgSO4', color: 'White', commonUses: 'Epsom salt, laxative', molWeight: 120.37, type: 'salt', shape: 'Granules', cardColor: '#FFE0B2' },
    { name: 'Acetone', formula: 'C3H6O', color: 'Colorless', commonUses: 'Solvent, nail polish remover', molWeight: 58.08, type: 'ketone', shape: 'Liquid', cardColor: '#B2EBF2' },
];

function displayCompounds(compounds) {
    const compoundsContainer = document.getElementById('compounds');
    compoundsContainer.innerHTML = '';
    compounds.forEach(compound => {
        const compoundCard = document.createElement('div');
        compoundCard.className = 'compound-card';
        compoundCard.style.backgroundColor = compound.cardColor;
        compoundCard.innerHTML = `
            <h3>${compound.name}</h3>
            <p><strong>Formula:</strong> ${compound.formula}</p>
            <p><strong>Color:</strong> ${compound.color}</p>
            <p><strong>Common Uses:</strong> ${compound.commonUses}</p>
            <p><strong>Molecular Weight:</strong> ${compound.molWeight} g/mol</p>
            <div class="button-box">
                <button class="attractive-button" onclick="openModal('${compound.name}', '${compound.formula}', '${compound.color}', '${compound.commonUses}', ${compound.molWeight}, '${compound.shape}')">Details</button>
                <button class="attractive-button" onclick="speakCompound('${compound.name}', '${compound.formula}')">Listen</button>
            </div>
        `;
        compoundsContainer.appendChild(compoundCard);
    });
}

function openModal(name, formula, color, commonUses, molWeight, shape) {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Formula:</strong> ${formula}</p>
        <p><strong>Color:</strong> ${color}</p>
        <p><strong>Common Uses:</strong> ${commonUses}</p>
        <p><strong>Molecular Weight:</strong> ${molWeight} g/mol</p>
        <p><strong>Shape:</strong> ${shape}</p>
    `;
    document.getElementById('detailsModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('detailsModal').style.display = 'none';
}

function speakCompound(name, formula) {
    const utterance = new SpeechSynthesisUtterance(`The compound is ${name}, its formula is ${formula}.`);
    window.speechSynthesis.speak(utterance);
}

function filterByType(type) {
    const filteredCompounds = type === 'all' ? compounds : compounds.filter(compound => compound.type === type);
    displayCompounds(filteredCompounds);
}

document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredCompounds = compounds.filter(compound => 
        compound.name.toLowerCase().includes(searchTerm) || 
        compound.formula.toLowerCase().includes(searchTerm)
    );
    displayCompounds(filteredCompounds);
});

document.getElementById('voiceSearch').addEventListener('click', function() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = function(event) {
        const spokenWord = event.results[0][0].transcript.toLowerCase();
        document.getElementById('searchInput').value = spokenWord;
        const filteredCompounds = compounds.filter(compound => 
            compound.name.toLowerCase().includes(spokenWord) || 
            compound.formula.toLowerCase().includes(spokenWord)
        );
        displayCompounds(filteredCompounds);
    };
    recognition.start();
});

// Initial display of compounds
displayCompounds(compounds);