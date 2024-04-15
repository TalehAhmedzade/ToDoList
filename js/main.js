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
let dataList = [];

firstEmptyListButton.addEventListener(`click`, () => {
  firstEmptyList.remove();
});

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

    newButton.addEventListener(`click`, () => {
      dataList.push(data.filter((inputText) => inputText !== newInput.value));
      div.remove();
    });
    input.value = ``;
  }
});

const createButton = document.querySelector(`.create-button`);

createButton.addEventListener(`click`, () => {
  inputDiv.style.display = `block`;
});

const arrangementButton = document.querySelector(`.arrangement-button`);

arrangementButton.addEventListener(`click`, () => {
  console.log(dataList.sort());
});
