import { projects } from '../data.js'

const profile         = document.getElementById('job_profile')
const nav             = document.getElementById('principalnav')
const menuBtn         = document.getElementById('btn')
const iconSeparator   = document.getElementById('separator')
const srctionProjects = document.getElementById('project')

setTimeout(() => {
    profile.classList.add('showcontent')
    nav.classList.add('showcontent')
    iconSeparator.classList.add('showcontent')
}, 1000)

window.onscroll = () => {
  if (window.pageYOffset > 50) {
    nav.classList.add('move_scroll')
  } else {
    nav.classList.remove('move_scroll')
  }
}

menuBtn.addEventListener("click", () => {
  nav.classList.toggle('show')
})