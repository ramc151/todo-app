import loadtoDisplay from '../Components/loadtoDisplay.js';

const getDatafromLocal = () => {
    let data = localStorage.getItem('tasks');
    let arr;
    !data ? arr = [] : arr = JSON.parse(data)

    arr.forEach((task) => {
        loadtoDisplay(task)
    })
}

export default getDatafromLocal