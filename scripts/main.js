const toggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html')
const scroll = document.querySelector('#scroll-top')
const rootElement = document.documentElement;
const mobileMenu = document.querySelector('#mobile-menu')
const overlay = document.querySelector('#overlay')

toggle.addEventListener('change', switchTheme);
scroll.addEventListener('click', scrollToTop);

mobileMenu.addEventListener('click', () => {
    overlay.classList.remove('hidden');
})

overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.add('hidden');
    })
}) 

function switchTheme(){
    if (toggle.checked) {
        html.classList.remove('dark');
    }
    else {
        html.classList.add('dark');
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
}
