const wrapper = document.getElementById("slider-track");
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("previous-button");
let countNext = 0;

/*
Phương thức được sử dụng để ẩn title VNBookStore và hiện menu vnbookstore khi cuộn dọc cho home page
*/
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

/*
Phương thức được sử dụng để thực hiện tác vụ cuộn ngang cho Our Bestsellers cho home page"
*/
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