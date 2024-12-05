// abre e fecha o menu quando clicar no icone(hamburguer e x)
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// mudar o header da página quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

// Testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: true,
  clickable: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// ScrollReveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

// BACK TO TOP
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// When Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

// MODAL
// Get the modal
var modalA = document.getElementById('modal1')
var modalB = document.getElementById('modal2')
var modalC = document.getElementById('modal3')
var modalD = document.getElementById('modal4')

// Get the div that opens the modal
var cardA = document.getElementById('card1')
var cardB = document.getElementById('card2')
var cardC = document.getElementById('card3')
var cardD = document.getElementById('card4')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks on the button, open the modal
document.getElementById('card1').onclick = function () {
  modalA.style.display = 'block'
}
document.getElementById('card2').onclick = function () {
  modalB.style.display = 'block'
}
document.getElementById('card3').onclick = function () {
  modalC.style.display = 'block'
}
document.getElementById('card4').onclick = function () {
  modalC.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
document.getElementById('span1').onclick = function () {
  modalA.style.display = 'none'
}
document.getElementById('span2').onclick = function () {
  modalB.style.display = 'none'
}
document.getElementById('span3').onclick = function () {
  modalC.style.display = 'none'
}
document.getElementById('span4').onclick = function () {
  modalC.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalA) {
    modalA.style.display = 'none'
  } else if (event.target == modalB) {
    modalB.style.display = 'none'
  } else if (event.target == modalC) {
    modalC.style.display = 'none'
  } else if (event.target == modalD) {
    modalC.style.display = 'none'
  }
}
