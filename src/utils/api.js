export default function fetchData() {
  fetch("https://elr143-news-server.onrender.com/api")
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((error) => console.error("Error fetching data:", error));
}
