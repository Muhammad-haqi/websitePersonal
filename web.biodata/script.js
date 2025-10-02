document.addEventListener("DOMContentLoaded", () => {
  // Greeting berdasarkan jam
  const header = document.querySelector("header");
  const date = new Date();
  const hour = date.getHours();
  let greeting = "";


  // baris jadwal kuliah
  const rows = document.querySelectorAll("table tr");
  rows.forEach((row, index) => {
    if (index === 0) return; // skip header
    row.addEventListener("mouseenter", () => {
      row.style.backgroundColor = "#ffeaa7"; // kuning muda
    });
    row.addEventListener("mouseleave", () => {
      row.style.backgroundColor = "";
    });
  });

  // dark mode
  const footer = document.querySelector("footer");
  const btnToggle = document.createElement("button");
  btnToggle.textContent = "🌙 Dark Mode";
  btnToggle.style.marginLeft = "20px";
  btnToggle.style.padding = "5px 10px";
  btnToggle.style.borderRadius = "5px";
  btnToggle.style.border = "none";
  btnToggle.style.cursor = "pointer";
  footer.appendChild(btnToggle);

  btnToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      btnToggle.textContent = "☀️ Light Mode";
    } else {
      btnToggle.textContent = "🌙 Dark Mode";
    }
  });

 
  const style = document.createElement("style");
  style.innerHTML = `
    .dark-mode {
      background-color: #bdc3c7; /* abu muda */
      color: black; /* teks tetap hitam */
    }
    .dark-mode th {
      background-color: #95a5a6; /* abu sedang */
      color: black;
    }
    .dark-mode td {
      background-color: #ecf0f1; /* abu terang */
      color: black;
    }
    .dark-mode tr:hover {
      background-color: #dfe6e9;
    }
  `;
  document.head.appendChild(style);

  // Klik foto profil -> popup
  const profileImg = document.querySelector(".profile img");
  if (profileImg) {
    profileImg.style.cursor = "pointer";
    profileImg.addEventListener("click", () => {
      alert("Halo! Ini foto profil Muhammad Haqi Rasya Arazy 😁");
    });
  }
});
