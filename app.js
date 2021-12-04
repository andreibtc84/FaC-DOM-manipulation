console.log("Connection established!");

// FUNCTIONS:
// Is longer the 5 chars

const isLonger = (str) => (str.length > 5 ? true : false);

// Has at least one lowercase and uppercase letter

const caseCheck = (str) => {
  return /[a-z]/.test(str) && /[A-Z]/.test(str);
};

// Has at least two numbers

const numCheck = (str) => /(\D*\d){2,}/.test(str);

// DOM manipulation

// Declare variables

const username = document.querySelector("#username");
const submit = document.querySelector("#submit");
const userMessage = document.querySelector("#userMessage");
const userVal = username.value;

// Validate and send feedback to UI

const validation = (userVal) => {
  isLonger(userVal) === true &&
  caseCheck(userVal) === true &&
  numCheck(userVal) === true
    ? userMessage.append("Validation passed!")
    : userMessage.append("Invalid username, try again!");

  // Clear message to user

  setTimeout(function () {
    userMessage.innerText = "";
  }, 3000);
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  validation(username.value);
});
