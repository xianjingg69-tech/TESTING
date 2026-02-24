document.addEventListener("DOMContentLoaded", function(){

/* TYPING */
const typingText = document.querySelector(".typing-text");
const text = "Lukman Al Khakim";
let index = 0;

function type(){
    if(index < text.length){
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type,80);
    }
}
type();

/* REVEAL ANIMATION */
function reveal(){
    const elements = document.querySelectorAll(".reveal-up");
    elements.forEach(el=>{
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll",reveal);
reveal();

/* THEME TOGGLE */
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("light");
});

/* SOCIAL MEDIA OPEN APP */
document.querySelectorAll("[data-social]").forEach(btn=>{
btn.addEventListener("click",function(e){
e.preventDefault();

const username = this.dataset.username;
const platform = this.dataset.social;

if(platform === "instagram"){
window.location.href = `instagram://user?username=${username}`;
setTimeout(()=>{
window.location.href = `https://instagram.com/${username}`;
},1000);
}

if(platform === "tiktok"){
window.location.href = `snssdk1128://user/profile/${username}`;
setTimeout(()=>{
window.location.href = `https://tiktok.com/@${username}`;
},1000);
}

/* ================= CARD CLICK GLOW ================= */
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        // Hapus glow dari card lain
        cards.forEach(c => c.classList.remove("active-card"));

        // Tambahkan glow ke yang diklik
        card.classList.add("active-card");

    });
    
});
