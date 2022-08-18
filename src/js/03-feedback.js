import _ from 'lodash';

let form = document.querySelector(".feedback-form");
let email = document.querySelector('input');
let message = document.querySelector('textarea');

let formInput = (e) => {
    localStorage.setItem("feedback-form-state", JSON.stringify({
        "email": `${email.value}`,
        "message": `${message.value}`
    }));
}
form.addEventListener("input", _.throttle(formInput, 500));

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("feedback-form-state") != null){
        email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
        message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    }
})

form.addEventListener("submit", (event) => {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    form.reset();
    localStorage.removeItem("feedback-form-state");
    event.preventDefault();
})