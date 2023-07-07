document.querySelectorAll(".container-span").forEach(spanDrop => {
  spanDrop.addEventListener("dragstart", dragStart)
  spanDrop.addEventListener("dragend", dragEnd)
})

document.querySelectorAll(".span-number").forEach(span => {
  span.addEventListener("dragover", dragOver)
  span.addEventListener("dragleave", dragLeave)
  span.addEventListener("drop", drop)
})

function dragStart(event) {
  event.currentTarget.classList.add("dragging");
}

function dragEnd(event) {
  e.currentTarget.classList.remove("dragging")
}

function dragOver(event) {
  if(event.currentTarget.querySelector(".span-number") === null){
    event.preventDefault()
    event.currentTarget.classList.add("hover")
  }
}

function dragLeave(event) {
  event.currentTarget.classList.remove("hover")
}

function drop(event) {
  event.currentTarget.classList.remove("hover")

  if(e.currentTarget.querySelector(".span-number") === null) {
    let dragItem = document.querySelector(".span-number.dragging")
    e.currentTarget.appendChild(dragItem)
  }
}