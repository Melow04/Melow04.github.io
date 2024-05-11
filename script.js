
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  function toggleVisibility() {
    var logo = document.querySelector('.logo');
    if (logo.style.display === 'none' || logo.style.display === '') {
        logo.style.display = 'block';
    } else {
        logo.style.display = 'none';
    }
}

