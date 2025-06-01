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

function setFooterYear() {
  const year = new Date().getFullYear();
  document.getElementById("footer-year").textContent = year;
}

// Load header and footer, and setup menu logic
loadHTML("header", "./common/header.html", setupMenuToggle);
loadHTML("footer", "./common/footer.html", setFooterYear);
