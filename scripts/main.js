const toggle = document.querySelector('#dark-toggle');
const scroll = document.querySelector('#scroll-top')
const rootElement = document.documentElement;
const mobileMenu = document.querySelector('#mobile-menu')
const overlay = document.querySelector('#overlay')
const hiddenProjects = document.querySelector('.hidden-projects')
const viewAll = document.querySelector('#view-all')

// toggle.addEventListener('change', switchTheme);
scroll.addEventListener('click', scrollToTop);

mobileMenu.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    scroll.classList.add('hidden')
    document.body.style.overflow = 'hidden'
})

viewAll.addEventListener('click', () => {
    hiddenProjects.classList.toggle('active')
    if (viewAll.textContent === 'Show Less') {
        viewAll.textContent = 'Show More'
    } else {
        viewAll.textContent = 'Show Less'
    }
})

overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.add('hidden');
        scroll.classList.remove('hidden')
        document.body.style.overflow = 'visible'
    })
}) 

overlay.querySelector('#menu-close').addEventListener('click', () => {
    overlay.classList.add('hidden');
})

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
}


