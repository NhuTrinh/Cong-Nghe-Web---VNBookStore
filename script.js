
window.addEventListener('scroll', function () {
    const header = document.getElementById('main-title');
    const menu = document.getElementById('vnbookstore');
    if (window.scrollY > 50) {
        header.style.display = 'none'
        menu.style.display = 'block'
    } else {
      header.style.display = 'block' 
    }
  });