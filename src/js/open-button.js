// open-button
let brandsBtn = document.querySelector('.brands__button')
let equipmentBtn = document.querySelector('.equipment__button')

brandsBtn.addEventListener('click', () => {
  let element = document.querySelector('.brands__container')
  element.classList.toggle('container--open')
  brandsBtn.classList.toggle('container__button--open')
})

equipmentBtn.addEventListener('click', () => {
  let element = document.querySelector('.equipment__container')
  element.classList.toggle('container--open')
  equipmentBtn.classList.toggle('container__button--open')
})
