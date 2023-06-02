const eventForm = document.querySelector('form');
const eventCard = document.getElementById('eventos-criados');
const events = [];

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('nome');
    const dateInput = document.getElementById('data');
    const typeInput = document.getElementById('tipo');
    const locationInput = document.getElementById('local');

    const name = nameInput.value;
    const date = dateInput.value;
    const type = typeInput.value;
    const location = locationInput.value;

    const evento = { name, date, type, location };
    events.push(evento);

    const card = createEventCard(evento);
    eventCard.appendChild(card);

    eventForm.reset();
});

function createEventCard(event) {
    const card = document.createElement('div');
    const cardDetalhe = document.createElement("div");
    const cardBtn = document.createElement("div");
    
    card.classList.add('event-card');
    cardDetalhe.classList.add("card-detalhe");
    cardBtn.classList.add("card-btn");

    card.appendChild(cardDetalhe);
    card.appendChild(cardBtn);
    
    const date = document.createElement('span');
    date.textContent = event.date;
    cardDetalhe.appendChild(date);

    const name = document.createElement('h3');
    name.textContent = event.name;
    cardDetalhe.appendChild(name);

    const type = document.createElement('p');
    type.textContent = event.type;
    cardDetalhe.appendChild(type);

    const location = document.createElement('p');
    location.textContent = event.location;
    cardDetalhe.appendChild(location);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', function () {
        const index = events.indexOf(event);
        if (index > -1) {
            events.splice(index, 1);
        }
        card.remove();
    });
    cardBtn.appendChild(deleteBtn);

    return card;
}