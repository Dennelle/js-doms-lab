// Task 3.0 Copy the following data structure to the top of script.js:
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//Task 1.0 Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main")
//console.log(mainEl)

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

mainEl.classList.add('flex-ctr')
//console.log(mainEl)
mainEl.style.textAlign = 'center'

// Task 2.0
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu')
//console.log(topMenuEl);

// Task 2.1
// Set the height topMenuEl element to be 100%.
topMenuEl.style.height = "100%"

// Task 2.2
// Set the background color of topMenuEl using the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Task 2.3
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around')

// Task 3.1
// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.

// const menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];

// On the new element, add an href attribute with its value set to the href property of the "link" object.

menuLinks.forEach(function (link) {
  let anchorEl = document.createElement('a');
  anchorEl.textContent = link.text;
  anchorEl.setAttribute('href', link.href);
  // Set the new element's content to the value of the text property of the "link" object.
  console.log(anchorEl)
 // Append the new element to the topMenuEl element.
topMenuEl.append(anchorEl);
console.log(topMenuEl)
  });
