const form = document.querySelector(".input");
const listContainer = document.querySelector(".list-container");
let listItem; // Define listItem variable outside of the event listener

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const userInput = document.querySelector(".input-area").value;

  if (userInput == "") {
  } else {
    // Create a new <li> element
    listItem = document.createElement("li");
    listItem.textContent = userInput;

    // Append the new <li> element to the <ul> list container
    listContainer.appendChild(listItem);

    // Clear the input field
    document.querySelector(".input-area").value = "";
  }
});
