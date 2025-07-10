// Select the toggle switch
const toggleSwitch = document.getElementById("darkmode-toggle");

// Check local storage for mode
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true; // Keep switch ON
}

// Toggle dark mode when clicked
toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled"); // Save in local storage
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled"); // Save in local storage
    }
});






$(function(){
    $('.tab-nav li').click(function(e){
        e.preventDefault()
        $('.tab-nav li').removeClass('on')
        $(this).addClass('on')
        let idx = $(this).index()
        $('.tabitem').hide()
        $('.tabitem').eq(idx).show()
    })

    // $(window).scroll(function(){
    //     if($(window).scrollTop() >= 2000){
    //         $('.left').fadeIn(300)
    //     }else {
    //         $('.left').fadeOut(300)
    //     }
    // })

})

$(document).ready(function () {
    function animateSNS() {
        $(".sns.right, .sns.left").each(function () {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > elementTop) {
                if ($(this).hasClass("right")) {
                    $(this).css({
                        transform: "translateX(0px)",
                        opacity: "1",
                        transition: "1s ease-in-out"
                    });
                } else if ($(this).hasClass("left")) {
                    $(this).css({
                        transform: "translateX(0px)",
                        opacity: "1",
                        transition: "1s ease-in-out"
                    });
                }
            }
        });
    }


    
    // Initially hide and position elements
    $(".sns.right").css({
        transform: "translateX(300px) rotate(10deg)",
        opacity: "0"
    });

    $(".sns.left").css({
        transform: "translateX(-300px) rotate(-10deg)",
        opacity: "0"
    });

    // Run animation on scroll
    $(window).on("scroll", animateSNS);

    // Also check on page load in case elements are already in view
    animateSNS();
});

$(document).ready(function () {
    function checkVisibility() {
        $(".sns").each(function () {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom - 100) { // Trigger animation when in view
                $(this).addClass("visible");
            }
        });
    }

    $(window).on("scroll", checkVisibility);
    checkVisibility(); // Run once on load
});



const rows = document.querySelectorAll(".row");
  const masterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".container-KVD",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  rows.forEach((row, index) => {
    const wrapper = row.querySelector(".wrapper");
    const isLeft = row.classList.contains("left");
    const xStart = isLeft ? "-100%" : "100%";

    masterTimeline.fromTo(
      wrapper,
      {
        x: xStart,
        opacity: 0,
        rotate: -10,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      },
       index === 0 ? 0 : "-=0.3"
    //   "+=0.05"  small delay between each row
    );
  });

  // Fade in iPhone frame after all rows are in
  masterTimeline.to(".iphone-frame", {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  }, "+=0.1"); // add slight delay after last row


  const toggle = document.getElementById("darkmode-toggle");
    const body = document.body;
    const logoImg = document.querySelector(".logo img");
    const profileImg = document.querySelector(".profile_pic img");

    toggle.addEventListener("change", function () {
        if (toggle.checked) {
            body.classList.add("dark-mode");
            logoImg.src = "img/logo_new_dark.png";
        } else {
            body.classList.remove("dark-mode");
            logoImg.src = "img/logo_new.png";
        }
    });