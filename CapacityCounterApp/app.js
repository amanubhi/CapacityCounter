let countEl = document.getElementById("count-el")
let count = 0

console.log(countEl)

function countIn () {
    count = count + 1
    countEl.innerText = count
}

function saveCt () {
    console.log("Count is Saved!")
}