/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 390) {
      current = section.getAttribute('id');
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains(current)) {
      link.classList.add('active');
    }
  })
})


  /*Remove menu mobile*/
const navMenu = document.getElementById("nav-menu");
navLinks.forEach((n) => n.addEventListener("click", () => { navMenu.classList.remove("show") }));


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: 1600,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home-title", {delay: 100});
sr.reveal(".button", { delay: 100 });
sr.reveal(".home-img", { delay: 100 });
sr.reveal(".home-social-icon", { delay: 100 });

/*SCROLL ABOUT*/
sr.reveal(".about-img", {delay: 100});
sr.reveal(".about-subtitle", { delay: 100 });
sr.reveal(".about-text", { delay: 100 });

/*SCROLL SKILLS*/
sr.reveal(".skills-subtitle", {delay: 100});
sr.reveal(".skills-text", {delay: 100});
sr.reveal(".education-data",{delay: 100})
sr.reveal(".skills-data", { delay: 100 });
sr.reveal(".skills-img", { delay: 100 });

/*SCROLL PROJECTS*/
sr.reveal(".project-img", { delay: 100});
sr.reveal(".contact-img", { delay: 100 });
sr.reveal(".submit", { delay: 100 });



// function myFunction(){
//   var element = document.body;
//   element.classList.toggle("dark-mode")
// }


var messageArr =["MERN Developer"];
var textPosition = 0;
var speed = 200;

typewriter = () => {
    document.querySelector("#jobTitle").innerHTML = messageArr[0].substring(0, textPosition);
    if (textPosition++ != messageArr[0].length)
      setTimeout(typewriter, speed)
  
}

window.addEventListener("load", typewriter);

