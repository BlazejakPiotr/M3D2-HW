window.onload = function () {
  getMetallica();
  getEminem();
  getBehemoth();
};

function getMetallica() {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "279e107581mshe270dec94bc4d04p182ddbjsn2a5633307002",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((body) => {
      displaySomething(body);
    })
    .catch((err) => {
      console.error(err);
    });
}

function getEminem() {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "279e107581mshe270dec94bc4d04p182ddbjsn2a5633307002",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((body) => {
      displaySomething(body);
    })
    .catch((err) => {
      console.error(err);
    });
}
function getBehemoth() {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "279e107581mshe270dec94bc4d04p182ddbjsn2a5633307002",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((body) => {
      displaySomething(body);
    })
    .catch((err) => {
      console.error(err);
    });
}

function displaySomething(body) {
  const getRecentlyPlayedContainer = document.getElementById("recently-played");
  for (let i = 0; i < body["data"].length; i++) {
    let createAlbumNode = document.createElement("div");
    createAlbumNode.classList.add("col", "mb-4");
    createAlbumNode.innerHTML = `  <div id="card1" class="card h-100">
              <a href="#">
                <img
                  class="card-img-top"
                  src="${body.data[i].album.cover_xl}"
                  alt="${body.data[i].album.title}"
                />
                <div class="card-body">
                  <h5 class="card-title">${body.data[i].album.title}</h5>
                </div></a
              >
            </div>`;
    getRecentlyPlayedContainer.appendChild(createAlbumNode);
  }
}
