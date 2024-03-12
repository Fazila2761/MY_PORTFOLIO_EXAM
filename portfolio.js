
function projects(){
    fetch('./portfolio.json')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
projects();

function displayUsers(data){
    const seeDetails = document.getElementById('projects')
 for(const users of data){
    const div =document.createElement('div');
    div.innerHTML=`
    <img src="${users.image}"/>
    <h3>${users.title}</h3>
    <p>${users.descreption}</p>
   <button><a href="${users.github}"><i class="fa-solid fa-code"></i></a></button>
   <button><a href="${users.netlify}"><i class="fa-solid fa-eye"></i></a></button>
    `;
    div.classList.add('projectss')
    seeDetails.appendChild(div);
 
 console.log(users);
 
 }
}
// ------------------------------form start----------------------------------
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
// ---------------------------form end-------------------------------


