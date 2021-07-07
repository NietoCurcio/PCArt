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
