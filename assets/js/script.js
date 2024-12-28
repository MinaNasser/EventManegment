// document.addEventListener('DOMContentLoaded', function() {
//     // Smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });

//     // Simple testimonial slider
//     const testimonials = document.querySelectorAll('.testimonial');
//     let currentTestimonial = 0;

//     function showNextTestimonial() {
//         testimonials[currentTestimonial].style.display = 'none';
//         currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//         testimonials[currentTestimonial].style.display = 'block';
//     }

//     // Initially hide all testimonials except the first one
//     testimonials.forEach((testimonial, index) => {
//         if (index !== 0) {
//             testimonial.style.display = 'none';
//         }
//     });

//     // Change testimonial every 5 seconds
//     setInterval(showNextTestimonial, 5000);
// });