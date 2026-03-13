// // أنيميشن الظهور التدريجي
// function reveal() {
//     const reveals = document.querySelectorAll(".reveal");
//     reveals.forEach(el => {
//         const windowHeight = window.innerHeight;
//         const elementTop = el.getBoundingClientRect().top;
//         if (elementTop < windowHeight - 100) {
//             el.classList.add("active");
//         }
//     });
// }

// window.addEventListener("scroll", reveal);
// window.addEventListener("load", reveal); // للتأكد من عملها عند تحميل الصفحة

// // سكرول سلس
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         if (targetId.startsWith('#')) {
//             const target = document.querySelector(targetId);
//             if (target) {
//                 target.scrollIntoView({ behavior: 'smooth' });
//             }
//         }
//     });
// });

// // تأثير الضغط على النصوص التفاعلية
// document.querySelectorAll('.interactive-text').forEach(item => {
//     item.addEventListener('mousedown', () => {
//         item.style.transform = "scale(0.97)";
//     });
//     item.addEventListener('mouseup', () => {
//         item.style.transform = "scale(1)";
//     });
// });




// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll("nav ul li a");

// window.addEventListener("scroll", () => {

//     let current = "";

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 150;
//         const sectionHeight = section.clientHeight;

//         if (scrollY >= sectionTop) {
//             current = section.getAttribute("id");
//         }

//     });

//     navLinks.forEach(link => {

//         link.classList.remove("active");

//         if (link.getAttribute("href") === "#" + current) {
//             link.classList.add("active");
//         }

//     });

// });




// // 1. إضافة تفاعل لزر Send Message
// const sendButton = document.querySelector('.btn-primary');
// if (sendButton) {
//     sendButton.addEventListener('click', function (e) {
//         const form = document.querySelector('.glass-form');
//         const inputs = form.querySelectorAll('input, textarea');
//         let isComplete = true;

//         inputs.forEach(input => { if (!input.value) isComplete = false; });

//         if (!isComplete) {
//             form.style.animation = "shake 0.4s ease";
//             setTimeout(() => form.style.animation = "", 400);
//         } else {
//             this.innerHTML = "Message Sent! ✓";
//             this.style.background = "#22c55e";
//             this.style.borderColor = "#22c55e";
//         }
//     });
// }

// const themes = [
// {
// bg:"#030712",
// accent:"#38bdf8",
// glass:"rgba(30,41,59,0.7)",
// border:"rgba(255,255,255,0.1)"
// },
// {
// bg:"#050505",
// accent:"#d4af37",
// glass:"rgba(40,40,40,0.6)",
// border:"rgba(212,175,55,0.25)"
// },
// {
// bg:"#020617",
// accent:"#22c55e",
// glass:"rgba(22,101,52,0.4)",
// border:"rgba(34,197,94,0.2)"
// },
// {
// bg:"#0b0618",
// accent:"#a855f7",
// glass:"rgba(88,28,135,0.4)",
// border:"rgba(168,85,247,0.2)"
// }
// ];

// let currentTheme = localStorage.getItem("themeIndex");

// if(currentTheme === null){
// currentTheme = 0;
// }else{
// currentTheme = parseInt(currentTheme);
// }

// applyTheme(currentTheme);

// document.getElementById("theme-toggle").onclick = () => {

// currentTheme++;

// if(currentTheme >= themes.length){
// currentTheme = 0;
// }

// applyTheme(currentTheme);

// localStorage.setItem("themeIndex", currentTheme);

// };

// function applyTheme(index){

// const root = document.documentElement;

// root.style.setProperty('--bg', themes[index].bg);
// root.style.setProperty('--accent', themes[index].accent);
// root.style.setProperty('--glass', themes[index].glass);
// root.style.setProperty('--border', themes[index].border);

// }
// --- شاشة التحميل ---
window.addEventListener("load", () => {
    // إخفاء loader بعد التحميل
    const loader = document.querySelector(".loader");
    if(loader){
        loader.classList.add("hidden");
        setTimeout(() => loader.style.display = "none", 800);
    }
    reveal(); // تشغيل الـ reveal عند التحميل
});

// --- أنيميشن الظهور التدريجي للسكشنات ---
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

// --- سكرول سلس للروابط ---
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// --- تأثير الضغط على النصوص التفاعلية ---
document.querySelectorAll('.interactive-text').forEach(item => {
    item.addEventListener('mousedown', () => { item.style.transform = "scale(0.97)"; });
    item.addEventListener('mouseup', () => { item.style.transform = "scale(1)"; });
});

// --- تحديث الـ Navbar حسب القسم الحالي ---
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// --- زر Send Message مع shake effect ---
const sendButton = document.querySelector('.btn-primary');
if (sendButton) {
    sendButton.addEventListener('click', function (e) {
        const form = document.querySelector('.glass-form');
        const inputs = form.querySelectorAll('input, textarea');
        let isComplete = true;

        inputs.forEach(input => { if (!input.value) isComplete = false; });

        if (!isComplete) {
            form.style.animation = "shake 0.4s ease";
            setTimeout(() => form.style.animation = "", 400);
        } else {
            this.innerHTML = "Message Sent! ✓";
            this.style.background = "#22c55e";
            this.style.borderColor = "#22c55e";
        }
    });
}

// --- الثيمات المتغيرة ---
const themes = [
    { bg:"#030712", accent:"#38bdf8", glass:"rgba(30,41,59,0.7)", border:"rgba(255,255,255,0.1)" },
    { bg:"#050505", accent:"#d4af37", glass:"rgba(40,40,40,0.6)", border:"rgba(212,175,55,0.25)" },
    { bg:"#020617", accent:"#22c55e", glass:"rgba(22,101,52,0.4)", border:"rgba(34,197,94,0.2)" },
    { bg:"#0b0618", accent:"#a855f7", glass:"rgba(88,28,135,0.4)", border:"rgba(168,85,247,0.2)" }
];

let currentTheme = localStorage.getItem("themeIndex");
currentTheme = currentTheme === null ? 0 : parseInt(currentTheme);
applyTheme(currentTheme);

document.getElementById("theme-toggle").onclick = () => {
    currentTheme++;
    if(currentTheme >= themes.length) currentTheme = 0;
    applyTheme(currentTheme);
    localStorage.setItem("themeIndex", currentTheme);
};

function applyTheme(index){
    const root = document.documentElement;
    root.style.setProperty('--bg', themes[index].bg);
    root.style.setProperty('--accent', themes[index].accent);
    root.style.setProperty('--glass', themes[index].glass);
    root.style.setProperty('--border', themes[index].border);
}

