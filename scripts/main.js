const toggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html')
const scroll = document.querySelector('#scroll-top')
const rootElement = document.documentElement;

toggle.addEventListener('change', switchTheme);
scroll.addEventListener('click', scrollToTop);

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