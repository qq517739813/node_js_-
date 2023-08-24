let tds = document.querySelectorAll('td')
tds.forEach(item => {
    item.onclick = function () {
        tds.forEach(it => {
            it.style.background = ''
        })
        this.style.background = '#222'
    }
})