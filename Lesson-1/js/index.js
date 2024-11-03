let namePhone = "AndroidSuperSigmaS26Ultra";
let pricePhone = 40000;

console.log("Наш новий супер смартфон " + namePhone + " коштує " + pricePhone);

document.getElementById("newprice").addEventListener("click", function () {
    pricePhone = prompt("Введіть нову круту ціну для рабів");

    console.log("Вибачайтесь але тепер наш новий супер смартфон " + namePhone + " після інфляції коштує " + pricePhone);
});
