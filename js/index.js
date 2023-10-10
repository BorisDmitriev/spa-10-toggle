const liElements = document.getElementsByTagName('li')
const ul = document.querySelector('ul')
const alertEl = document.querySelector('.alert')

for (const li of liElements) {
    li.addEventListener( 'click', e => {
        
        for (const li of liElements) {
            li.classList.remove('active')
        }

        e.currentTarget.classList.add('active')

        alertEl.style.display = 'block'
        alertEl.textContent = `You selected ${e.currentTarget.textContent}` 
    } )
}

document.getElementsByTagName('button')[0].addEventListener( 'click', e => {
    ul.classList.toggle('hide')
} )