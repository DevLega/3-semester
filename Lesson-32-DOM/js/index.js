const ol = document.getElementById("ol");
const p = document.createElement("p");
const p1 = document.createElement("p");

p.textContent = "Hello, World!";
ol.before(p); // вставлення перед ol

p1.textContent = "Hello, JavaScript!";
ol.after(p1); // вставлення після ol

const liFirst = document.createElement("li");
liFirst.textContent = "First li";
ol.prepend(liFirst); // вставлення в початок списку

const liLast = document.createElement("li");
liLast.textContent = "Last li";
ol.append(liLast); // вставлення в кінець списку

document.body.append(document.createElement("hr"));

//

const img = document.createElement("img");
console.dir(img);
img.alt = "image";
img.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZU4zlcHK3iTVky-UYRMgWRGLLWc0Qh88RAw&s";
img.style.width = "200px";

const button = document.createElement("button");
button.innerHTML = `<strong>Hello</strong>`;

document.body.append(img, button);

//

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorPicker = document.querySelector(".color-picker ");

colorPickerOptions.forEach(({ label, color }) => {
  const option = document.createElement("button");
  option.textContent = label;
  option.style.backgroundColor = color;
  option.addEventListener("click", () => {
    document.body.style.backgroundColor = color;
  });
  colorPicker.append(option);
});

//

const stringList = `<h3>ToDoList</h3>
  <input type="text" class="todo-input">
  <button class="add-todo">Add ToDo</button>
  <ol class="todo-list"></ol>`;

document.body.insertAdjacentHTML("beforeend", stringList);

const todoList = document.querySelector(".todo-list");
const todoButton = document.querySelector(".add-todo");
const todoInput = document.querySelector(".todo-input");

const addTodoBtn = todoButton.addEventListener("click", () => {
  if (todoInput.value === "") return;
  const li = document.createElement("li");
  li.textContent = todoInput.value.trim();
  todoList.append(li);
  todoInput.value = "";
});

//

const el = document.createElement("ul");
document.body.append(el);

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  el.append(li);
}

//

const productList = document.createElement("div");
productList.style.display = "flex";
productList.style.gap = "30px";
document.body.append(productList);

const addProduct = (name, description, price) => {
  const article = `<article class="product">
        <h2 class="product__name">${name}</h2>
        <p class="product__descr">${description}</p>
        <p product__pridct>Ціна: ${price}$</p>
      </article>`;

  productList.insertAdjacentHTML("beforeend", article);
};

addProduct("Shaurma", "Smachna", 1000);
addProduct("Shaurmads", "dfSmachna", 1534);

//

const images = [
  "https://images.pexels.com/photos/16053278/pexels-photo-16053278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/15851469/pexels-photo-15851469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const applyImages = (images) => {
  for (let el of images) {
    const imgEl = document.createElement("img");
    imgEl.src = el;

    document.getElementById("gallery").append(imgEl);
  }
};

applyImages(images);