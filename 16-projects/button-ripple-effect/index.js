const btnEL = document.querySelector(".btn");

btnEL.addEventListener("mouseover", (event)=>{
    const y = (event.pageY - btnEL.offsetTop);
    const x = (event.pageX - btnEL.offsetLeft);

    btnEL.style.setProperty("--xPos", x +"px");
    btnEL.style.setProperty("--yPos", y +"px");

});