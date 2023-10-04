document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Perform further validation and submission logic here
    // For simplicity, we'll just show an alert for now.
    alert(`Signup successful!\nUsername: ${username}\nEmail: ${email}`);
});
