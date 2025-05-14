const localStorageKey = `to-do-list-gn`


function newTask() {
    let input = document.getElementById("input-new-task")
    if (!input.value) {
        alert("nao tem nada escrito")
    }
    else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.values


        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
    }


}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById(`to-do-list`)
    list.innerHTML = ``
    for (let i = 0; i < values.lenght; i++) {
        list.innerHTML += `<li>${values[i][`name`]}<button id =`btn - ok` onclick = `removeItem`(${values[i][`name`]}) ></button></li>`
    }
}

showValues(){

}