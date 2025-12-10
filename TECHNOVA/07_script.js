document.getElementById("readBtn")?.addEventListener("click", function () {
    window.location.href = "#Blogs";   // scrolls to the Blogs section
});

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stops page reload (optional)
        alert("Your message has been sent successfully!");
        form.reset();
    });
}
