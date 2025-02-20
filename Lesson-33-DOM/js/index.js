const targetBtn = document.querySelector('.js-target-btn');
const addBtn = document.querySelector('.js-add-btn');
const removeBtn = document.querySelector('.js-remove-btn');

const click = () => {
  console.log("click");
};

addBtn.addEventListener('click', () => {
  console.log("add click event");
  targetBtn.addEventListener('click', click);
});

removeBtn.addEventListener('click', () => {
  console.log("remove click event");
  targetBtn.removeEventListener('click', click);
});

targetBtn.addEventListener('click', (event) => {
  console.log("Event type: ", event.type);
  console.log("Event target: ", event.target);
  console.log("Event current target: ", event.currentTarget);
  console.log("Event client x: ", event.clientX);
  console.log("Event client y: ", event.clientY);
});

//

const text = document.querySelector('.js-task-text');
const textBtn = document.querySelector('.js-task-btn');

textBtn.addEventListener('click', () => {
  text.classList.toggle('test_style');
});

//

document.body.addEventListener('click', (event) => {
  console.log("Event type: ", event.type);
  console.log("Event client x: ", event.clientX);
  console.log("Event client y: ", event.clientY);
});