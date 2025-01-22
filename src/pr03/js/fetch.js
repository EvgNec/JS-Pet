const API = 'https://jsonplaceholder.typicode.com/posts';
const cards = document.querySelector('.cards');
const inputTitle = document.querySelector('.input-title');
const inputDescription = document.querySelector('.input-description');
const addButton = document.querySelector('.btn-add');
const editButton = document.querySelector('.btn-edit');
const modal = document.querySelector('.modal');

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
  if (e.target.classList.contains('btn-add')) {
    addPost();
  }
  if (e.target.classList.contains('btn-edit')) {
    console.log(e.target);
    const id = e.target.getAttribute('data-id');
    console.log(getPostsId(id));

    //  updatePost(title, description, id);
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

function addPost(title, descr) {
  fetch(API, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body: descr,
      id: Date.now(),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => {
      if (res.ok) {
        console.log('Post Ok');
        inputTitle.value = '';
        inputDescription.value = '';
        return res.json();
      } else {
        throw new ErrorEvent('Error');
      }
    })
    .then(post => {
      const newCardHTML = ` <div class="card" style="width: 23rem">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">
              ${post.body}
            </p>
            <button class="btn btn-primary btn-edit" data-id="${post.id}">Edit</button>
            <button class="btn btn-primary btn-delete" data-id="${post.id}">Delete</button>
          </div>
        </div>`;
      cards.insertAdjacentHTML('afterbegin', newCardHTML);
    })
    .catch(error => console.log(error));
}

addButton.addEventListener('click', e => {
  e.preventDefault();
  const newTitle = inputTitle.value;
  const newDescription = inputDescription.value;
  addPost(newTitle, newDescription);
});

function updatePost(title, descr, id) {
  fetch(API + '/' + id, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body: descr,
      id: id,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => {
      return res.json();
    })
    .then(updatePost => {})
    .catch(error => console.log(error));
}

function getPostsId(id) {
  fetch(API + '/' + id)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(error => console.log(error));
}
