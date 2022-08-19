import _ from 'lodash';

let form = document.querySelector(".feedback-form");
let formElements = form.elements;

let formInput = () => {
    let temp = {};
    for (let i = 0; i < formElements.length - 1; i++) {
        temp[formElements[i].name] = formElements[i].value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(temp));
}
form.addEventListener("input", _.throttle(formInput, 500));

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("feedback-form-state") != null){
        for (let i = 0; i < formElements.length - 1; i++) {
            formElements[i].value = JSON.parse(localStorage.getItem("feedback-form-state"))[formElements[i].name];
        }
    }
})

form.addEventListener("submit", (event) => {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    form.reset();
    localStorage.removeItem("feedback-form-state");
    event.preventDefault();
})