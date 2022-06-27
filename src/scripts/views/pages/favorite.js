// import FavoriteRestaurantIdb from "../../data/favoriterestaurant-idb";
// import { restaurantItemTemplate } from "../templates/template-creator";

// const Favorite = {
//   async render() {
//     return `
//     <div class="content">
//         <h2 class="content__heading">Restoran Kesukaanmu</h2>
//         <div id="fav"></div>
//     </div>
//       `;
//   },

//   async afterRender() {
//     const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
//     const restaurantsContainer = document.querySelector("#fav");
//     restaurants.forEach((item) => {
//       restaurantsContainer.innerHTML += restaurantItemTemplate(item);
//     });
//   },
// };

// export default Favorite;
