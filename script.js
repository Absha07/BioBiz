const contentData = {
  home: `<div class='slideshow-container'>
            <div class='slide fade'>
                <img src='1.png' alt='Slide 1'>
            </div>
            <div class='slide fade'>
                <img src='2.png' alt='Slide 2'>
            </div>
            <div class='slide fade'>
                <img src='3.png' alt='Slide 3'>
            </div>
        </div>`,
  about:
    "<h1>About Us</h1><p>Welcome to BioBiz India. We strive to promote sustainable growth and innovation.</p>",
  india:
    "<h1>India Updates</h1><p>Find the latest updates and trends from India.</p>",
  opportunities:
    "<h1>Opportunities</h1><p>Explore new and exciting opportunities.</p>",
  consulting:
    "<h1>BioBiz Consulting</h1><p>Learn how our consulting services can benefit you.</p>",
  innovation:
    "<h1>Innovation Insights</h1><p>Stay ahead with innovative insights and solutions.</p>",
  insights:
    "<h1>Insights</h1><p>Discover our curated insights on diverse topics.</p>",
  bring: "<h1>BRING</h1><p>Business Resource and Innovation Network Group.</p>",
  contact: "<h1>Contact Us</h1><p>Reach out to us for more information.</p>",
};

function changeContent(page) {
  document.getElementById("content").innerHTML = contentData[page];
  if (page === "home") {
    showSlides();
  }
}
function toggleNav() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("show");
}
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

showSlides();
