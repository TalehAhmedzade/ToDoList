const addButton = document.querySelector(`.add-button`);
const mainDiv = document.querySelector(`.main`);
const inputDiv = document.querySelector(`.input-and-delete-button`);
const input = document.querySelector(`.input-and-delete-button input`);
const addedList = document.querySelector(`ul`);
const firstEmptyListButton = document.querySelector(
  `ul .input-and-delete-button button`
);
const firstEmptyList = document.querySelector(`ul .input-and-delete-button`);

const data = [];

firstEmptyListButton.addEventListener(`click`, () => {
  firstEmptyList.remove();
  data = data.filter((list) => list != newInput.textContent);
});
const firstEmptyListImgInButton = document.querySelector(`ul .input-and-delete-button button img`)
firstEmptyListButton.addEventListener(`mouseover`,()=>{
  firstEmptyListImgInButton.src = `./images/clearLogoHover.png`;
})
firstEmptyListButton.addEventListener(`mouseout`,()=>{
  firstEmptyListImgInButton.src = `./images/clearLogo.png`;
})

addButton.addEventListener(`click`, ()=>{
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
    newButton.addEventListener(`mouseover`,()=>{
      imgInButton.src = `./images/clearLogoHover.png`;
    })
    newButton.addEventListener(`mouseout`,()=>{
      imgInButton.src = `./images/clearLogo.png`;
    })
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
const arrangementImgInButton = document.querySelector(`.arrangement-button img`);
console.log(arrangementButton);
console.log(arrangementImgInButton);
arrangementButton.addEventListener(`mouseover`,(e)=>{
  arrangementImgInButton.src = `./images/BlackArrangementBottom.png`;
  e.preventDefault();
})
arrangementButton.addEventListener(`mouseout`,(e)=>{
  arrangementImgInButton.src = `./images/Group 38.png`;
  e.preventDefault();
})
arrangementButton.addEventListener("click", (e) => {
  if (arrangementImgInButton.getAttribute("src") === "./images/BlackArrangementBottom.png") {
    arrangementImgInButton.setAttribute("src", "./images/GrayArrangementTop.png");
    let noteList = document.querySelectorAll("ul li div input");
    noteList.forEach((note)=>{
      console.log(note)
    })
    data.sort();
    Array.from(noteList).forEach((input, i) => {
      input.value = data[i];
    });
  } 
  else {
    arrangementImgInButton.setAttribute("src", "./images/Group 38.png");
    let noteList = document.querySelectorAll("ul li div input");
    data.sort().reverse();
    Array.from(noteList).forEach((input, i) => {
      input.value = data[i];
    });
  }
  e.preventDefault();
});