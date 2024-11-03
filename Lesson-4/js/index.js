const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';


const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';


if (string1.includes(blacklistedWord1) || string1.includes(blacklistedWord2)) {
    console.log(`Рядок "${string1}" має спам.`);
} else {
    console.log(`Рядок "${string1}" не має спаму.`);
}