// define all functions
const mainContainer = document.querySelector('.container');
const thankContainer = document.querySelector('.thank');
const submitButton = document.getElementById('button');
const vote = document.getElementById('vote');
const rates = document.querySelectorAll('.bttn')

// call on submit button and manipuration of container pagees
submitButton.addEventListener('click', () => {
    thankContainer.classList.remove('hidden')
    mainContainer.style.display = 'none';
})

// call and declaration of vote-button
rates.forEach((rate) => {
 rate.addEventListener('click', () =>{
    vote.innerHTML = rate.innerHTML
 })   
});
