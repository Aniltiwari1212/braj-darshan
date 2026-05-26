 
 
 window.onload = function () {

  let currentLang = "en";

  const langBtn = document.querySelector(".lang-btn");

  const originalTexts = new Map();

  /* Get All Text Nodes */

  function getTextNodes(element) {

    let textNodes = [];

    for (const node of element.childNodes) {

      if (
        node.nodeType === 3 &&
        node.textContent.trim() !== ""
      ) {

        textNodes.push(node);

      }

      else if (
        node.nodeType === 1 &&
        node.tagName !== "SCRIPT" &&
        node.tagName !== "STYLE" &&
        !node.classList.contains("lang-btn")
      ) {

        textNodes.push(...getTextNodes(node));
      }
    }

    return textNodes;
  }

  /* Translate Page */

  async function translatePage(targetLang) {

    const textNodes = getTextNodes(document.body);

    for (const node of textNodes) {

      const originalText =
        originalTexts.get(node) || node.textContent.trim();

      if (!originalTexts.has(node)) {
        originalTexts.set(node, originalText);
      }

      try {

        if (targetLang === "hi") {

          const url =
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(originalText)}`;

          const response = await fetch(url);

          const data = await response.json();

          node.textContent = data[0][0][0];

        }

        else {

          node.textContent = originalTexts.get(node);
        }

      } catch (error) {

        console.log(error);
      }
    }
  }

  /* Button Click */

  langBtn.addEventListener("click", async () => {

    if (currentLang === "en") {

      await translatePage("hi");

      currentLang = "hi";

      langBtn.innerText = "English";

    }

    else {

      await translatePage("en");

      currentLang = "en";

      langBtn.innerText = "हिन्दी";
    }

  });

};
var swiper4 = new Swiper(".mentSli", {
    slidesPerView: 1,
      spaceBetween: 10,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
       autoplay: {
        delay: 2500, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: true, 
      },
         navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
  });

   var swiper = new Swiper(".myStories", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
       autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: true, 
      },
         navigation: {
      nextEl: ".swiper-button-next11",
      prevEl: ".swiper-button-prev11",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    
   var swiper = new Swiper(".myStories2", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      //  autoplay: {
      //   delay: 2500, 
      //   disableOnInteraction: false, 
      //   pauseOnMouseEnter: true, 
      // },
         navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });


       var swiper = new Swiper(".festivalSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 1000, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: true, 
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });



     var swiper = new Swiper(".mytaste", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
       autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: true, 
      },
         navigation: {
      nextEl: ".swiper-button-next11",
      prevEl: ".swiper-button-prev11",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", function () {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.clientHeight;

if (pageYOffset >= sectionTop) {
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


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


window.addEventListener('scroll',()=> indicateScrollBar())

function indicateScrollBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-bar").style.width =  `${scrolled}%`;
 
} 

// AOS.init();





 let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




// insta stories js strt








    