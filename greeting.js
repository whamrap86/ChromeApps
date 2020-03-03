const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_CN = "currentUser"
const SHOWING_CN = "showing"

function saveName(text) {
    localStorage.setItem(USER_CN, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    if (currentValue == '') {
    }
    else {
        saveName(currentValue);
        paintGreeting(currentValue);
    }
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_CN);
    if(currentUser==null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init()