console.log("test");

const userFeedback = document.getElementById("user-feedback");
console.log(userFeedback);

//this looked like a really neat function to resize my comment box depending on the text content but I wasn't really sure where to put it in my js so it works
/* https://stackoverflow.com/questions/3392493/adjust-width-of-input-field-to-its-input */
// var commentInput = document.getElementById("comment-input"); // get the input element
// commentInput.addEventListener("comment-input", resizeInput); // bind the "resizeInput" callback on "input" event
// resizeInput.call(commentInput); // immediately call the function

// function resizeInput() {
//   this.style.width = this.value.length + "ch";
// }

const errorDiv = document.getElementById("error-message");

//this function checks if the user has submitted a user name and comment that exceeds the VARCHAR value for it and generates an error message if so
function validateForm(formValues) {
  if (formValues.user_name.length > 64) {
    errorDiv.textContent = "Your username is too long!";
    return false;
  }
  if (formValues.comment.length > 225) {
    errorDiv.textContent =
      "Your comment is too long, please shorten it to 225 characters!";
    return false;
  }
  errorDiv.textContent = "";
  return true;
}
async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(userFeedback);
  console.log(formData);
  const formValues = Object.fromEntries(formData);
  console.table(formValues);
  const inputOk = validateForm(formValues);
  if (!inputOk) {
    // this stops the data from being sent to the server if it exceeds the VARCHAR value
    return;
  }
  const response = await fetch("http://localhost:8081/submitUserComment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const data = await response.json();
  console.log(data);
  clearFormTextandThankYou();
  appendComment(formValues); //this appends the comment to the comments section after the user has submitted the comment
}

userFeedback.addEventListener("submit", handleSubmit);

//this function clears the form inputs after the user has submitted feedback and posts a thank you note
function clearFormTextandThankYou() {
  const nameInput = document.getElementById("user-name-input");
  nameInput.value = "";
  const commentInput = document.getElementById("comment-input");
  commentInput.value = "";
  const thankYouMessage = document.getElementById("thank-you-message");
  thankYouMessage.textContent = "Thank you for your feedback!";
}

const userCommentsContainer = document.getElementById(
  "previous-user-comments-container"
);
console.log(userCommentsContainer);

//this function communicates with my server
async function getUserComments() {
  const response = await fetch("http://localhost:8081/userComments");
  console.log("jklajlkajlaj", response);
  const commentData = await response.json();
  console.log(commentData);
  commentData.forEach(appendComment);
}

//I seperated this function from the getUserComments() so I can reuse it to append the comment after the user has submitted their comment
function appendComment(element) {
  let commentContainer = document.createElement("div");
  commentContainer.className = "commentContainer";
  let username = document.createElement("h2");
  username.className = "username";
  let comment = document.createElement("p");
  comment.className = "comment";
  username.textContent = `${element.user_name}`;
  comment.textContent = `${element.comment}`;
  commentContainer.appendChild(username);
  commentContainer.appendChild(comment);
  userCommentsContainer.appendChild(commentContainer);
}
getUserComments();
