$(".cs-button-solid-menu").click(function(){
    alert("Tab 2 clicked");
});

$(document).ready(function(){
    $("#tabswitcher1").click(function(event){
        event.preventDefault();
        $("#tab-1").show().addClass("active");
        $(".a1").addClass("active");
        $("#tabswitcher1").addClass("active");
        $("#tab-2, #tab-3").hide().removeClass("active");
        $(".a2, .a3").removeClass("active");
        $("#tabswitcher2, #tabswitcher3").removeClass("active");
    });

    $("#tabswitcher2").click(function(event){
        event.preventDefault();
        $("#tab-2").show().addClass("active");
        $(".a2").addClass("active");
        $("#tabswitcher2").addClass("active");
        $("#tab-1, #tab-3").hide().removeClass("active");
        $(".a1, .a3").removeClass("active");
        $("#tabswitcher1, #tabswitcher3").removeClass("active");
    });

    $("#tabswitcher3").click(function(event){
        event.preventDefault();
        $("#tab-3").show().addClass("active");     
        $(".a3").addClass("active");
        $("#tabswitcher3").addClass("active");
        $("#tab-2, #tab-1").hide().removeClass("active");
        $(".a2, .a1").removeClass("active");
        $("#tabswitcher2, #tabswitcher1").removeClass("active");
    });

    $("#tab-1").show().addClass("active");
    $(".a1").addClass("active");
    $("#tabswitcher1").addClass("active");
    $("#tab-2, #tab-3").hide().removeClass("active");
    $(".a2, .a3").removeClass("active");
    $("#tabswitcher2, #tabswitcher3").removeClass("active");
});

var typed = new Typed('#element', {
    strings: 
    [   
        "Welcome to Sea Bites!",
        "Welcome to Seaside Delights, your neighborhood go-to for scrumptious fish and chips! Nestled in the heart of the community, our restaurant serves up a delicious array of golden, crisply battered fish accompanied by perfectly fried chips that promise a delightful crunch with every bite. Our cozy, maritime-themed decor provides a warm, welcoming atmosphere where family and friends can gather to enjoy hearty, flavorsome meals. At Seaside Delights, we're dedicated to bringing you the freshest seafood and a memorable dining experience with every visit. Come in and taste the tradition!"
        
    ],
        startDelay: 0,
        typeSpeed: 15,
        backSpeed: 30,
        loop: true,
});

let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });


