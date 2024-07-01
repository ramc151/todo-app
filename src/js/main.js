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

    card.innerHTML += `<h6 class="card-title">${task.title}</h6>
                        <p class="card-text">${task.description}</p>
                        <p class="card-text">Progress : ${task.progress}</p>`
    // console.log(card)

    section.appendChild(card)
}

const extractTask = () => {
    let data = localStorage.getItem('tasks');
    !data ? arr = [] : arr = JSON.parse(data)

    arr.forEach((task) => {
        loadtoDisplay(task)
    })
}
extractTask()

window.addEventListener("DOMContentLoaded", () => {
    let data = localStorage.getItem('tasks');
    !data ? arr = [] : arr = JSON.parse(data)
    arr.forEach((task) => {
        // console.log(task.id)
        const draggable = document.getElementById(task.id);
        const droppable = document.getElementById(task.progress)
        // console.log(droppable)
        draggable.addEventListener('dragstart', startHandler);
        // draggable.addEventListener('dragend', endHandler)
        droppable.addEventListener("dragover", dragOverHandler);
        droppable.addEventListener("dragleave", dragLeaveHandler);
        droppable.addEventListener('drop', dropHandler)
    })

    function startHandler(event) {
        event.dataTransfer.clearData();
        event.dataTransfer.setData('text/plain', event.target.id);
        // data.textContent = event.dataTransfer.getData("text/plain");
        // console.log(event.dataTransfer.getData('text/plain'))
    }
    // function endHandler(event) {
    //     data.textContent = event.dataTransfer.getData('text/plain') || "empty";
    //     if (dropped) {
    //         draggable.removeEventListener("dragstart", startHandler);
    //         draggable.removeEventListener("dragend", endHandler);
    //     }
    // }
    function dragOverHandler(event) {
        event.preventDefault()
    }
    function dragLeaveHandler(event) {
        event.preventDefault();
    }
    function dropHandler(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain")
        const element = document.getElementById(data)
        // console.log(element)
        event.target.appendChild(element)
    }

})