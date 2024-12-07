document.getElementById('carbonCalculator').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar los valores ingresados
    const producto = document.getElementById('producto').value;
    const duracion = parseInt(document.getElementById('duracion').value);
    const electricidad = parseFloat(document.getElementById('electricidad').value);

    // Factor de emisión para electricidad (aproximado en kg CO2 por kWh)
    const electricidadFactor = 0.45;

    // Cálculo de emisiones de electricidad
    const emisionesElectricidad = electricidad * electricidadFactor * duracion;

    // Mostrar resultado
    document.getElementById('resultado').innerHTML = `
        <h2>Resultado</h2>
        <p>El proyecto "<strong>${producto}</strong>" tiene una huella de carbono estimada de 
        <strong>${emisionesElectricidad.toFixed(2)} kg CO2</strong> por su consumo eléctrico en ${duracion} meses.</p>
    `;
});
