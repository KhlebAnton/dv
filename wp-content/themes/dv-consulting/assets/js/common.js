
/* New header */
function dropdownWrapper() {
  let dropdownWrapper = document.querySelector('.dropdown-wrapper')
  if (!dropdownWrapper) return

  let menuLinks = document.querySelectorAll('[data-menu]');
  let header = document.querySelector('.header')
  menuLinks.forEach(item => {
    let menuAnchor = item.dataset.menu;

    item.addEventListener('mouseenter', (e) => {
      e.preventDefault()
      item.classList.add('open-child')
      dropdownWrapper.classList.add('visible')
    })

    item.addEventListener('mouseleave', (e) => {
      item.classList.remove('open-child')
      dropdownWrapper.classList.remove('visible')
    })

    item.addEventListener('click', (e) => {
      //e.preventDefault()
      item.classList.toggle('open-child')
      dropdownWrapper.classList.toggle('visible')
    })



  })

}

dropdownWrapper()

function getHeaderFixed() {
  let header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 10) {
      header.classList.add('is-sticked')
    } else {
      header.classList.remove('is-sticked')
    }
  })
}

getHeaderFixed()


let mobile_menu = document.querySelector('.menu__icon');
if (mobile_menu) {
  mobile_menu.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dis-scroll');
  });
}
let btnsMenu = document.querySelectorAll('.btn-toggle-menu');
let body = document.querySelector('body');
btnsMenu.forEach(btn => {
  btn.addEventListener('click', () => {

    body.classList.toggle('active-menu')

  })
})

