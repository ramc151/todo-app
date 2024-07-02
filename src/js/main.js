const addData = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const progress = document.getElementById("progress").value;

    let data = localStorage.getItem('tasks')
    if (data == null) {
        arr = []
    } else {
        arr = JSON.parse(data)
    }

    arr.push({ id: new Date().getTime(), title, description, progress })
    localStorage.setItem('tasks', JSON.stringify(arr))
    window.location = "index.html";
}

const loadtoDisplay = (task) => {
    // console.log(task)
    let section = document.getElementById(task.progress)
    // console.log(section)
    const card = document.createElement('div');
    card.className = 'card mt-2';
    card.draggable = true;
    card.id = task.id;
    card.style.padding = '20px 0';

    card.innerHTML += `<h6 class="card-title">${task.title}</h6>
                        <p class="card-text">${task.description}</p>
                        <p class="card-text">Progress : ${task.progress}</p>`
    // console.log(card)

    section.appendChild(card)
}

const getDatafromLocal = () => {
    let data = localStorage.getItem('tasks');
    !data ? arr = [] : arr = JSON.parse(data)

    arr.forEach((task) => {
        loadtoDisplay(task)
    })
}
getDatafromLocal()

window.addEventListener("DOMContentLoaded", () => {
    let data = localStorage.getItem('tasks');
    !data ? arr = [] : arr = JSON.parse(data)
    arr.forEach((task) => {
        const droppable = document.getElementById('sections')
        // console.log(section)
        const draggable = document.getElementById(task.id);

        draggable.addEventListener('dragstart', startHandler);
        draggable.addEventListener('dragend', dragendHandler)
        droppable.addEventListener("dragover", dragOverHandler);
        droppable.addEventListener("dragleave", dragLeaveHandler);
        droppable.addEventListener('drop', dropHandler)
    })

    function startHandler(event) {
        event.currentTarget.classList.add("dragging")
        event.dataTransfer.clearData();
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function dragendHandler(event) {
        event.target.classList.remove("dragging")
    }

    function dragOverHandler(event) {
        event.preventDefault()
    }

    function dragLeaveHandler(event) {
        event.preventDefault();
    }

    function dropHandler(event) {
        event.preventDefault();
        const id = event.dataTransfer.getData("text/plain")
        const element = document.getElementById(id)
        // console.log(element)
        event.target.appendChild(element)
        let tasks = localStorage.getItem('tasks')
        !tasks ? alldata = [] : alldata = JSON.parse(tasks)
        const dropid = event.target.id;
        let findsingletask = alldata.find(onedata => onedata.id == id)
        findsingletask.progress = dropid;
        // alldata.push(findsingletask)
        localStorage.setItem('tasks', JSON.stringify(alldata))
        window.location = 'index.html'
        // console.log(findsingletask)

    }
})