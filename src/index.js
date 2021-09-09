// write your code here
//const BASE_URL = 'http://localhost:3000/ramens'

// const ramenMenu = document.getElementById('ramen-menu');
// const ramenDetails = document.getElementById('ramen-details');

// let fetchRamenData = () => {
//     fetch(BASE_URL)
//     .then(response => response.json())
//     .then(json => renderRamensFactory(json))
// }

// fetchRamenData()

// let renderRamensFactory = (jsonRamenData) => {
//     jsonRamenData.map(ramen => renderRamen(ramen))
// }

// let renderRamen = (ramen) => {
//     let ramenImg = document.createElement('img')
//     ramenImg.src = ramen.image
//     ramenImg.id = `ramen-${ramen.id}`
//     ramenImg.addEventListener('click', () => handleRamenClick
//     (ramen))
//     ramenMenu.appendChild(ramenImg)
// }

// let handleRamenClick = (event) => {
//     ramenDetails.childNodes[1].src = ramen.image
//     ramenDetails.childNodes[3].src = ramen.name


// }
// const RAMEN_URL = 'http://localhost:3000/ramens'
// const ramenMenu = document.getElementById('ramen-menu');
// const ramenDetails = document.getElementById('ramen-details');
// const ramenRating = document.getElementById('rating-display');
// const ramenComment = document.getElementById('comment-display')
// const ramenForm = document.getElementById('new-ramen');
// const newRamenName = document.getElementById("new-name");
// const newRamenRestaurant = document.getElementById ("new-restaurant");
// const newRamenImage = document.getElementById("new-image");
// const newRamenRating = document.getElementById("new-rating");
// const newRamenComment = document.getElementById("new-comment");

// let fetchData = (url) => {
//     fetch(url)
//     .then(response => response.json())
//     .then(json => renderRamenFactory(json))
// }

// let renderRamenFactory = (jsonData) => {
//     jsonData.map(ramen => renderRamen(ramen))
// }

// let renderRamen = (ramen) => {
//     let ramenImg = document.createElement('img')
//     ramenImg.src = ramen.image
//     ramenImg.id = `ramen-${ramen.id}`
//     ramenImg.addEventListener('click', () => handleRamenClick(ramen))
//     ramenMenu.appendChild(ramenImg)
// }

// let handleRamenClick = (ramen) => {
//     ramenDetails.childNodes[1].src = ramen.image
//     ramenDetails.childNodes[3].innerText = ramen.name
//     ramenDetails.childNodes[5].innerText = ramen.restaurant
//     ramenRating.innerText = ramen.rating
//     ramenComment.innerText = ramen.comment
// }
//  let captureFormData = (event) => {
//      event.preventDefault();
//      let name = newRamenName.value
//      let restaurant = newRamenRestaurant.value
//      let image = newRamenImage.value
//      let rating = newRamenRating.value
//      let comment = newRamenComment
//      let neRamen = {
//         "id": "",
//         "name": "",
//         "restaurant": "",
//         "image": "",
//         "rating": "",
//         "comment": "",
//      }
//  }



// fetchData(RAMEN_URL)

const RAMEN_URL = 'http://localhost:3000/ramens'

const ramenMenu = document.getElementById('ramen-menu');
const ramenDetails = document.getElementById('ramen-details');
const ramenRating = document.getElementById('rating-display');
const ramenComment = document.getElementById('comment-display');
const ramenForm = document.getElementById('new-ramen');
const newRamenName = document.getElementById('new-name');
const newRamenRestaurant = document.getElementById('new-restaurant');
const newRamenImage = document.getElementById('new-image');
const newRamenRating = document.getElementById('new-rating');
const newRamenComment = document.getElementById('new-comment');

let fetchData = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(json => renderRamenFactory(json))
}

let renderRamenFactory = (jsonData) => {
    jsonData.map(ramen => renderRamen(ramen))
}

let renderRamen = (ramen) => {
    let ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenImg.id = `ramen-${ramen.id}`
    ramenImg.addEventListener('click', () =>
        handleRamenClick(ramen)
    )
    ramenMenu.appendChild(ramenImg)
}

let handleRamenClick = (ramen) => {
    ramenDetails.childNodes[1].src = ramen.image
    ramenDetails.childNodes[3].innerText = ramen.name
    ramenDetails.childNodes[5].innerText = ramen.restaurant
    ramenRating.innerText = ramen.rating
    ramenComment.innerText = ramen.comment
}

let captureFormData = (event) => {
    event.preventDefault();
    let name = newRamenName.value
    let restaurant = newRamenRestaurant.value
    let image = newRamenImage.value
    let rating = newRamenRating.value
    let comment = newRamenComment.value
    let newRamenObj = {
        "id": "sandbox",
        "name": name,
        "restaurant": restaurant,
        "image": image,
        "rating": rating,
        "comment": comment
    }
    renderRamen(newRamenObj)
    newRamenName.value = ""
    newRamenRestaurant.value = ""
    newRamenImage.value = ""
    newRamenRating.value = ""
    newRamenComment.value = ""
}

ramenForm.addEventListener('submit', captureFormData)
fetchData(RAMEN_URL)