// Load an external HTML component into a div by ID
async function loadComponent(id, filePath) {
  try {
    const response = await fetch(`../components/${filePath}`);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error("Component load error:", err);
  }
}

// (Optional) to mark the current active nav link
function initNav() {
  const links = document.querySelectorAll("nav a");
  const current = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
}
