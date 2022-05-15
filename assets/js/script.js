import { projects } from '../data.js'

const profile         = document.getElementById('job_profile')
const nav             = document.getElementById('principalnav')
const menuBtn         = document.getElementById('btn')
const iconSeparator   = document.getElementById('separator')
const sectionProjects = document.getElementById('project')
const body            = document.getElementById('body')

setTimeout(() => {
  profile.classList.add('showcontent')
  nav.classList.add('showcontent')
  iconSeparator.classList.add('showcontent')
  body.style.overflowY = 'visible'
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

for (const project of projects) {
  if (project.private === true) {
    sectionProjects.innerHTML += `<article class="card">
    <div class="card__header">
        <img class="card__img" src="assets/img/${project.image}" alt="Imágen descriptiva">
    </div>
    <p class="card__description">${project.description}</p>
    <div class="card__footer">
    </div>
  </article>`
  } else if (project.btnCode === false) {
    sectionProjects.innerHTML += `<article class="card">
    <div class="card__header">
        <img class="card__img" src="assets/img/${project.image}" alt="Imágen descriptiva">
    </div>
    <p class="card__description">${project.description}</p>
    <div class="card__footer">
        <a href="${project.demo}" target="_blank" class="card__demo">Demo</a>
    </div>
  </article>`
  } else if (project.btnDemo === false) {
    sectionProjects.innerHTML += `<article class="card">
    <div class="card__header">
        <img class="card__img" src="assets/img/${project.image}" alt="Imágen descriptiva">
    </div>
    <p class="card__description">${project.description}</p>
    <div class="card__footer">
        <a href="${project.code}" target="_blank" class="card__code">Código</a>
    </div>
  </article>`
  } else {
    sectionProjects.innerHTML += `<article class="card">
    <div class="card__header">
        <img class="card__img" src="assets/img/${project.image}" alt="Imágen descriptiva">
    </div>
    <p class="card__description">${project.description}</p>
    <div class="card__footer">
        <a href="${project.demo}" target="_blank" class="card__demo">Demo</a>
        <a href="${project.code}" target="_blank" class="card__code">Código</a>
    </div>
  </article>`
  }
}