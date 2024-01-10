const baseUrl = "https://treasure-hunt-backend-test.onrender.com/";

// /users requests
function fetchData() {
  let url = baseUrl + `users/`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function checkRegisteredUser(userName, userPassword) {
  let url = baseUrl + `users/`;
  console.log(userName, userPassword);
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data[0].username);
      if (userName === data[0].username) {
        return data;
      } else {
        console.log("aefekjasudfakiej");
        // error? route to the page but with the 'Please log in' thing?
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// to edit the username or password, the request must be sent to the users endpoint
function editUsernameAndPassword(userInfo) {
  let url = baseUrl + `users/${userId}/`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// /profiles requests
// to edit the avatar or treasures, the request must be sent to the profiles endpoint
function editAvatarAndTreasures(userInfo) {
  //userInfo =  {userName, what to change, updated info }
  let url = baseUrl + `profiles/${userId}/`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function getUserTreasureCollection(userId) {
  let url = baseUrl + `profiles/${userId}/`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// /treasures requests
function getTreasureById(treasureId) {
  let url = baseUrl + `treasures/${treasureId}/`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function getAllTreasures() {
  let url = baseUrl + `treasures/`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function postLogin(username, password) {
  const url = baseUrl + "login";
  const reqBody = { username: username, password: password };
  const postObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  };
  return fetch(url, postObject)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}

function postNewUser(username, password) {
  const url = baseUrl + "users/";
  const reqBody = { username: username, password: password };
  const postObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  };
  return fetch(url, postObject)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
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

function getAllProfiles() {
  let url = `${baseUrl}users`;
  const pendingUsers = fetch(url);

  url = `${baseUrl}profiles`;
  const pendingProfiles = fetch(url);

  return Promise.all([pendingProfiles, pendingUsers])
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((res) => {
      const [profiles, users] = res;
      const usersIdAndNameObj = users.reduce((acc, item) => {
        const id = item.id;
        acc[id] = item.username;
        return acc;
      }, {});

      return profiles.map((profile) => {
        const id = profile.user_id;
        profile.user_name = usersIdAndNameObj[id];
        return profile;
      });
    })
    .catch((error) => {
      console.error("Error during fetch operation:", error);
    });
}

function patchProfileTreasure(user_id, userTreasure) {
  let url = baseUrl + "profiles/" + user_id + "/";
  const reqBody = { treasures: userTreasure}
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  })
  .then((response) => {
    return response.json();
  })
}

function IncrementTreasureCollectedBy(treasure_id) {
  let url = baseUrl + "treasures/" + treasure_id + "/";
  const reqBody = { increment_collected_by: true };
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  })
  .then((response) => {
    return response;
  })
}
function patchProfilefriends(user_id, friends) {
  let url = baseUrl + "profiles/" + user_id + "/";
  const reqBody = { friends: friends}
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  })
  .then((response) => {
    return response.json();
  })
}
function getUserByUserID(user_id){
  const url = baseUrl +`users/${user_id}/`
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export default {
  fetchData,
  editAvatarAndTreasures,
  editUsernameAndPassword,
  checkRegisteredUser,
  getUserTreasureCollection,
  getTreasureById,
  getAllTreasures,
  postLogin,
  postNewUser,
  editProfile,
  getAllProfiles,
  patchProfileTreasure,
  IncrementTreasureCollectedBy,
  patchProfilefriends,
  getUserByUserID
};
