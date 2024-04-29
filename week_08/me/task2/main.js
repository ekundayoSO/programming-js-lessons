
const fetchData = () => {

  const proxyUrl = "https://api.allorigins.win/raw?url=";
  const apiUrl = "https://stephen-king-api.onrender.com/api/books";

  const url = proxyUrl + encodeURIComponent(apiUrl);

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      displayData(json.data);
      console.log(json.data);
    });
};

fetchData();

const displayData = (data) => {
  // console.log(data);

  const container = document.querySelector(".data");

  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
        <h2>${post.id}</h2>
        <p>${post.Year}</p> 
        <p>${post.Title}</p>
        <p>${post.handle}</p>
        <p>${post.Publisher}</p>
        <p>${post.ISBN}</p>
        <p>${post.Pages}</p>
        <p>${post.Notes}</p>
        <p>${post.created_at}</p>
        <p>${post.villains}</p>
        `;
   
    container.appendChild(postElement);
  });
};


