let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increase(){
  count += 2
  //count ++
  countEl.textContent = count
}

function save(){
  let countStr = count + " - "
  saveEl.textContent += countStr
  console.log(count)
  countEl.textContent = 0
  count = 0
}
