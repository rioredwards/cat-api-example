const catContainer = document.getElementById("cat-container");
const randomButton = document.getElementById("fetch-random");

randomButton.addEventListener("click", () => {
  const url =
    "https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_YNdBDkb6hJuKn2sTeEUeI2J2p14xqL77loXkCwJJVr284EgKEM1nSrVDrdrpCZKb";

  catContainer.innerHTML = "";

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data[0].breeds[0]);

      const catBreedName = document.createElement("h2");
      catBreedName.innerText = data[0].breeds[0].name;

      const catBreedDescription = document.createElement("p");
      catBreedDescription.innerText = data[0].breeds[0].description;

      const catImg = document.createElement("img");
      catImg.src = data[0].url;

      catContainer.appendChild(catBreedName);
      catContainer.appendChild(catBreedDescription);
      catContainer.appendChild(catImg);
    })
    .catch((error) => {
      console.warn(error);
    });
});
