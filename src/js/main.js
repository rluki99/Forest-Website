const navBtn = document.querySelector('.hamburger')
const menu = document.querySelector('.nav__mobile')
const body = document.querySelector('body')
const mobileLinks = document.querySelectorAll('.nav__mobile-link')
const footerYear = document.querySelector('.year')
const nav = document.querySelector('.nav')
let lastScrollY = window.scrollY
let lastWidthX = window.innerWidth

const hamburgerActive = () => {
	navBtn.classList.toggle('is-active')
	menu.classList.toggle('nav__mobile--active')
	body.classList.toggle('no-scroll-mobile')
	mobileLinks.forEach(link => {
		link.addEventListener('click', () => {
			navBtn.classList.remove('is-active')
			menu.classList.remove('nav__mobile--active')
			body.classList.remove('no-scroll-mobile')
		})
	})
}

//get currentyear in the footer
const currentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navBtn.addEventListener('click', hamburgerActive)
currentYear()

//collapse expand menu depending on scroll
window.addEventListener('scroll', () => {
	if (lastScrollY < window.scrollY) {
		nav.classList.add('nav--hidden')
	} else {
		nav.classList.remove('nav--hidden')
	}

	//for iphone safari issue
	if (lastScrollY <= 0 && window.scrollY == 0) {
		nav.classList.remove('nav--hidden')
	}

	lastScrollY = window.scrollY
})

//remove open mobile nav after dekstop breakpoint
window.addEventListener('resize', () => {
	lastWidthX = window.innerWidth

	if (lastWidthX >= 992) {
		console.log(`${lastWidthX} Większe niż 992`)
		navBtn.classList.remove('is-active')
		menu.classList.remove('nav__mobile--active')
		body.classList.remove('no-scroll-mobile')
	}
})
