console.log("✅ script.js loaded");
document.addEventListener('DOMContentLoaded', function () {
  const heroSection = document.querySelector('.hero');

  const images = [
    "https://images.birdfact.com/production/cockerel-with-chicken-group.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1642030312&s=199e9570bb058c3eec715b0e3d21f3fb",
    "https://www.fleurieumilkco.com.au/wp-content/uploads/2023/02/FMC-Green-Farm-13-2-1536x1024.jpg"
  ];

  let index = 0;

function changeHeroBackground() {
  heroSection.style.backgroundImage = `url('${images[index]}')`;
  heroSection.style.backgroundSize = 'cover';
  heroSection.style.backgroundPosition = 'center';
  heroSection.style.backgroundRepeat = 'no-repeat';
  index = (index + 1) % images.length;
}

  changeHeroBackground();
  setInterval(changeHeroBackground, 5000);

  const hamburger = document.getElementById('hamburger');
  const navList = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("productSearch");
  const productCards = document.querySelectorAll(".product-card");

  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    productCards.forEach(card => {
      const h3 = card.querySelector("h3");
      const productName = h3.textContent;

      if (productName.toLowerCase().includes(searchTerm)) {
        card.style.display = ""; // show
      } else {
        card.style.display = "none"; // hide
      }

      // Optional: highlight matched text
      h3.innerHTML = productName.replace(
        new RegExp(`(${searchTerm})`, "gi"),
        '<span class="highlight">$1</span>'
      );
    });

    // Remove highlights if search is empty
    if (searchTerm === "") {
      productCards.forEach(card => {
        const h3 = card.querySelector("h3");
        h3.innerHTML = h3.textContent;
      });
    }
  }

  searchInput.addEventListener("input", filterProducts);
});

