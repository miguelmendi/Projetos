document.querySelectorAll(".container-span").forEach(spanDrop => {
  spanDrop.addEventListener("dragstart", dragStart)
  spanDrop.addEventListener("dragend", dragEnd)
})

document.querySelectorAll(".span-number").forEach(span => {
  span.addEventListener("dragover", dragOver)
  span.addEventListener("dragleave", dragLeave)
  span.addEventListener("drop", drop)
})

function dragstart() {

}

function dragEnd() {

}

function dragOver() {

}

function dragLeave() {

}

function drop() {
  
}