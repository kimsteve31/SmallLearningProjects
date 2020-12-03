const progress = document.querySelector('.progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  if(currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

prev.addEventListener('click', () => {
  currentActive--
  if(currentActive < 1) {
    currentActive = 1
  }
  update()
})

function update() {
  progress.style.width = (33 * (currentActive - 1)) + '%';

  if(currentActive > 3) {
    next.disabled = true;
  } else if (currentActive < 2) {
    prev.disabled = true;
  }
  else {
    next.disabled = false;
    prev.disabled = false;
  }

  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

}
