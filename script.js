const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  console.log(currentActive)

  update()
})

prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  } else {
    update()
  }
})

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  const progressWidth = ((currentActive - 1) / (circles.length - 1)) * 100 + '%'
  progress.style.width = progressWidth

  if (currentActive === 1) {
    prev.disabled = true
    console.log('prev disabled')
  } else if (currentActive === circles.length) {
    next.disabled = true
    console.log('next disabled')
  } else {
    prev.disabled = false
    console.log('prev enabled')

    next.disabled = false
    console.log('next enabled')
  }
}
