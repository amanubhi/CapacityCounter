let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0

function countIn () {
    count += 1
    countEl.textContent = count
}

function saveCt () {
    let countStr = count + " - "
    saveEl.textContent += countStr
    total += count
    countEl.textContent = 0
    count = 0
    totalCt()
}

function totalCt() {
    totalEl.textContent = "Total Number Of People: " + total
}
