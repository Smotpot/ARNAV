function calculateConstant() {
    const constant = document.getElementById('constant').value;
    let result = '';

    switch(constant) {
        case 'Avogadro':
            result = 'Avogadro\'s Number: 6.02214076 × 10^23 mol^-1';
            break;
        case 'GasConstant':
            result = 'Gas Constant (R): 8.314 J/mol·K';
            break;
        case 'Planck':
            result = 'Planck\'s Constant: 6.62607015 × 10^-34 J·s';
            break;
        case 'Boltzmann':
            result = 'Boltzmann Constant: 1.380649 × 10^-23 J/K';
            break;
        default:
            result = 'Please select a constant.';
    }

    document.getElementById('result').innerHTML = result;
}