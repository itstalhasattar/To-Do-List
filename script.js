const form = document.querySelector(".input");
const listContainer = document.querySelector(".list-container");
let listItem; // Define listItem variable outside of the event listener

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const userInput = document.querySelector(".input-area").value;

  if (userInput == "") {
    alert("Input Field cannot be Empty!")
  } else {
    // Create a new <li> element
    listItem = document.createElement("li");
    listItem.textContent = userInput;

    // Append the new <li> element to the <ul> list container
    listContainer.appendChild(listItem);

    // Clear the input field
    document.querySelector(".input-area").value = "";
    
    let span = document.createElement("span");
    console.log(span)
    span.innerHTML= "\u00d7";
    listItem.appendChild(span);

    listContainer.addEventListener("click",(e)=> {
      if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked")
      }
      else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
      }
      

    },false)
  }
});