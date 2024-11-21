// QR Code library from CDN
// QRCode is available globally

// Event Listener for Generate Button
document.getElementById("generate-btn").addEventListener("click", generateCard);

function generateCard() {
    // Get user input
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const website = document.getElementById("website").value;

    // Validation (basic)
    if (!name || !contact || !website) {
        alert("Please fill out all fields!");
        return;
    }

    // Populate Business Card
    document.getElementById("card-name").textContent = name;
    document.getElementById("card-contact").textContent = contact;
    document.getElementById("card-website").textContent = website;
    document.getElementById("card-website").setAttribute("href", website);

    // Display Business Card
    const card = document.getElementById("business-card");
    card.style.display = "block";

    // Generate QR Code
    const qrCanvas = document.getElementById("qr-code");
    QRCode.toCanvas(qrCanvas, `Name: ${name}\nContact: ${contact}\nWebsite: ${website}`, function (error) {
        if (error) console.error(error);
    });
}
