document.addEventListener("DOMContentLoaded", function () {
  const yogaButton = document.getElementById("yogabtn");
  const groupButton = document.getElementById("groupbtn");
  const soloButton = document.getElementById("solobtn");
  const stretchingButton = document.getElementById("stretchingbtn");

  yogaButton.addEventListener("click", function () {
    changeContent("yoga");
  });
  groupButton.addEventListener("click", function () {
    changeContent("group");
  });
  soloButton.addEventListener("click", function () {
    changeContent("solo");
  });
  stretchingButton.addEventListener("click", function () {
    changeContent("stretching");
  });

  function changeContent(type) {
    const classImage = document.querySelector("#classImage");
    const classText = document.getElementById("classText");

    switch (type) {
      case "yoga":
        classImage.src = "images/yoga.jpg";
        classText.innerHTML = "Why you should do Yoga?";
        break;
      case "group":
        classImage.src = "images/group.webp";
        classText.innerHTML = "Why you should join Group Class?";
        break;
      case "solo":
        classImage.src = "images/solo.jpg";
        classText.innerHTML = "Why you should go for Solo?";
        break;
      case "stretching":
        classImage.src = "images/stret.webp";
        classText.innerHTML = "Why you must always do Stretching?";
        break;
    }
  }
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
      header.classList.add("navbar-scrolled");
    } else {
      header.classList.remove("navbar-scrolled");
    }
  });

  /*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

  const height = document.querySelector("#heightInput");
  const weight = document.querySelector("#weightInput");
  const ucgen = document.querySelector("#bmi-pin");
  height.addEventListener("input", () => {
    console.log(height.value);
  });

  weight.addEventListener("input", () => {
    console.log(weight.value);
  });

  let bmiResult = height.addEventListener("input", () => {
    let bmi = weight.value / ((height.value / 100) * (height.value / 100));
    if (height.value <= 0 || height.value <= 0) {
      bmi = 0;
    }

    if (bmi > 0 && bmi < 18.5) {
      ucgen.style.left = 15 + "%";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      ucgen.style.left = 31 + "%";
    } else if (bmi >= 25 && bmi <= 29.9) {
      ucgen.style.left = 48 + "%";
    } else if (bmi >= 30 && bmi <= 34.9) {
      ucgen.style.left = 64 + "%";
    } else if (bmi >= 35) {
      ucgen.style.left = 81 + "%";
    } else {
      ucgen.style.left = 6 + "%";
    }
  });

  weight.addEventListener("input", () => {
    let bmi = weight.value / ((height.value / 100) * (height.value / 100));
    if (height.value <= 0 || height.value <= 0) {
      bmi = 0;
    }

    if (bmi > 0 && bmi < 18.5) {
      ucgen.style.left = 15 + "%";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      ucgen.style.left = 31 + "%";
    } else if (bmi >= 25 && bmi <= 29.9) {
      ucgen.style.left = 48 + "%";
    } else if (bmi >= 30 && bmi <= 34.9) {
      ucgen.style.left = 64 + "%";
    } else if (bmi >= 35) {
      ucgen.style.left = 81 + "%";
    } else {
      ucgen.style.left = 6 + 0 + "%";
    }
  });
});
