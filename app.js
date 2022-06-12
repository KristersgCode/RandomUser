async function getRandomUserData(gender, nationality, fetchCount) {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?gender=${gender}&nat=${nationality}&results=${fetchCount}`
    );
    const data = await response.json();
    console.log(data);
    generateCards(data);
  } catch (e) {
    console.log("There was a problem fetching data.");
  }
}

/*
document.querySelector("button").addEventListener("click", () => {
  const gender = document.querySelector('input[name="gender"]:checked').value;

  getRandomUserData(gender);
});
*/

document.querySelector("button").addEventListener("click", () => {
  const gender = document.getElementById("list").value;
  const nationality = document.getElementById("nationality-list").value;
  const fetchCount = document.getElementById("fetch-count").value;
  getRandomUserData(gender, nationality, fetchCount);
});

const generateCards = (data) => {
  data.results.forEach((data) => {
    const userCard = `
    <div class="card">
    <div class="content">
      <img
        src="${data.picture.medium}"
        alt=""
      />
      <p><b>Name</b>: ${data.name.first} ${data.name.last}</p>
      <p><b>Country</b>: ${data.location.country}</p>
      <p><b>City</b>: ${data.location.city}</p>
      <button class="connect-button">Connect</button>
    </div>
  </div>
</div>
 `;
    document.getElementById("results").innerHTML += userCard;
  });
};

/*
const generateCards = (data) => {
  data.results.map((data) => {
    const userCard = `
 <div><p>${data.name.first}</p>
 <p>${data.name.last}</p></div>
 `;
    document.getElementById("results").innerHTML += userCard;
  });
};
*/
