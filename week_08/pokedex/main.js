let pokemons = [];

// Fetching Data
const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
    .then((response) => response.json())
    .then((json) => {
      const fetches = json.results.map((item) => {
        return fetch(item.url).then((res) => res.json());
      });

      Promise.all(fetches).then((data) => {
        pokemons = data;
        displayData(pokemons); // Display fetched data
        console.log(pokemons);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};

fetchData(); // Call fetchData function at the end

// Displaying Data
const displayData = (data) => {
  const container = document.querySelector(".data");
  container.innerHTML = "";

  data.forEach((pokemon) => {
    const pokemonCard = document.createElement("div");
    const imageUrl =
      pokemon.sprites.other.dream_world.front_default ??
      pokemon.sprites.other["official-artwork"].front_default ??
      "assets/placeholder-image-url.webp";

    const isFavorite = localStorage.getItem(pokemon.name) === "true";
    const favoriteText = isFavorite ? "Unmark favorite" : "Mark favorite";

    // Dynamically create HTML elements to display Pokemon data
    pokemonCard.innerHTML = `<h2>${pokemon.name}</h2>
    <img src="${imageUrl}"/>
    <div class="card">
      <p>Weight: ${pokemon.weight / 10} kg</p>
      <p>Height: ${pokemon.height / 10} m</p>
    </div>
    <button class="favButton" data-name=${
      pokemon.name
    }> ${favoriteText}</button>
    `;
    container.appendChild(pokemonCard);
  });
  addFavorites(); // Call addFavorites function
};

// Favorite Handling
const toggleFavorite = (e) => {
  const pokemonName = e.target.getAttribute("data-name");
  const isFavorite = localStorage.getItem(pokemonName) === "true";
  localStorage.setItem(pokemonName, !isFavorite); // Update favorite status in local storage
  displayData(pokemons); // Display data after toggling favorite status
};

const addFavorites = () => {
  // Add event listeners to favorite buttons
  document
    .querySelectorAll(".favButton")
    .forEach((button) => button.addEventListener("click", toggleFavorite));
};

// Utility Functions
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

// Search Functionality
const searchPokemons = debounce((searchInput) => {
  console.log("search triggered");
  const filteredData = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  displayData(filteredData); // Display filtered data
}, 300);

document.querySelector("#search").addEventListener("input", (e) => {
  searchPokemons(e.target.value); // Call searchPokemons function on input event
});


