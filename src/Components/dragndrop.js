export function startHandler(event) {
    event.currentTarget.classList.add("dragging")
    event.dataTransfer.clearData();
    event.dataTransfer.setData('text/plain', event.target.id);
}

export function dragendHandler(event) {
    event.target.classList.remove("dragging")
}

export function dragOverHandler(event) {
    event.preventDefault()
}

export function dragLeaveHandler(event) {
    event.preventDefault();
}

export function dropHandler(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain")
    const element = document.getElementById(id)

    let appendid = event.target.closest('.task-section').id
    event.target.closest('.task-section').appendChild(element)

    let tasks = localStorage.getItem('tasks')
    let alldata;
    !tasks ? alldata = [] : alldata = JSON.parse(tasks)

    let findsingletask = alldata.find(onedata => onedata.id == id)
    findsingletask.progress = appendid;

    localStorage.setItem('tasks', JSON.stringify(alldata))

    element.querySelector('p b').nextSibling.textContent = appendid;

}