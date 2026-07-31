// =====================================
// HSR WEBSITE
// JavaScript
// =====================================

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================
    // MENU
    // ==========================
    
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    
    menuBtn.addEventListener("click", () => {
        
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
        
    });
    
    overlay.addEventListener("click", closeMenu);
    
    function closeMenu() {
        
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        
    }
    
    document.querySelectorAll("#sidebar a").forEach(link => {
        
        link.addEventListener("click", closeMenu);
        
    });
    
    
    // ==========================
    // BACK TO TOP
    // ==========================
    
    const backToTop = document.getElementById("backToTop");
    
    window.addEventListener("scroll", () => {
        
        if (window.scrollY > 300) {
            
            backToTop.style.display = "block";
            
        } else {
            
            backToTop.style.display = "none";
            
        }
        
    });
    
    backToTop.addEventListener("click", () => {
        
        window.scrollTo({
            
            top: 0,
            
            behavior: "smooth"
            
        });
        
    });
    
    
    // ==========================
    // HEADER EFFECT
    // ==========================
    
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        
        if (window.scrollY > 40) {
            
            header.style.background = "rgba(20,20,20,.92)";
            header.style.boxShadow = "0 0 25px rgba(255,0,0,.35)";
            
        } else {
            
            header.style.background = "rgba(20,20,20,.65)";
            header.style.boxShadow = "none";
            
        }
        
    });
    
    
    // ==========================
    // CARD ANIMATION
    // ==========================
    
    const cards = document.querySelectorAll(".card");
    
    const observer = new IntersectionObserver((entries) => {
        
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                
            }
            
        });
        
    }, {
        
        threshold: .15
        
    });
    
    cards.forEach(card => {
        
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = ".7s";
        
        observer.observe(card);
        
    });
    
});


// ==========================
// LOADING SCREEN
// ==========================

window.addEventListener("load", () => {
    
    const loading = document.getElementById("loading-screen");
    
    const progress = document.querySelector(".loading-progress");
    
    if (progress) {
        
        progress.style.width = "100%";
        
    }
    
    setTimeout(() => {
        
        loading.style.opacity = "0";
        
        setTimeout(() => {
            
            loading.style.display = "none";
            
        }, 700);
        
    }, 1800);
    
});


// ==========================
// DIGITAL CLOCK
// ==========================

function updateClock() {
    
    const now = new Date();
    
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    
    const clock = document.getElementById("clock");
    
    if (clock) {
        
        clock.innerHTML = h + ":" + m + ":" + s;
        
    }
    
}

setInterval(updateClock, 1000);
updateClock();


// ==========================
// PAGE FADE
// ==========================

window.onpageshow = function() {
    
    document.body.style.opacity = "1";
    
};

document.body.style.opacity = "0";
document.body.style.transition = ".5s";
// =====================================
// SCROLL PROGRESS BAR
// =====================================

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight=
document.documentElement.scrollHeight-
window.innerHeight;

const progress=
(window.pageYOffset/totalHeight)*100;

progressBar.style.width=progress+"%";

});
// =====================================
// CURSOR GLOW
// =====================================

const glow=document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.opacity="1";

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

document.addEventListener("touchstart",(e)=>{

const touch=e.touches[0];

const wave=document.createElement("div");

wave.className="touch-effect";

wave.style.left=touch.clientX+"px";

wave.style.top=touch.clientY+"px";

document.body.appendChild(wave);

setTimeout(()=>{

wave.remove();

},800);

});
// =====================================
// HSR COPYRIGHT
// =====================================

(function () {

    console.log("%cHSR | Hồ Chí Minh Roleplay",
        "color:#FFD700;font-size:22px;font-weight:bold;");

    console.log("%c© 2026 HSR. All Rights Reserved.",
        "color:#ff4444;font-size:14px;");

    // Chặn chuột phải
    document.addEventListener("contextmenu", function(e){
        e.preventDefault();
    });

    // Chặn một số phím tắt
    document.addEventListener("keydown", function(e){

        if(e.key === "F12"){
            e.preventDefault();
        }

        if(e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key.toUpperCase())){
            e.preventDefault();
        }

        if(e.ctrlKey && e.key.toUpperCase() === "U"){
            e.preventDefault();
        }

    });

})();
