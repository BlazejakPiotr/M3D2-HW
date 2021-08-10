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
  console.log(body);
}
