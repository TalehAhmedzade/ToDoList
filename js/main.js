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
// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }
// </script>
// </head>
// <body>

// <p>Drag the W3Schools image into the rectangle:</p>

// <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
// <br>
// <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">
