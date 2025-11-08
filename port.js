// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
  }

  // Theme toggle logic
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("portfolio-theme", "light");
    } else {
      localStorage.setItem("portfolio-theme", "dark");
    }
  });
});
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
