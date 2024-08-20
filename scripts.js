document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Toggle project details
    document.querySelectorAll(".project-img").forEach(img => {
        img.addEventListener("click", function() {
            const details = this.nextElementSibling.nextElementSibling;
            details.style.display = details.style.display === "none" ? "block" : "none";
        });
    });

    // Image enlargement
    document.querySelectorAll(".project-img").forEach(img => {
        img.addEventListener("click", function() {
            if (this.classList.contains("enlarged")) {
                this.style.width = "";
                this.style.height = "";
                this.classList.remove("enlarged");
            } else {
                this.style.width = "600px";
                this.style.height = "400px";
                this.classList.add("enlarged");
            }
        });
    });
});
