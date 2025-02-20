const title = document.getElementById('main-title');
document.querySelector('.toggle-class-btn').addEventListener('click', () => {
  title.classList.toggle('highlight');
});
document.querySelector('.add-class-btn').addEventListener('click', () => {
    title.classList.add('border');
});
document.querySelector('.remove-class-btn').addEventListener('click', () => {
    title.classList.remove('border');
});
document.querySelector('.replace-class-btn').addEventListener('click', () => {
    title.classList.replace('highlight', 'border');
});

// task

const allLinks = document.querySelectorAll('a[href^="https://"], a[href^="http://"], a[href^="ftp://"]');

allLinks.forEach(link => {
    link.style.color = "orange";
});