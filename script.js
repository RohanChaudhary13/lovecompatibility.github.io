function calculateCompatibility() {
    
    let loveSong = document.getElementById('loveSong');
    let sadSong = document.getElementById('sadSong');
    let friendSong = document.getElementById('friendSong')

    // Pause both audio elements if they are currently playing
    if (!loveSong.paused) {
        loveSong.pause();
    }
    
    if (!sadSong.paused) {
        sadSong.pause();
    }

    if(!friendSong.pause){
        friendSong.pause();
    }
    
    // Generate a random score between 0 and 100
    let score = Math.random() * 100;

    // Round the score to 2 decimal places for a more precise percentage
    let roundedScore = score.toFixed(2);

    // Display the result
    document.getElementById('result').innerText = `Compatibility Score: ${roundedScore}%`;
    document.getElementById('calculateButton').disabled = true;
    document.getElementById('retryButton').style.display = 'inline-block';

    if(score >= 70) {
        // Love scenario
        document.getElementById('resultImage').src = 'love.webp';
        document.getElementById('resultImage').alt = 'Love';
        document.getElementById('resultImage').style.display = 'block'; // Show the image
        document.getElementById('resultMessage').innerText = `Love is in the air! Your compatibility score is ${roundedScore}%.`;
        playLoveSong()
    } else  if (score >=50 && score <70){
        document.getElementById('resultImage').src = 'friends.webp';
        document.getElementById('resultImage').alt = 'Friends';
        document.getElementById('resultImage').style.display = 'block';
        document.getElementById('resultMessage').innerText = `Maybe you're better just being friends! Your compatibility score is ${roundedScore}%.`;
        playFriendSong()
    } else{
        document.getElementById('resultImage').src = 'sadness.webp';
        document.getElementById('resultImage').alt = 'Sadness';
        document.getElementById('resultImage').style.display = 'block'; // Show the image
        document.getElementById('resultMessage').innerText = `Maybe it's not meant to be... Your compatibility score is only ${roundedScore}%.`;
        playSadSong()
    }

    // Update the compatibility score display
    document.getElementById('result').innerText = `Compatibility Score: ${roundedScore}%`;
}



function retryTest() {
    // Clear the input fields
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';

    // Clear the result display
    document.getElementById('result').innerText = '';

    // Re-enable the Calculate button and hide the Retry button
    document.getElementById('calculateButton').disabled = false;
    document.getElementById('retryButton').style.display = 'none';
    
}


let loveAudio = new Audio('love.mp3');
let sadAudio = new Audio('juiceWrld.mp3');
let friendAudio = new Audio('friends.mp3')

function playLoveSong() {
    // Check if sad or friend song is currently playing, pause it if needed
    if (!sadAudio.paused) {
        sadAudio.pause();
    } else if (!friendAudio.paused){
        friendAudio.pause();
    }
    // Play love song
    loveAudio.play();
}

function playSadSong() {
    // Check if love or friend song is currently playing, pause it if needed
    if (!loveAudio.paused) {
        loveAudio.pause();
    } else if (!friendAudio.paused){
        friendAudio.pause();
    }
    // Play sad song
    sadAudio.play();
}

function playFriendSong() {
    // Check if love or sad song is currently playing, pause it if needed
    if (!sadAudio.paused) {
        sadAudio.pause();
    } else if (!loveAudio.paused){
        loveAudio.pause();
    }

    // Play friend song
    friendAudio.play();
}
