
const fetchData = () => {
  fetch("https://api.restful-api.dev/objects")
    .then((response) => response.json())
    .then((json) => {
        displayData(json);
      console.log(json);
    });
};

fetchData();

const displayData = (data) => {
  console.log(data);

  const container = document.querySelector(".demo");

  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
        <h2>${post.id}</h2>
        <p>${post.name}</p>
        <p>Year: ${post.data && post.data.year ? post.data.year : "N/A"}</p>
        <p>Price: ${post.data && post.data.price ? post.data.price : "N/A"}</p>
        <p>CPU Model: ${
          post.data && post.data["CPU model"] ? post.data["CPU model"] : "N/A"
        }</p>
        <p>Hard Disk Size: ${
          post.data && post.data["Hard disk size"]
            ? post.data["Hard disk size"]
            : "N/A"
        }</p>
        `;

    container.appendChild(postElement);
  });
};
