console.log("test");

const userFeedback = document.getElementById("user-feedback");
console.log(userFeedback);

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(userFeedback);
  console.log(formData);
  const formValues = Object.fromEntries(formData);
  console.table(formValues);
  const response = await fetch("http://localhost:8081/submittedUserComment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
  const data = await response.json();
  console.log(data);
}

userFeedback.addEventListener("submit", handleSubmit);

const userComments = document.getElementById("previous-user-comments");
console.log(userComments);

// async function getUserComments() {
//   const response = await fetch(
//     "https://cookie-upgrade-api.vercel.app/api/upgrades"
//   );
//   console.log(response);
//   const shopData = await response.json();
//   console.log(shopData);
//   shopUpgrades = shopData;
//   console.log(shopUpgrades);
//   renderShopUpgrades();
// }
// function addUserComments() {}
// DOM manipulation
//select the form and user feedback

//FORM
// event to submit the form data
//event handler
//prevent the default behaviour
//a formData object template
//get the formValues to insert into the FormData object
//!when you finish your assignment, make sure you replace the local host url with your deployed url https://week4-assignment-guestbook-2emj.onrender.com
//fetch the CREATE endpoint to send the form values to the server

// fetch ("localhost-url/endpoint"),
// {
//     method:
//     headers:
//     body:

// }
// the event listener --> submit

//FEEDBACK CONTAINER
//fetch the READ endpoint to have access to the data
//fetch the url

//parse the response into json
//wrangle data if necessary

// //I need to display the data on the page
// databaseData.forEach((item) => {
//   //I need to create DOM elements to contain the data
//   // !one DOM element (h1, h2, p, li) per piece of dat (username, comment..) --> if I am getting username and comment from the database, I need TWO DOM element, one for username and one for comments
//   //I ned to assign the values to the text content porperty
//   //for example, the text content property for my h1 will have a value of the username from my databse data
//   //I need to append thos elements to the DOM individualy
// });
