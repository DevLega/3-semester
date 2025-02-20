const siteNav = document.querySelector('.site-nav');
siteNav.style.backgroundColor = 'yellow';

const firstLink = siteNav.querySelector("a");
firstLink.classList.add("site-nav__link");

const portfolioLink = siteNav.querySelector('a[href="https://"]');
portfolioLink.style.fontSize = "20px";