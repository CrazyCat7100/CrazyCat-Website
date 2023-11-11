let toggleOptions1 = document.getElementsByClassName('toggleOptions1')[0]
let toggleOptions2 = document.getElementsByClassName('toggleOptions2')[0]
let options = document.getElementsByClassName('options')[0]
let header = document.getElementsByTagName('header')[0]

toggleOptions1.addEventListener('click', function () {
    options.style.display = 'flex'
    header.style.display = 'none'
})

toggleOptions2.addEventListener('click', function () {
    options.style.display = 'none'
    header.style.display = flex
})