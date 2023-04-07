const btnEl = document.querySelector(".btn");
const closeEl = document.querySelector(".close");
const videoContainerEl = document.querySelector(".video-container");
const vedioEl = document.querySelector("video");

btnEl.addEventListener("click", ()=>{
    videoContainerEl.classList.remove("active");
})

closeEl.addEventListener("click", ()=>{
    videoContainerEl.classList.add("active");
    vedioEl.pause();
    vedioEl.currentTime = 0;
})
