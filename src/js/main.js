import { dropHandler, startHandler, dragendHandler, dragOverHandler, dragLeaveHandler } from '../Components/dragndrop.js';
import getDatafromLocal from '../Components/getDatafromLocal.js';

let addData = document.getElementById('addData')

addData.addEventListener('click', () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const progress = document.getElementById("progress").value;

    let data = localStorage.getItem('tasks')
    let arr;
    if (data == null) {
        arr = []
    } else {
        arr = JSON.parse(data)
    }

    arr.push({ id: new Date().getTime(), title, description, progress })
    localStorage.setItem('tasks', JSON.stringify(arr))
    window.location = "index.html";
})

getDatafromLocal()

window.addEventListener("DOMContentLoaded", () => {
    let data = localStorage.getItem('tasks');
    let arr;
    !data ? arr = [] : arr = JSON.parse(data)
    arr.forEach((task) => {
        const droppable = document.getElementById('sections')
        const draggable = document.getElementById(task.id);

        draggable.addEventListener('dragstart', startHandler);
        draggable.addEventListener('dragend', dragendHandler)
        droppable.addEventListener("dragover", dragOverHandler);
        droppable.addEventListener("dragleave", dragLeaveHandler);
        droppable.addEventListener('drop', dropHandler)
    })
})