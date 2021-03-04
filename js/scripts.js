const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){

        const imageId = card.querySelector("img").src;
        const nameFood = card.getAttribute("name-food");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = imageId;
        modalOverlay.querySelector("h3").innerHTML = card.querySelector("h3").textContent;
        modalOverlay.querySelector("p").innerHTML = card.querySelector("p").textContent;
        


    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})
