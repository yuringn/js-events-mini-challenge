/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/

function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

header.addEventListener("click", function(e){
    // console.log(e.target)
    toggleColor(header)
})

/***** Deliverable 2 *****/

const buttonLikes = document.querySelector("#profile button.like-button")
let increaseLike = traveler.likes
buttonLikes.addEventListener("click", function(e) {
    console.log(increaseLike)
    increaseLike++
    likes.textContent = increaseLike
})

/***** Deliverable 3 *****/ 
const form = document.querySelector("form#new-animal-sighting-form")

form.addEventListener("submit", function(e){
    event.preventDefault()
    const speciesInput = event.target.species.value
    const videoLinkInput = event.target.link.value
    const photoInput = event.target.photo.value
    const descriptionInput = event.target.description.value
    
    const newObject = {
        species: speciesInput,
        link: videoLinkInput,
        photo: photoInput,
        description: descriptionInput

    }
    renderAnimalSightingPost(newObject)
})
 

// Hi Michelle I have a question and
//  this was the question I meant to ask this morning. 
//  On Deliverable 4, if I used an anonymous callback like below,
// how  am I able to manipulate DOM like I did on line 103 ? Thank you. 

// traveler.animalSightings.forEach((animalSightingObj) => {
//          const li = document.createElement("li")
//          li.dataset.id = animalObject.id
            
//          const p = document.createElement("p")
//          p.textContent = animalObject.description
            
//          const img = document.createElement("img")
//          img.src = animalObject.photo
//          img.alt = animalObject.species
            
//          const a = document.createElement("a")
//          a.href = animalObject.link
//          a.target = "_blank"
//          a.textContent = `Here's a video about the ${animalObject.species} species!`
            
//          li.append(p, img, a)
            
//          const animalsUl = document.querySelector("#animals")
//          animalsUl.append(li)
// }