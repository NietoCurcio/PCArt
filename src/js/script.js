import '../css/style.css'

// src - https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
function importAll(r) {
  return r.keys().map(r)
}
const images = importAll(
  require.context('../images', false, /\.(png|jpe?g|svg)$/)
)

const nav = document.querySelector('.navbar')

window.addEventListener('scroll', (event) => {
  if (window.pageYOffset > 90) nav.classList.add('bg-transp-ebony')
  else if (!nav.classList.contains('isOpen'))
    nav.classList.remove('bg-transp-ebony')
})

const toggle = document.querySelector('.navbar-toggler')
toggle.onclick = () => {
  nav.classList.add('bg-transp-ebony')
  nav.classList.toggle('isOpen')
}
