const loadtoDisplay = (task) => {
    let section = document.getElementById(task.progress)
    const card = document.createElement('div');
    card.className = 'card mt-2';
    card.draggable = true;
    card.id = task.id;
    card.style.padding = '20px 0';

    card.innerHTML += `<div class='p-2'><h6 class="card-title">${capitalized(task.title)}</h6>
                        <p class="card-text">${task.description}</p>
                        <p class="card-text"><b>Progress : </b>${task.progress}</p></div>`

    section.appendChild(card)
}

const capitalized = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

export default loadtoDisplay