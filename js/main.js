const addButton = document.querySelector(`.add-button`);
const mainDiv = document.querySelector(`.main`);
const inputDiv = document.querySelector(`.input-and-delete-button`);
const input = document.querySelector(`.input-and-delete-button input`);
const addedList = document.querySelector(`ul`);
const firstEmptyListButton = document.querySelector(
  `ul .input-and-delete-button button`
);
const firstEmptyList = document.querySelector(`ul .input-and-delete-button`);
const firstEmptyListInput = document.querySelector(
  `ul .input-and-delete-button input`
);
let data = [];

firstEmptyListButton.addEventListener(`click`, () => {
  firstEmptyList.remove();
});
const firstEmptyListImgInButton = document.querySelector(
  `ul .input-and-delete-button button img`
);
firstEmptyListButton.addEventListener(`mouseover`, () => {
  firstEmptyListImgInButton.src = `./images/clearLogoHover.png`;
});
firstEmptyListButton.addEventListener(`mouseout`, () => {
  firstEmptyListImgInButton.src = `./images/clearLogo.png`;
});

addButton.addEventListener(`click`, () => {
  if (input.value.trim() !== ``) {
    addedList.style.display = `block`;
    inputDiv.style.display = `none`;
    const li = document.createElement(`li`);
    addedList.append(li);
    const div = document.createElement(`div`);
    li.append(div);
    div.classList.add(`input-and-delete-button`);
    div.style.border = `none`;
    const newInput = document.createElement(`input`);
    newInput.type = "text";
    newInput.className = "input-text";
    newInput.value = input.value;
    data.push(input.value);
    newInput.disabled = `true`;
    div.append(newInput);

    const newButton = document.createElement(`button`);
    newButton.classList.add(`delete-button`);
    div.append(newButton);

    const imgInButton = document.createElement(`img`);
    imgInButton.src = `./images/clearLogo.png`;
    imgInButton.alt = `Clear Logo`;
    newButton.append(imgInButton);
    newButton.addEventListener(`mouseover`, () => {
      imgInButton.src = `./images/clearLogoHover.png`;
    });
    newButton.addEventListener(`mouseout`, () => {
      imgInButton.src = `./images/clearLogo.png`;
    });
    newButton.addEventListener(`click`, () => {
      div.remove();
      data = data.filter((list) => list != newInput.value);
    });
    input.value = ``;
  }
});

const createButton = document.querySelector(`.create-button`);

createButton.addEventListener(`click`, () => {
  inputDiv.style.display = `block`;
});

const arrangementButton = document.querySelector(`.arrangement-button`);
const arrangementImgInButton = document.querySelector(
  `.arrangement-button img`
);
arrangementButton.addEventListener(`mouseover`, (e) => {
  arrangementImgInButton.src = `./images/BlackArrangementBottom.png`;
  e.preventDefault();
});
arrangementButton.addEventListener(`mouseout`, (e) => {
  arrangementImgInButton.src = `./images/Group 38.png`;
  e.preventDefault();
});

// else if(arrangementImgInButton.src === `./images/GrayArrangementTop`){
//   arrangementButton.addEventListener(`mouseover`, (e) => {
//     arrangementImgInButton.src = `./images/BlackArrangementTop.png`;
//     e.preventDefault();
//   });
//   arrangementButton.addEventListener(`mouseout`, (e) => {
//     arrangementImgInButton.src = `./images/GrayArrangementTop.png`;
//     e.preventDefault();
//   });
// }

arrangementButton.addEventListener("click", (e) => {
  if (
    arrangementImgInButton.getAttribute("src") ===
    "./images/BlackArrangementBottom.png"
  ) {
    arrangementImgInButton.setAttribute(
      "src",
      "./images/GrayArrangementTop.png"
    );
    arrangementButton.addEventListener(`mouseover`, (e) => {
      arrangementImgInButton.src = `./images/BlackArrangementTop.png`;
      e.preventDefault();
    });
    arrangementButton.addEventListener(`mouseout`, (e) => {
      arrangementImgInButton.src = `./images/GrayArrangementTop.png`;
      e.preventDefault();
    });

    let noteList = document.querySelectorAll("ul li div input");
    data.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    noteList.forEach((input, index) => {
      input.value = data[index];
    });
  } else {
    arrangementImgInButton.setAttribute("src", "./images/Group 38.png");
    arrangementButton.addEventListener(`mouseover`, (e) => {
      arrangementImgInButton.src = `./images/BlackArrangementBottom.png`;
      e.preventDefault();
    });
    arrangementButton.addEventListener(`mouseout`, (e) => {
      arrangementImgInButton.src = `./images/Group 38.png`;
      e.preventDefault();
    });
    let noteList = document.querySelectorAll("ul li div input");
    data
      .sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      })
      .reverse();
    noteList.forEach((input, index) => {
      input.value = data[index];
    });
  }
  console.log(data);
  e.preventDefault();
});




//drag and dropa aid numune arasdir!

// Event handler for allowing drop operations.
function allowDrop(ev) {
  ev.preventDefault(); // Prevent default behavior to allow dropping.
}

// Event handler for starting a drag operation.
function drag(ev) {
  // Set the ID of the element being dragged.
  ev.dataTransfer.setData("text", ev.target.id);
}

// Event handler for dropping a dragged item.
function drop(ev) {
  ev.preventDefault(); // Prevent default behavior to allow dropping.
  // Get the ID of the element being dropped.
  const draggedElementId = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(draggedElementId);

  // If the drop target is a list item or a list div, insert the dragged element before it.
  if (ev.target.tagName === "LI" || ev.target.classList.contains("input-and-delete-button")) {
    const targetElement = ev.target.closest("li");
    // Insert the dragged element before the target element.
    targetElement.parentNode.insertBefore(draggedElement.parentNode, targetElement);
  }
}

// Add drag-and-drop attributes and event handlers to existing list items.
function setupDragAndDrop() {
  // Get all list items.
  const listItems = document.querySelectorAll("ul li div");

  listItems.forEach((div) => {
    const li = div.parentNode;
    // Set a unique ID to the list item.
    li.setAttribute("id", `list-item-${Math.random().toString(36).substring(7)}`);
    // Make the list item draggable.
    div.setAttribute("draggable", "true");
    // Add drag event handlers.
    div.addEventListener("dragstart", drag);
  });

  const listContainer = document.querySelector("ul");
  // Add the drop and allowDrop event handlers to the list container.
  listContainer.addEventListener("dragover", allowDrop);
  listContainer.addEventListener("drop", drop);
}

// Call setupDragAndDrop to initialize drag-and-drop functionality.
setupDragAndDrop();
