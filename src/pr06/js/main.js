import {getPet, getPetId, getPetURL} from './api.js'
const cards = document.querySelector('.container');
const modal = document.querySelector('.modal');
let informCard = '';
getPet();

cards.addEventListener('click', e => {
    if (e.target.classList.contains('btn-inform')) {
        const URL = e.target.getAttribute('data-id');
        getInformation (URL);

      modal.style.display = 'block';
    }
   
  });

  
async function getInformation (URL){       

    let id = await getPetURL(URL);
    let card = await getPetId(id);
    console.log("🚀 ~ id:", card)

    informCard = `<div class="card" data-id="${card.name}" style="width: 20rem">
          <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
    <img
    src="${card.sprites.back_default}"
    alt="${card.name}"
    class="img"
  />
            <button class="btn btn-primary btn-close" data-id="${card.url}">Close</button>
          </div>
        </div>`

      modal.innerHTML = informCard;

}

// getPetId('klutz');
// getPetId(2);
// getPetId(3);
