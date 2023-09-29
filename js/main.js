//Task 1.0 Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main")
console.log(mainEl)

// Task 1.1
// Set the background color of mainEl using the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this:
// 'var(--main-bg)'
mainEl.style.backgroundColor = 'var(--main-bg)'

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.
const h1 = document.createElement('h1')
h1.textContent = 'SEI Rocks!'
mainEl.appendChild(h1)
console.log(h1)

// Task 1.3
// Add a class of flex-ctr to mainEl.
// Hint: Element.classList API

mainEl.classList.add("flex-ctr")
console.log(mainEl)
mainEl.style.textAlign = 'center'
