const navBtn = document.querySelector('.hamburger')
const menu = document.querySelector('.nav__mobile')
const body = document.querySelector('body')
const mobileLinks = document.querySelectorAll('.nav__mobile-link')
const footerYear = document.querySelector('.year')
const nav = document.querySelector('.nav')
const names = document.querySelector('#name')
const mail = document.querySelector('#mail')
const msg = document.querySelector('#msg')
const sendBtn = document.querySelector('.contact__form-btn')
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

const checkName = () => {
	const re = /^[\s\p{L}]+$/u

	if (re.test(names.value)) {
		names.classList.remove('error')
	} else {
		names.classList.add('error')
	}
}

const checkMail = () => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

	if (re.test(mail.value)) {
		console.log('mail poprawny')
		console.log(mail)
		mail.classList.remove('error')
	} else {
		console.log('mail niepoprawny')
		console.log(mail)
		mail.classList.add('error')
	}
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
	//first if is for iphone safari issue
	if (lastScrollY <= 0 || window.scrollY == 0) {
		nav.classList.remove('nav--hidden')
	} else if (lastScrollY < window.scrollY) {
		nav.classList.add('nav--hidden')
	} else {
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

//form validation
sendBtn.addEventListener('click', () => {
	checkName()
	checkMail()
})
