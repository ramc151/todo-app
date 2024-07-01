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
}

const extractTask = () => {
    let data = localStorage.getItem('tasks');
    
}
extractTask()