console.log("test");

const userFeedback = document.getElementById("user-feedback");
console.log(userFeedback);

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(userFeedback);
  console.log(formData);
  const formValues = Object.fromEntries(formData);
  console.table(formValues);
  const response = await fetch("http://localhost:8081/submitUserComment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const data = await response.json();
  console.log(data);
}

userFeedback.addEventListener("submit", handleSubmit);

const userComments = document.getElementById("previous-user-comments");
console.log(userComments);

async function getUserComments() {
  const response = await fetch("http://localhost:8081/userComments");
  console.log("jklajlkajlaj", response);
  const commentData = await response.json();
  console.log(commentData);
  commentData.forEach((element) => {
    let username = document.createElement("h2");
    username.classname = "username";
    let comment = document.createElement("p");
    comment.classname = "comment";
    username.textContent = `${element.user_name}`;
    comment.textContent = `${element.comment}`;
    userComments.appendChild(username);
    userComments.appendChild(comment);
  });
}

getUserComments();
