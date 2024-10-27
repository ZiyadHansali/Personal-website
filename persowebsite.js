document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && validateEmail(email) && message) {
        alert("Thank you, " + name + "! Your message has been submitted.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields correctly.");
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
