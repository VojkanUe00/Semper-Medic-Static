 // Dugme
 const scrollToTopButton = document.getElementById("scrollToTop");
    
 // Pokaži dugme kad skrolujemo nadole 300px
 window.addEventListener("scroll", () => {
     if (window.scrollY > 300) {
         scrollToTopButton.style.display = "block";
     } else {
         scrollToTopButton.style.display = "none";
     }
 });

 // Klik - skroluj na vrh
 scrollToTopButton.addEventListener("click", () => {
     window.scrollTo({
         top: 0,
         behavior: "smooth"
     });
 });