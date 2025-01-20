const API = 'https://jsonplaceholder.typicode.com/posts';
const cards = document.querySelector('.cards');
let newCard = '';

function getPosts() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      data.slice(0, 12).map(post => {
        return (newCard += ` <div class="card" style="width: 23rem">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">
              ${post.body}
            </p>
            <button class="btn btn-primary btn-edit" data-id="${post.id}">Edit</button>
            <button class="btn btn-primary btn-delete" data-id="${post.id}">Delete</button>
          </div>
        </div>`);
      });
      cards.innerHTML = newCard;
    })
    .catch(error => console.log(error));
}

getPosts();

cards.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('btn-delete')) {
    const id = e.target.getAttribute('data-id');
    deletePost(id, e.target.closest('.card'));
  }
});

function deletePost(id, cardElement) {
  fetch(API + '/' + id, { method: 'DELETE' })
    .then(res => {
      if (res.ok) {
          console.log('Ok');
          cardElement.remove();
      }
      
    })
    .catch(error => console.log(error));
}
