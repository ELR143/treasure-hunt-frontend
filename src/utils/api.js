const baseUrl = "https://treasure-hunt-backend-test.onrender.com/";

function fetchData() {
  console.log("FETCHING");
  fetch("https://molchanova-nc-news.onrender.com/api")
    .then((res) => {
      const item = res.json();

      console.log(item, "HELLO");
      return item;
    })
    .then((result) => console.log(result, "EMMAs DATA"))
    .catch((error) => {
      console.log("FROM ERROR");

      console.error("Error fetching data:", error);
    });
}

function checkRegisteredUser(userName, userPassword) {
  // fetch("https://treasure-hunt-backend-test.onrender.com/users/").then(() => {
  //   //usersList => compare with username-userPassword
  //   //ok -> return true
  //   return true;
  // });
}

function editProfile(userInfo, tableName, id) {
  let url = `${baseUrl}${tableName}/${id}/`;
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })

    .catch((error) => {
      console.error("Error during fetch operation:", error);
    });
}

export default { fetchData, editProfile, checkRegisteredUser };
