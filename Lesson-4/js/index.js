const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';


const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';


function checkSpam(text) {
    const lowerText = text.toLowerCase();
    if (lowerText.includes(blacklistedWord1) || lowerText.includes(blacklistedWord2)) {
        console.log(`Рядок "${text}" має спам.`);
    } else {
        console.log(`Рядок "${text}" не має спаму.`);
    }
}

checkSpam(string1)
checkSpam(string2)