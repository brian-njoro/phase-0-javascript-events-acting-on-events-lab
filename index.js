//move dodger left function and event
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace(`px`, ``);
    const left = parseInt(leftNumbers);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
  
  document.addEventListener(`keydown`, function(e) {
    if (e.key === `ArrowLeft`) {
      moveDodgerLeft();
    }
})

//move dodger right function and event
function moveDodgerRight() {
    const rightMeasurement = dodger.style.left.replace(`px`, ``)
    const left = parseInt(rightMeasurement)
    if (left < 40) {
        dodger.style.left = `${left + 1}`
    }
}

  document.addEventListener(`keydown`, function(event){
    if (event.key === `ArrowRight`){
        moveDodgerRight()
    }
  })

