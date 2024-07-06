const passwordbox = document.getElementById("password");
const btn = document.querySelector("button")
const length = 13;

const uppercase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = " abcdefghijklmnopqrstuvwxyz"
const numbers = " 1234567890"
const symbols = " !@#$%^&*()_+-=[]{}|;':";


const all = uppercase + lowercase + numbers + symbols;

function creatPassword () {
    let password = "";

    password+= uppercase[Math.floor(Math.random()*uppercase.length)];
    password+= lowercase[Math.floor(Math.random()*lowercase.length)];
    password+= numbers[Math.floor(Math.random()*numbers.length)];
    password+= symbols[Math.floor(Math.random()*symbols.length)];

    while( length > password.length) {
        password+= all[Math.floor(Math.random()*all.length)];
    }

    passwordbox.value = password;
    
}

btn.addEventListener("click", ( ) => {
    creatPassword();
});