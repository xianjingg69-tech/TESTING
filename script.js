document.addEventListener("DOMContentLoaded", function(){

/* ================= TYPING ================= */
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
if(typingText) type();

/* ================= REVEAL ================= */
function reveal(){
    document.querySelectorAll(".reveal-up").forEach(el=>{
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll",reveal);
reveal();

/* ================= THEME ================= */
const toggle = document.getElementById("themeToggle");
if(toggle){
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("light");
});
}

/* ================= SOCIAL ================= */
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

});
});

/* ================= CARD CLICK GLOW ================= */
const cards = document.querySelectorAll(".card");

cards.forEach(card=>{
card.addEventListener("click",()=>{
    cards.forEach(c=>c.classList.remove("active-card"));
    card.classList.add("active-card");
});
});

});
