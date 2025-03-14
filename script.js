document.getElementById('calculateBtn').addEventListener('click', function () {
    const radiusInput = document.getElementById('radius').value;
    const diameterInput = document.getElementById('diameter').value;
    const resultDiv = document.getElementById('result');

    let resultText = '';

    if (radiusInput) {
        const radius = parseFloat(radiusInput);
        if (!isNaN(radius) && radius > 0) {
            const circumferenceFromRadius = 2 * Math.PI * radius;
            resultText += `<p>Circumference using Radius (C = 2πr): ${circumferenceFromRadius.toFixed(2)}</p>`;
        } else {
            resultText += '<p>Please enter a valid positive number for Radius.</p>';
        }
    }

    if (diameterInput) {
        const diameter = parseFloat(diameterInput);
        if (!isNaN(diameter) && diameter > 0) {
            const circumferenceFromDiameter = Math.PI * diameter;
            resultText += `<p>Circumference using Diameter (C = πd): ${circumferenceFromDiameter.toFixed(2)}</p>`;
        } else {
            resultText += '<p>Please enter a valid positive number for Diameter.</p>';
        }
    }

    if (!radiusInput && !diameterInput) {
        resultText = '<p>Please enter a value for either Radius or Diameter.</p>';
    }

    resultDiv.innerHTML = resultText;
});
