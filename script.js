const form = document.querySelector(".input");
const listContainer = document.querySelector(".list-container");
let listItem; // Define listItem variable outside of the event listener
let idCounter = 0; 


form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  idCounter++;

  const userInput = document.querySelector(".input-area").value;

  if (userInput == "") {
    alert("Input Field cannot be Empty!")
  } else {
    // Create a new <li> element
    listItem = document.createElement("li");
    listItem.id = idCounter;
    listItem.textContent = userInput;

    // Append the new <li> element to the <ul> list container
    listContainer.appendChild(listItem);

    // Clear the input field
    document.querySelector(".input-area").value = "";
    
    let span = document.createElement("span");
    span.innerHTML= "\u00d7";
    listItem.appendChild(span);

    // before you had applied an event listener to the whole ul container that's why it was calling the event listener function more that once
    // that was causing it to recall itself over and over again
    // its better to apply it on the current li by getting it through the id you've set using the idCounter Var

    const currentLi = document.getElementById(idCounter);

    currentLi.addEventListener("click",(e)=> {
      if(e.target.tagName == 'LI'){
        console.log(e.target.classList);
        e.target.classList.toggle("checked")
        console.log(e.target.classList);
      }
      else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
      }
    },false)
  }
});

