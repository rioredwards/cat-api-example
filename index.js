console.log("hello, world!");

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
    console.log(data);
  })
  .catch((error) => {
    console.warn(error);
  });
