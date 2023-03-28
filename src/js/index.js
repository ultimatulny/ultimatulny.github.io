import '../scss/style.scss'
import { swiper } from './swiper-init'

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

let windowInnerWidth = document.documentElement.clientWidth
window.addEventListener('resize', () => {
  windowInnerWidth = document.documentElement.clientWidth
})

let overlay = document.querySelector('.overlay')

let open_menu_btn = document.querySelector('#open-menu')
let menu = document.querySelector('.slide-menu')
let close_menu_btn = document.querySelector('#slide-menu__close-btn')

let call_btn = document.querySelector('#call-btn')
let call_btn_header = document.querySelector('#call-btn-header')
let call_modal = document.querySelector('.modal-call')
let call_close_btn = document.querySelector('.call-close-btn')

let feedback_btn = document.querySelector('#feedback-btn')
let feedback_btn_header = document.querySelector('#feedback-btn-header')
let feedback_modal = document.querySelector('.modal-feedback')
let feedback_close_btn = document.querySelector('.feedback-close-btn')

function openOverlay() {
  document.body.classList.add('lock-body')
  overlay.classList.add('overlay-visible--on')
}

function closeOverlay() {
  document.body.classList.remove('lock-body')
  overlay.classList.remove('overlay-visible--on')
}

function closeSlideMenu() {
  menu.classList.add('slide-menu--hide')
  menu.classList.remove('slide-menu--open')
  menu.classList.remove('slide-menu--shadow--on')
  closeOverlay()
}

function openSlideMenu() {
  menu.classList.add('slide-menu--open')
  menu.classList.remove('slide-menu--hide')
  menu.classList.add('slide-menu--shadow--on')
  openOverlay()
}

open_menu_btn.addEventListener('click', () => {
  openSlideMenu()
})

close_menu_btn.addEventListener('click', () => {
  closeSlideMenu()
})

overlay.addEventListener('click', () => {
  closeSlideMenu()
  feedback_modal.classList.remove('modal--open')
  call_modal.classList.remove('modal--open')
})

call_btn.addEventListener('click', () => {
  feedback_modal.classList.remove('modal--open')
  call_modal.classList.add('modal--open')
  openOverlay()
})

call_btn_header.addEventListener('click', () => {
  feedback_modal.classList.remove('modal--open')
  call_modal.classList.add('modal--open')
  openOverlay()
})

call_close_btn.addEventListener('click', () => {
  call_modal.classList.remove('modal--open')
  if (windowInnerWidth >= 1440) closeOverlay()
})

feedback_btn.addEventListener('click', () => {
  call_modal.classList.remove('modal--open')
  feedback_modal.classList.add('modal--open')
  openOverlay()
})

feedback_btn_header.addEventListener('click', () => {
  call_modal.classList.remove('modal--open')
  feedback_modal.classList.add('modal--open')
  openOverlay()
})

feedback_close_btn.addEventListener('click', () => {
  feedback_modal.classList.remove('modal--open')
  if (windowInnerWidth >= 1440) closeOverlay()
})