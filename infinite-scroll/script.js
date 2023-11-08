const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API

const count = 10;
const apiKey = SECRET;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Helper function to set Attributes on DOM Elements

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

//Create Element for links and photos, add to DOM
function displayPhotos() {
    photosArray.forEach((photo) => {
        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank'); //it will be opent in a new tab
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        })

        //Create <img> for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

        //Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);   
        imageContainer.appendChild(item);
    });
}

//Get pfotos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos()
        //console.log("photosArray", photosArray)
    } catch (error) {
        //Catch Error Here
    }
}

//Check to see if scrolling near buttom of a page, Load more photos. Window is highest level - it is a parent of a document a nd a grand parent of a body
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {        
            // console.log('scrolled');
            // console.log('window.innerHeight', window.innerHeight);
            // console.log('window.scrollY', window.scrollY);
            // console.log('window.innerHeight + window.scrollY', window.innerHeight + window.scrollY)
            // console.log('document.body.offsetHeight', document.body.offsetHeight);
            // console.log('document.body.offsetHeight - 1000', document.body.offsetHeight - 1000);       
            getPhotos();
            console.log('Load more')
        };
    })
//On Load
getPhotos();