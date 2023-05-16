const iconElements = document.querySelectorAll(".icon");
const categoryElements = document.querySelectorAll(".category");
const scoreElements = document.querySelectorAll(".score");
const avgMark = document.querySelector(".average");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].score;
    }
    const average = Math.floor(sum / data.length);
    console.log(average);
    avgMark.innerText = average;
  });

// Fetching category from local JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    categoryElements.forEach((element, index) => {
      element.textContent = data[index].category;
    });
  });

// Fetching scores from local JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    scoreElements.forEach((element, index) => {
      element.innerHTML = `${data[index].score}<span class="light">/ 100</span>`;
    });
  });

// Fetching icons from local JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    iconElements.forEach((element, index) => {
      element.innerHTML = `<img src= "${data[index].icon}">`;
    });
  });
