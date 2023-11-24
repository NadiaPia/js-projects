const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); //we asign to the mediaStream which vide a user is choosing to share
        videoElement.srcObject = mediaStream; //we pass this video as a source to videoelement
        videoElement.onloadedmetadata = () => { //when it has loaded it's metadata (statis info) it is call a function to play a video
            videoElement.play();
        }

    } catch (error) {
        console.log("error", error)
    }
}

button.addEventListener('click', async () => {
    //Disable Button
    button.disabled = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
})

//on Load
selectMediaStream();