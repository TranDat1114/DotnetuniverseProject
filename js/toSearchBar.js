const searchbar = document.querySelector('#searchbar-nav')
const normalnav = document.querySelector('#normal-nav')
function toSearchBar() {
    normalnav.classList.add('visually-hidden')
    searchbar.classList.remove('visually-hidden')
}
function backNav() {
    searchbar.classList.add('visually-hidden')
    normalnav.classList.remove('visually-hidden')
}