const restaurantItemTemplate = (restaurant) => `
<a href="#" class="item">
    <div class="about-item">
      <img src="${restaurant.pictureId}" alt="${restaurant.name}">
    <div class="about-item-content">
      <h4>${restaurant.name}</h4>
      <span class="rating">
        <ion-icon name="star"></ion-icon>
        <span>${restaurant.rating}</span>
      </span>
      <p class="city">
        <ion-icon name="location"></ion-icon>
        <span>${restaurant.city}</span>
      </p>
      <p class="description">${
        descriptionrestaurant.description.slice(0, 350) +
        (restaurant.description.length > 350 ? "..." : "")
      }
    </div>
    </div>
  </a>
  `;

export { restaurantItemTemplate };
