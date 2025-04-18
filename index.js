const hamburger = document.querySelector(".hamburger");
const hamburgerDiv = hamburger.querySelectorAll("div");
const hamburgerNav = document.querySelector(".hamburger-menu");
const navItems = document.querySelectorAll(".hamburger-nav");
const navImage = document.querySelector(".hamburger-Image");


hamburger.addEventListener("click", () => {
	hamburgerNav.classList.toggle("active");
	navItems.forEach((item) => item.classList.toggle("active"));
	hamburgerDiv.forEach(div => div.classList.toggle("active"));
	navImage.classList.toggle("active");
});

gsap.from(".welcome", {
	opacity: 0,
	y: -20,
	duration: 1,
	ease: "power2.out"
});

gsap.from(".store-name", {
	opacity: 0,
	y: -50,
	duration: 1.4,
	delay: 0.2,
	ease: "power3.out"
});

gsap.from(".intro-text", {
	opacity: 0,
	y: 30,
	delay: 0.8,
	duration: 1.4,
	ease: "power2.out"
});

gsap.to(".cta-button", {
	opacity: 1,
	delay: 2,
	duration: 1.2,
	ease: "power2.inOut"
});

gsap.to(".coming-soon", {
	opacity: 1,
	delay: 2.5,
	duration: 1.2,
	ease: "power2.inOut"
});

gsap.to(".scroll-wrapper", {
	x: "-50%", 
	ease: "none",
	duration: 20, 
	repeat: -1
});