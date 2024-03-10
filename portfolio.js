const form = document.querySelector('form');
const yourName = document.querySelector('#exampleFormControlInput1');
const email = document.querySelector('#exampleFormControlInput2');
const textarea = document.querySelector('#exampleFormControlTextarea1');
// console.log(form)

form.addEventListener('submit', formhandler);

function formhandler(e){
    e.preventDefault();

    const formInfo = {
        yourName:yourName.value,
        email:email.value,
        textarea:textarea.value
    }
    console.log(formInfo);

    yourName.value = '',
    email.value = '',
    textarea.value = ''

}

