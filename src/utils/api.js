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

function editProfile(userInfo) {
  //userInfo =  {userName, what to change, updated info }
}

export default { fetchData, editProfile, checkRegisteredUser };
