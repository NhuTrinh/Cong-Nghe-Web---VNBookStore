window.addEventListener('scroll', function () {
    const header = document.getElementById('main-title');
    const menu = document.getElementById('vnbookstore');
    if (window.scrollY > 50) {
        header.style.display = 'none'
        menu.style.display = 'block'
    } else {
      header.style.display = 'block' 
      menu.style.display = 'none';
    }
});
  
const wrapper = document.getElementById("slider-track");
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("previous-button");
let countNext = 0;



const scrollAmount = wrapper.clientWidth;
nextBtn.addEventListener("click", () => {
  wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  countNext++;
  if (countNext > 0)
  {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'none'
    nextBtn.style.display = 'block'
  }
});

prevBtn.addEventListener("click", () => {
  wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  countNext--;
  if (countNext > 0)
    {
      prevBtn.style.display = 'block';
    } else {
    prevBtn.style.display = 'none'
    nextBtn.style.display = 'block'
    }
});