// const ol = document.getElementById('ol');

// const p = document.createElement('p');
// const p1 = document.createElement('p');

// p.textContent = 'Hello, World!';
// ol.before(p); // вставлення перед ol

// p1.textContent = 'Hello, JavaScript!';
// ol.after(p1); // вставлення після ol

// const liFirst = document.createElement('li');
// liFirst.textContent = 'First li';
// ol.prepend(liFirst); // вставлення в початок списку

// const liLast = document.createElement('li');  
// liLast.textContent = 'Last li';
// ol.append(liLast); // вставлення в кінець списку

// document.body.append(document.createElement('hr'));

// //створення зобр і кнопки
// const img = document.createElement('img');
// console.dir(img);
// img.alt = 'image';
// img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZU4zlcHK3iTVky-UYRMgWRGLLWc0Qh88RAw&s';
// img.style.width = '200px';

// const button = document.createElement('button');
// button.textContent = 'Click me';

// document.body.append(img, button);


const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

const colorPicker = document.querySelector('.color-picker ');

colorPickerOptions.forEach(({label, color}) => {
    const option = document.createElement('button');
    option.textContent = label;
    option.style.backgroundColor = color;
    colorPicker.append(option)
});