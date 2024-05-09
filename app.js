let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function countIn () {
    count += 1
    countEl.innerText = count
}

function saveCt () {
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count)
}
