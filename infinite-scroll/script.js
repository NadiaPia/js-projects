// Unsplash API

const count = 10;
const apiKey = SECRET;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get pfotos from Unsplash API

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("data", data)
    } catch (error) {
        //Catch Error Here
    }
}

//On Load
getPhotos();