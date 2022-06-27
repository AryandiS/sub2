import RestaurantSource from "../../data/restaurant-source";

const Home = {
  async render() {
    return `
    <section class="welcome_container">
      <img src="./images/heros/hero-image_2.jpg" alt="" />
      <div class="filter"></div>
      <div class="welcome">
        <h2 align="center">Welcome to RestLoc</h2>
        <h5 align="center">Let's explore the restaurant with us.</h5>
      </div>
    </section>

    <section class="about_container" id="content">
      <h3>Explore Restaurant</h3>
      <div class="about"></div>
    </section>
    `;
  },

  async afterRender() {
    const items_container = document.querySelector(".about");
    const items = await RestaurantSource.getRestaurantList();

    items.restaurants.forEach((restaurant) => {
      items_container.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
