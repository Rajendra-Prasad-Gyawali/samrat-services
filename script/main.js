// Reusable function to load HTML and call a callback
async function loadHTML(id, file, callback) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Could not load ${file}`);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
    if (callback) callback();
  } catch (err) {
    console.error(err);
  }
}

// Setup menu toggle after header is loaded
function setupMenuToggle() {    
      document.getElementById('menu-toggle').addEventListener('click', function () {
          document.getElementById('mobile-menu').classList.toggle('hidden');
      });
      document.getElementById('menu-toggle-br').addEventListener('click', function () {
          document.getElementById('br-menu').classList.toggle('hidden');
      });
}

function updateLanguageLinks() {
  // Dynamically set language switch links
    const basePath = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost"
      ? ""
      : "/samrat-services";

    let currentPage = window.location.pathname.split("/").pop() || "index.html";
    if (!currentPage.includes(".")) currentPage += "index.html";

    document.querySelectorAll("a.lang-link").forEach(link => {
      const lang = link.dataset.lang;
      if(lang === "en"){
        link.href = `${basePath}/${lang}/${currentPage}`;
        return;
      }else{
        link.href = `${basePath}/${currentPage}`;
      }
    });
}

function setFooterYear() {
  const year = new Date().getFullYear();
  document.getElementById("footer-year").textContent = year;
}

// Load header, setup menu, and update lang links
loadHTML("header", "./common/header.html", () => {
  setupMenuToggle();
  updateLanguageLinks();
});

loadHTML("footer", "./common/footer.html", setFooterYear);
