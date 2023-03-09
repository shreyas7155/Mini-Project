 const logregbox = document.querySelector('.logreg-box');
 const loginLink = document.querySelector('.login-link');
 const registerLink = document.querySelector('.register-link');
 const container = document.querySelector('.container');
 const btn = document.querySelector('.btn');


 registerLink.addEventListener('click', ()=> {
     container.classList.add('active');

 });

 btn.addEventListener('click', ()=> {
    container.classList.add('active-popup');

});

loginLink.addEventListener('click', ()=> {
    container.classList.remove('active');

});