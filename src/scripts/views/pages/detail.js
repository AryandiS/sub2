// import UrlParser from "../../routes/url-parser";
// import RestaurantSource from "../../data/restaurant-source";
// import { restaurantDetailTemplate } from "../templates/template-creator";
// import LikeButtonInitiator from "../../utils/like-button-initiator";

// const Detail = {
//   async render() {
//     return `
//     <div id="restaurant" class="restaurant"></div>
//     <div id="likeButtonContainer"></div>
//       `;
//   },

//   async afterRender() {
//     const url = UrlParser.parseActiveUrlWithoutCombiner();
//     const items = await RestaurantSource.Details(url.id);
//     const { restaurant } = items;
//     const restaurantContainer = document.querySelector("#restaurant");
//     restaurantContainer.innerHTML = restaurantDetailTemplate(restaurant);

//     LikeButtonInitiator.init({
//       likeButtonContainer: document.querySelector("#likeButtonContainer"),
//       restaurant,
//     });
//   },
// };

// export default Detail;
