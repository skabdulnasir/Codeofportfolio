var loader = document.getElementById("preloader");
const loadout = setTimeout(() => {
    loader.style.display="none";
    document.body.style.overflow="unset";
}, 3000);



let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord= words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

Array.from(currentWord.children).forEach((letter,i)=>{
    setTimeout(() => {
        letter.className = "letter out";
    },i * 80);
}); 

nextWord.style.opacity = "1";
Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(() => {
       letter.className = "letter in"; 
    }, 340 + i * 80);
});

currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

let menuLi = document.querySelectorAll('header ul li a');
let section =  document.querySelectorAll('section');

function activeMenu(){
    let len=section.length;
    while(--len && window.scrollY + 250 < section[len].offsetTop){} //97//
    menuLi.forEach(sec=> sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

//sticky navbar//
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

//toggle icon navbar//

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick =()=>{
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll =()=>{
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}

//parallax//

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom= document.querySelectorAll(".scroll-Bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-Top");
scrollTop.forEach((el)=>observer.observe(el));