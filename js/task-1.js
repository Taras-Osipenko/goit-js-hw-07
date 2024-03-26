const listOfCategories = document.querySelectorAll("#categories > .item")


console.log("Number of categories:",listOfCategories.length)


const listOfTitle = document.querySelectorAll("#categories  h2")

const listOfElements = document.querySelectorAll("#categories  ul > li")

console.log(listOfElements.length)

console.log(listOfTitle)
listOfTitle.forEach((h2)=> console.log(h2.textContent,
    "Elements:",listOfElements.length))

