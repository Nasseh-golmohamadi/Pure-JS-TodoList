const formPart = document.querySelector("form");
const ulPart = document.querySelector("ul");
const main = document.querySelector("main");

let itemIndex = 0;

main.onclick = () => {
  main.classList.add("active");
};

const container = document.querySelector("#container");
window.onmousemove = function (e) {
  let x = e.clientX / 2;
  let y = e.clientY / 2;

  container.style.backgroundPositionX = x + "px";
  container.style.backgroundPositionY = y + "px";
};

let firstArray;

document.addEventListener("DOMContentLoaded", () => {
  firstArray = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];

  ulPart.innerHTML = "";
  firstArray.map((item, index) => {
    const newLi = document.createElement("li");
    newLi.setAttribute("id", "task" + (index + 1));
    handleIndex(index);
    newLi.innerHTML = item;
    ulPart.append(newLi);
    const i = document.createElement("i");
    i.className = "fa-solid fa-trash redired";
    newLi.append(i);
    const iOne = document.createElement("i");
    iOne.className = "fa-solid fa-circle-check";
    newLi.append(iOne);
  });
});

function removeLocalStorage(e) {
  let removedArray;
  if (localStorage.getItem("taskList") === null) {
    removedArray = [];
  } else {
    removedArray = JSON.parse(localStorage.getItem("taskList"));
  }

  removedArray.forEach((element, index) => {
    if (e.textContent === element) {
      removedArray.splice(index, 1);
    }
  });
  localStorage.setItem("taskList", JSON.stringify(removedArray));
  firstArray = [];
}

function handleIndex(index) {
  return (itemIndex = index + 1);
}

formPart.addEventListener("submit", (event) => {
  event.preventDefault();

  let userTask = event.target.elements.taskInput.value;
  firstArray.push(userTask);
  ulPart.innerHTML = "";

  firstArray.map((item, index) => {
    const newLi = document.createElement("li");
    newLi.setAttribute("id", "task" + (index + 1));
    newLi.innerHTML = item;
    handleIndex(index);
    ulPart.append(newLi);
    const i = document.createElement("i");
    i.className = "fa-solid fa-trash redired";
    newLi.append(i);
    const iOne = document.createElement("i");
    iOne.className = "fa-solid fa-circle-check";
    newLi.append(iOne);
  });

  const saveINLocal = (task) => {
    localStorage.setItem("taskList", JSON.stringify(task));
  };

  saveINLocal(firstArray);
  event.target.elements.taskInput.value = "";
});

function handleClick(event, id) {
  if (
    document
      .querySelector(`#${id} .fa-solid.fa-circle-check`)
      .classList.contains("active")
  ) {
    document
      .querySelector(`#${id} .fa-solid.fa-circle-check`)
      .classList.remove("active");
    document.querySelector(`#${id}`).style.backgroundColor = "#fff";
  } else {
    document
      .querySelector(`#${id} .fa-solid.fa-circle-check`)
      .classList.add("active")
    document.querySelector(`#${id}`).style.backgroundColor = "transparent"
  }

  // if(){  2Y1I8`88            

  // }

  // document.querySelector('.')
}

ulPart.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-trash")) {
    event.target.parentElement.remove();
    removeLocalStorage(event.target.parentElement);
  }
  console.log(event);
  // console.log(event.target.id, "task" + itemIndex);

  handleClick(event, event.target.id);

  if (event.target.id == "task" + itemIndex) {
    // console.log("this is target");
    // event.target.firstChild.remove();
    // event.target.style.backgroundColor = "#ffffff7c";
  } else {
    // console.log("other items");
    // event.target.innerHTML =
    //   `<i class="fa-solid fa-circle-check" style="color:green;"></i>` +
    //   event.target.innerHTML;
    // event.target.style.backgroundColor = "transparent";
  }
});

// if (event.target.firstChild.classList.contains("fa-circle-check")) {
//   event.target.firstChild.remove();
//   event.target.style.backgroundColor = "#ffffff7c";
// }else{
//   event.target.innerHTML =
//   `<i class="fa-solid fa-circle-check" style="color:green;"></i>` +
//   event.target.innerHTML;
// event.target.style.backgroundColor = "transparent";
