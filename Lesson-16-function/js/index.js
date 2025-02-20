const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";

function checkLogin(login) {
    if(logins.includes(login)) {
        return `Користувач ${login} знайдено`
    } else {
        return `Користувач ${login} не знайдено`
    }
}

console.log(checkLogin(loginToFind));