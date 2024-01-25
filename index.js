var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab"); x
}
var sidemeu = document.getElementById("sidemenu");
function openmenu() {
    sidemeu.style.right = "0";
} function closemenu() {
    sidemeu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwxN4hgvCZonBz7maRlCT4dgttcMqx5KhTVYjXKJmWlgM7KyufVrNv0S9e0VqMimhu9/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully."
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

// function smoothScroll(targetId) {
//     const targetElement = document.getElementById(targetId);
//     targetElement.scrollIntoView({ behavior: 'smooth' });
//   }

//   // Attach smooth scrolling to links or buttons
//   document.getElementById('d1').addEventListener('click', function() {
//     smoothScroll('header');
//   });
//   document.getElementById('d2').addEventListener('click', function() {
//     smoothScroll('about');
//   });
//   document.getElementById('d3').addEventListener('click', function() {
//     smoothScroll('portfolio');
//   });
//   document.getElementById('d4').addEventListener('click', function() {
//     smoothScroll('contact');
//   });

// Smoodh scrolling animation

document.addEventListener('DOMContentLoaded', function() {
    const allLinks = document.querySelectorAll("nav ul li a");

    allLinks.forEach(target => {
        target.onclick = function(e) {
            e.preventDefault();

            let hrefValue = target.getAttribute('href');
            let targetElement = document.querySelector(hrefValue);

            if (targetElement) {
                console.log(targetElement);
                let offsetTop = targetElement.offsetTop;

                window.scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        };
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     // Get all links with the class 'smooth-scroll'
//     var smoothScrollLinks = document.querySelectorAll('nav ul li a');
//     console.log(smoothScrollLinks);
//     // Loop through each link and add a click event listener
//     smoothScrollLinks.forEach(function(link) {
//       link.addEventListener('click', function(e) {
//         e.preventDefault(); // Prevent the default behavior of the anchor tag

//         // Get the target element's ID from the href attribute
//         var targetId = this.getAttribute('href').substring(1);
//         var targetElement = document.getElementById(targetId);
//         // Scroll to the target element smoothly
//         if (targetElement) {
//             targetElement.classList.add('smooth-scroll');
//             targetElement.scrollIntoView({
//                 behavior: "smooth",
//             });
        
//             // Remove smooth-scroll class after the animation is complete
//             setTimeout(() => {
//                 targetElement.classList.remove('smooth-scroll');
//             }, 500); // Adjust the timeout value to match the transition duration
//         }
//       });
//     });
//   });

