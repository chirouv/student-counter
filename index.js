let countEl = document.getElementById("count")
let saveEl = document.getElementById("save")
console.log(saveEl)
let count = 0
function increment(){
    count = count + 1
    countEl.textContent = count
}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
   console.log(count)
   countEl.textContent = 0  
    count = 0
}