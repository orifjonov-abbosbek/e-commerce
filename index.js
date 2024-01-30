// index.js

const Products = [
  {
    id: 1,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    image: "./assets/blinchik.png",
    rate: 4.5,
    price_with_card: "44,50₽",
    price_without_card: "140,50 ₽",
    country: "Russia",
    massa: "250ml",
  },
  {
    id: 2,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    image: "./assets/moloko.png",
    rate: 3,
    price_with_card: "69.99 ₽",
    price_without_card: "140,50 ₽",
    country: "Russia",
    massa: "250ml",
  },
  {
    id: 3,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    image: "./assets/colbasa.png",
    rate: 3.8,
    price_with_card: "599,99 ₽",
    price_without_card: 24.99,
    country: "Russia",
    massa: "200g",
  },
  {
    id: 4,
    name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    image: "./assets/colbasa-m.png",
    rate: 4.2,
    price_with_card: "44,50 ₽",
    price_without_card: 59.99,
    country: "United Kingdom",
    massa: "300g",
  },

  {
    id: 5,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    image: "./assets/sosiska.png",
    rate: 0.2,
    price_with_card: "159,99 ₽",
    price_without_card: 59.99,
    country: "Russia",
    massa: "300g",
  },
  {
    id: 6,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    image: "./assets/yogurt.png",
    rate: 4.2,
    price_with_card: "29,99 ₽",
    price_without_card: 59.99,
    country: "Russia",
    massa: "300g",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const saleList = document.querySelector(".sale_list");
  const newList = document.querySelector(".new_list");
  const oldList = document.querySelector(".old_list");

  // Function to render products in a list
  function renderProducts(list, products) {
    products.slice(0, 4).forEach((product) => {
      const listItem = document.createElement("li");
      listItem.classList.add("sale_list_item");

      const stars = "★".repeat(Math.floor(product.rate));
      const halfStar = product.rate % 1 !== 0 ? "★" : "";
      const emptyStars = "☆".repeat(5 - Math.floor(product.rate));

      listItem.innerHTML = `
            <div class="card_img">
              <img src="${product.image}" alt="${product.name}">
              <div class="like_icon">
              <svg class="like_icon_svg" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2046 4.25644C14.3299 3.13067 15.8564 2.49817 17.4482 2.49817C19.0399 2.49817 20.5664 3.13063 21.6916 4.25636C22.8174 5.38164 23.45 6.90829 23.45 8.49999C23.45 10.0917 22.8175 11.6183 21.6917 12.7435C21.6917 12.7436 21.6917 12.7435 21.6917 12.7435L12.8517 21.5835C12.6565 21.7788 12.3399 21.7788 12.1446 21.5835L3.30461 12.7435C0.960963 10.3999 0.960963 6.60009 3.30461 4.25644C5.64826 1.91279 9.44807 1.91279 11.7917 4.25644L12.4982 4.96289L13.2046 4.25644C13.2046 4.25641 13.2046 4.25647 13.2046 4.25644ZM17.4482 3.49817C16.1217 3.49817 14.8496 4.02528 13.9118 4.96346L12.8517 6.02355C12.758 6.11732 12.6308 6.16999 12.4982 6.16999C12.3656 6.16999 12.2384 6.11732 12.1446 6.02355L11.0846 4.96355C9.13149 3.01042 5.96484 3.01042 4.01172 4.96355C2.05859 6.91667 2.05859 10.0833 4.01172 12.0364L12.4982 20.5229L20.9846 12.0364C21.9228 11.0987 22.45 9.82648 22.45 8.49999C22.45 7.17351 21.9229 5.90138 20.9847 4.96363C20.0469 4.02544 18.7747 3.49817 17.4482 3.49817Z" fill="#414141"/>
              </svg>
              </div>
            </div>
    
            <div class="card_content">
              <div class="price_box">
                <div>
                  <p class="price vcard">${product.price_with_card}</p>
                  <p class="type_payment">С картой</p>
                </div>
                <div>
                  <p class="price">${product.price_without_card}</p>
                  <p class="type_payment">Обычная</p>
                </div>
              </div>
              <h3 class="card_title">${product.name}</h3>
              <div class="star_rating">
                <span class="stars">${stars}</span>${halfStar}<span class="empty-stars">${emptyStars}</span>
              </div>
              <button class="v_korzinu">В корзину</button>
            </div>
          `;

      list.appendChild(listItem);

      const likeIcon = listItem.querySelector(".like_icon_svg");
      likeIcon.addEventListener("click", () => {
        likeIcon.classList.toggle("liked");
      });
    });
  }

  // Render products in both lists
  renderProducts(saleList, Products);
  renderProducts(newList, Products);
  renderProducts(oldList, Products)
});
