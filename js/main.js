//birinci x i duzeltmek isteyirem
const removeList = document.querySelectorAll(`ul button`);
const list = document.querySelectorAll(`li`);
console.log(removeList);
console.log(list);

//helelik bu qeder. !Problem x e basilanda butun listler silinir. Arasdirr
removeList.forEach((button) => {
  button.addEventListener(`click`, (element) => {
    console.log(button);
    list.forEach((li) => {
      li.remove();
    });
  });
});

// input elave etmek hissesi :

const inputButton = document.querySelector(`.button .input`);
const ul = document.querySelector(`ul`);
// console.log(inputButton);
// console.log(ul);

inputButton.addEventListener(`click`, () => {
  let newLi = document.createElement(`li`);
  let newButton = document.createElement(`button`);
  let newInput = document.createElement(`input`);
  newButton.type = `button`;
  newButton.innerText = `x`;
  newInput.placeholder = `Notunuzu daxil edin...`;
  newInput.type = `text`;
  newInput.name = `input-text`;
  newInput.classList.add(`input-text`);

  newLi.append(newButton, newInput);
  ul.append(newLi);
  console.log(ul);
});

//Elave et duymesinin strukturunu qurmaga calisacam

//Elave et dediymiz zaman diger inputlar ardiq elcatmaz olmalidir... y
//ya da olmali deyil ??
//elave et duymesinin meqsedi inputun daxilinde yazilan metnin input daxilinde qalmagidi
//hee onda inputumuzda artiq deyisikliyin qarsisi alinmalidi duymeye kliklendiyi zaman
//formdan istifade etmeliyik.
const inputAddButton = document.querySelector(`.button .addition`);
// const inputForm = document.querySelector(`.input-form`)
// console.log(inputAddButton)
inputAddButton.addEventListener(`click`, (event) => {

  const data = new FormData(event.target);
  console.log(data);
});
// inputForm.addEventListener((`submit`,(event)=>{
//     // const data = new FormData(event.target);
//     // console.log(data.get(`input-text`));
// }))
//PROBLEM: elave edilen lileri silmek olmur!!!