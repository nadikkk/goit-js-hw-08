import throttle from "lodash.throttle";
const form = document.querySelector ("form");
const input = document.querySelector ("input");
const text = document.querySelector("textarea");
const button  = document.querySelector("button");


const contact = {
	email: "",
	message: "",
}

function  onSaveForm (e) {
	contact.email = input.value;
   contact.message = text.value;
	// console.log(contact);
	localStorage.setItem ("feedback-form-state", JSON.stringify(contact));
	};

form.addEventListener("input", throttle(onSaveForm,500));
document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
function onDOMContentLoaded(e) {
	const savedForm = localStorage.getItem("feedback-form-state");
	const parsedForm = JSON.parse(savedForm);
	// console.log(parsedForm);
	if (parsedForm===null) {
		input.value = "";
   text.textContent = ""
	} else{
	input.value = parsedForm.email;
      text.textContent = parsedForm.message;};
	
}

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
	localStorage.clear();
	console.log(localStorage.getItem("feedback-form-state"));
}
