async function loadNavbar() {

    const navbar = document.getElementById("navbar");

    if (!navbar) {
        console.error("Navbar container not found");
        return;
    }

    try {

        const response = await fetch("../components/human-nav.html");

        if (!response.ok) {
            throw new Error(
                `HTTP ${response.status}: ${response.statusText}`
            );
        }

        const html = await response.text();

        navbar.innerHTML = html;

        console.log("Navbar loaded successfully");

    } catch (error) {

        console.error("Failed to load navbar:", error);

    }
}


document.addEventListener("DOMContentLoaded", loadNavbar);