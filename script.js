window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "images/image.png");
    bannerHeading.textContent = "Deep Focus";
    bannerText.textContent = "Keep your focus and enjoy the serenity";
  });
function playAll(songNumber){
    var audioElement=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName="music/"+songNumber+".mp3";
    var currentRow=document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="Images/play-button.svg">';
        currentRow.classList.remove("highlight");
        // currentRow.classList.remove("highlight");
        banner.style.backgroundImage = "url(Images/banner1 (1).svg)";
        bannerImage.setAttribute("src", "Images/image.png");
        bannerHeading.textContent = "Deep Focus";
        bannerText.textContent = "Keep your focus and enjoy the serenity";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="Images/pause-button.svg">';
        currentRow.classList.add("highlight");
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(Images/b01.png)";
            bannerImage.setAttribute("src", "Images/image 1.png");
            bannerHeading.textContent = "Mike Posner";
            bannerText.textContent = "Ishaan Kaushik";
        }
        if (songNumber === 2) {
            banner.style.backgroundImage = "url(Images/b02.jpg)";
            bannerImage.setAttribute("src", "Images/Image 2.jpg");
            bannerHeading.textContent = "Lukka Chuppi";
            bannerText.textContent = "A.R.Rahaman,Lata Mangeshkar";
            
        }
        if (songNumber === 3) {
            banner.style.backgroundImage = "url(Images/b03.jpg)";
            bannerImage.setAttribute("src", "Images/Image 3.jpg");
            bannerHeading.textContent = "The Nights";
            bannerText.textContent = "Avicii";
            
        }
        if (songNumber === 4) {
            banner.style.backgroundImage = "url(Images/b04.jpg)";
            bannerImage.setAttribute("src", "Images/Image 4.jpg");
            bannerHeading.textContent = "Mast Magan";
            bannerText.textContent = "Arijit singh,Chinmayi Sripada";
            
        }
        if (songNumber === 5) {
            banner.style.backgroundImage = "url(Images/b05.jpg)";
            bannerImage.setAttribute("src", "Images/Image 5.jpg");
            bannerHeading.textContent = "Raatann Lambiyan";
            bannerText.textContent = "Jubin Nautiyal,Asees Kaur";
            
        }
        if (songNumber === 6) {
            banner.style.backgroundImage = "url(Images/b06.jpg)";
            bannerImage.setAttribute("src", "Images/Image 6.jpg");
            bannerHeading.textContent = "Sia Cheap Thrills";
            bannerText.textContent = "Sean Paul,Sia";
            
        }
        if (songNumber === 7) {
            banner.style.backgroundImage = "url(Images/b07.jpg)";
            bannerImage.setAttribute("src", "Images/image 7.jpg");
            bannerHeading.textContent = "Deva Shree Ganesha";
            bannerText.textContent = "Ajay Gogavale,Ajay-Atul";
        }
        if (songNumber === 8) {
            banner.style.backgroundImage = "url(Images/b08.jpg)";
            bannerImage.setAttribute("src", "Images/Image 8.jpg");
            bannerHeading.textContent = "Agar Tum Sath Ho";
            bannerText.textContent = "Arijit singh";
        }
        if (songNumber === 9) {
            banner.style.backgroundImage = "url(Images/b09.jpg)";
            bannerImage.setAttribute("src", "Images/Image 9.jpg");
            bannerHeading.textContent = "Param Sundari";
            bannerText.textContent = "A.R.Rahaman,Shreya Ghoshal";
        }
        if (songNumber === 10) {
            banner.style.backgroundImage = "url(Images/b10.jpg)";
            bannerImage.setAttribute("src", "Images/Image 10.jpg");
            bannerHeading.textContent = "Gangu Leader";
            bannerText.textContent = "Anirudh";
        }
        if (songNumber === 11) {
            banner.style.backgroundImage = "url(Images/b11.jpg)";
            bannerImage.setAttribute("src", "Images/Image 11.jpg");
            bannerHeading.textContent = "Life Of Ram";
            bannerText.textContent = "Pradeep Kumar";
        }
    }
}
function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="Images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="Images/play-button.svg">';
    }
}