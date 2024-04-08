//birinci x i duzeltmek isteyirem
let removeButtons = document.querySelectorAll(`ul button`);
let list = document.querySelectorAll(`li`);
//helelik bu qeder. !Problem x e basilanda butun listler silinir. Arasdirr
// input elave etmek hissesi :

const inputButton = document.querySelector(`.button .input`);
const ul = document.querySelector(`ul`);

// console.log(inputButton);
// console.log(ul);
let data = [];

inputButton.addEventListener(`click`, () => {
  let firstLi = document.querySelector(`#first`);
  let newLi = document.createElement(`li`);
  let newButton = document.createElement(`button`);
  let newInput = document.createElement(`input`);
  newButton.type = `button`;
  newButton.innerText = `x`;
  newInput.placeholder = `Notunuzu daxil edin...`;
  newInput.type = `text`;
  newInput.name = `input-text`;
  newInput.classList.add(`input-text`);
  newLi.append(newButton);
  newLi.append(newInput);
  ul.insertBefore(newLi, ul.children[0]);
  //silinme buttonun ele icinde teyin etmekle problemimiz hell tapir...
  newButton.addEventListener(`click`, (event) => {
    newLi.remove();
    firstLi.remove();
  });
  
  //Elave et duymesinin strukturunu qurmaga calisacam

  //Elave et dediymiz zaman diger inputlar ardiq elcatmaz olmalidir... y
  //ya da olmali deyil ??
  //elave et duymesinin meqsedi inputun daxilinde yazilan metnin input daxilinde qalmagidi
  //hee onda inputumuzda artiq deyisikliyin qarsisi alinmalidi duymeye kliklendiyi zaman
  //formdan istifade etmeliyik.
  // const inputForm = document.querySelector(`.input-form`)
  // console.log(inputAddButton)

  let inputAddButton = document.querySelector(`.button .addition`);
  inputAddButton.addEventListener(`click`, (event) => {
    newInput.disabled = true;
    // console.log(newInput.value);
  });
});

console.log(data);

//sort hissesi

//data arrayi yaradiriq her defe elave et dediymiz zaman bu arraya innerTextimiz elave edilmelidir
//bos deyerleri yoxlayin

//e.target.parrentElement()
//getelementByClassName();
