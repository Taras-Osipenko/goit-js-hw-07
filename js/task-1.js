const listOfCategories = document.querySelectorAll("#categories > .item")


console.log("Number of categories:",listOfCategories.length)

const allTitles = document.querySelectorAll('h2')


const allElements = document.querySelectorAll("#categories ul")


allElements.forEach((ul) => console.log("Elements:", ul.children.length))

allTitles.forEach((h2) => console.log("Category:", h2.textContent ))



// const listOfTitle = document.querySelectorAll("#categories  h2")

// const listOfElements = document.querySelectorAll("#categories > li > ul > li")

// console.log(listOfElements.length)

// console.log(listOfTitle)

// console.log(listOfElements)




// listOfTitle.forEach((h2)=> console.log(h2.textContent,
//     "Elements:",listOfElements.length))

