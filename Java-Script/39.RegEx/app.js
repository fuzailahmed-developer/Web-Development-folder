let email = "fzlahd#09"
// console.log(.test(email));
// console.log(/[0-9]/.test(email));
// console.log(/[^0-9a-zA-z.]/.test(email));


function checkPass(pass) {

    let hasLetters = /[a-zA-z]/; 
    let hasNum = /[0-9]/; 
    let hasSymbols = /[^a-zA-Z0-9.]/; 
    
    if (pass.length < 6) {
        return "weak"
    }

    if (pass.length >= 6 && hasLetters && hasNum && !hasSymbols) {
        return "medium"
    }
    if (pass.length >= 8 && hasLetters && hasNum && hasSymbols) {
        return "strong"
    }

}

console.log(checkPass(email));