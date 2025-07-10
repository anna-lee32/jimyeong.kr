
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



const toggle = document.getElementById("darkmode-toggle");
    const body = document.body;
    const logoImg = document.querySelector(".logo img");

    toggle.addEventListener("change", function () {
        if (toggle.checked) {
            body.classList.add("dark-mode");
            logoImg.src = "img/logo_new_dark.png";
        } else {
            body.classList.remove("dark-mode");
            logoImg.src = "img/logo_new.png";
        }
    });


$(function(){
    // alert('경고임 ㅋ')
    $(window).scroll(function(){

        if($(window).scrollTop()>=500){
            $('.grid1').fadeIn(300)
            $('.grid2').fadeIn(300)
        }else{
            $('.grid1').fadeOut(300)
            $('.grid2').fadeOut(300)
        }

    })
})


