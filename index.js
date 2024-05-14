const catContainer = document.getElementById("cat-container");

const url =
  "https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_YNdBDkb6hJuKn2sTeEUeI2J2p14xqL77loXkCwJJVr284EgKEM1nSrVDrdrpCZKb";

fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data[0].breeds[0].name);

    const catBreedName = document.createElement("h2");
    catBreedName.innerText = data[0].breeds[0].name;

    const catImg = document.createElement("img");
    catImg.src = data[0].url;

    catContainer.appendChild(catBreedName);
    catContainer.appendChild(catImg);
  })
  .catch((error) => {
    console.warn(error);
  });
