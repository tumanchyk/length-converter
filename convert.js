const conversionData = {
    m: 1.0,
    cm: 100.0,
    in: 39.3701,
    ft: 3.28084,
    mm: 1000.0,
    yd: 1.09361,
    km: 0.001,
};

function convert() {
    let inputValue = parseFloat(
        document.getElementById("inputValue").value
    );
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    if (fromUnit === toUnit) {
        document.getElementById("result").innerHTML = inputValue.toFixed(2);
        return;
    }

    let result = (inputValue * conversionData[toUnit]) / conversionData[fromUnit];
    if (typeof result === 'number' && !isNaN(result)) {
        document.getElementById("result").innerHTML = `${result.toFixed(2)} ${toUnit}`;
    } else {
        result = 0;
        document.getElementById("result").innerHTML = result.toFixed(2);
    }
    
}

