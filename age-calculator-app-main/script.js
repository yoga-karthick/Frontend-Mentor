// Selecting elements
const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submitBtn = document.querySelector(".submit-btn");

const inputYear = document.querySelector("#year");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");

const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

// Function to validate the day input
function validateDay() {
  const dayValue = inputDay.value.trim();
  if (dayValue === "") {
    errorDay.textContent = "This field is required";
  } else if (+dayValue < 1 || +dayValue > 31) {
    errorDay.textContent = "Must be a valid day (1-31)";
  } else {
    errorDay.textContent = "";
  }
}

// Function to validate the month input
function validateMonth() {
  const monthValue = inputMonth.value.trim();
  if (monthValue === "") {
    errorMonth.textContent = "This field is required";
  } else if (+monthValue < 1 || +monthValue > 12) {
    errorMonth.textContent = "Must be a valid month (1-12)";
  } else {
    errorMonth.textContent = "";
  }
}

// Function to validate the year input
function validateYear() {
  const yearValue = inputYear.value.trim();
  if (yearValue === "") {
    errorYear.textContent = "This field is required";
  } else if (+yearValue > 2023) {
    errorYear.textContent = "Must be a valid year";
  } else {
    errorYear.textContent = "";
  }
}

// Function to calculate the age
function calculateAge() {
  const dayValue = inputDay.value.trim();
  const monthValue = inputMonth.value.trim();
  const yearValue = inputYear.value.trim();

  // Checking if any field is empty
  if (dayValue === "" || monthValue === "" || yearValue === "") {
    alert("Please fill in all fields");
    return;
  }

  // Validating inputs
  validateDay();
  validateMonth();
  validateYear();

  // Checking if there are any validation errors
  if (
    errorDay.textContent !== "" ||
    errorMonth.textContent !== "" ||
    errorYear.textContent !== ""
  ) {
    return;
  }

  // Calculating the age
  const birthday = new Date(`${monthValue}/${dayValue}/${yearValue}`);
  const currentDate = new Date();
  const ageDiff = currentDate - birthday;
  const ageDate = new Date(ageDiff);
  const ageYears = ageDate.getUTCFullYear() - 1970;
  const ageMonths = ageDate.getUTCMonth();
  const ageDays = ageDate.getUTCDate();

  // Displaying the age
  outputYear.textContent = ageYears;
  outputMonth.textContent = ageMonths;
  outputDay.textContent = ageDays;
}

// Event listeners
submitBtn.addEventListener("click", calculateAge);
inputDay.addEventListener("input", validateDay);
inputMonth.addEventListener("input", validateMonth);
inputYear.addEventListener("input", validateYear);
