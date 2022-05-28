const cards=document.querySelectorAll('.block');
console.log(cards);
for(let card of cards){
    card.addEventListener('click',(e)=>{
        
        for(let item of cards){
            item.classList.remove('active');
        }
        card.classList.add('active');
    })
}