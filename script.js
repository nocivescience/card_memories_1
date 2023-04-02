const containerEl=document.getElementById('container');
const cardContainerEl=document.getElementById('card-container');
document.addEventListener('click',()=>{
    containerEl.classList.toggle('show');
    cardContainerEl.classList.toggle('hide');
});