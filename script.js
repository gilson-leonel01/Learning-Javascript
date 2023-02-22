

  // create a new button element
  let button = document.createElement("button");

  // set the button's text and ID attributes
  button.innerHTML = "Click me";
  button.id = "myButton";

  // add an event listener to the button
  button.addEventListener("click", function() {
  alert("Button clicked!");
  });

  // add the button to the document
  document.body.appendChild(button);