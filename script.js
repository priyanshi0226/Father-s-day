const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.classList.add("show");
        }
    });
});

// Show the first section immediately
window.dispatchEvent(new Event("scroll"));
const hearts = document.querySelector(".hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (15 + Math.random()*20) + "px";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

},600);
