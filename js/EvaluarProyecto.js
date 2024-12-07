async function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const projectName = document.getElementById('projectName').value;
    const sector = document.getElementById('sector').value;
    const objective = document.getElementById('objective').value;
    const duration = document.getElementById('duration').value;
    const location = document.getElementById('location').value;
    const budget = document.getElementById('budget').value;

    doc.setFontSize(16);
    doc.text("Informe del Proyecto", 20, 20);

    doc.setFontSize(12);
    doc.text(`Nombre del Proyecto: ${projectName}`, 20, 40);
    doc.text(`Sector o Industria: ${sector}`, 20, 50);
    doc.text(`Objetivo: ${objective}`, 20, 60);
    doc.text(`Duración Estimada: ${duration} meses`, 20, 70);
    doc.text(`Ubicación Geográfica: ${location}`, 20, 80);
    doc.text(`Presupuesto Inicial: $${budget}`, 20, 90);

    doc.save(`${projectName}_Informe.pdf`);
}
