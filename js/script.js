
        let menu = $('.burger-link');
        let menuActive = $('.burger-link-active');
        let navigation = $('.myMenu');
        let navActive = $('.menu-active');

        menu.click(function() {
            event.preventDefault();
            menu.toggleClass('burger-link-active');
            navigation.toggleClass('menu-active');
        });

        menuActive.click(function() {
            menu.removeleClass('burger-link-active');
            navigation.removeleClass('menu-active');
        });

// // -------navigation----
// function  navTab() {
//     let listNav = document.querySelector('.myMenu'); 

//     listNav.addEventListener('click', function(e){
//         let target = e.target.closest('.menu');

//         if(!target) return;

//         [].forEach.call(listNav.querySelectorAll('a'), function(item) {

//             item.classList.remove('active');
//         });
//         e.target.classList.add('active');


//     })
//   };

//   navTab()



//   var lastId,
//  topMenu = $("#myMenu"),
//  topMenuHeight = topMenu.outerHeight()+1,
//  // All list items
//  menuItems = topMenu.find("a"),
//  // Anchors corresponding to menu items
//  scrollItems = menuItems.map(function(){
//    var item = $($(this).attr("href"));
//     if (item.length) { return item; }
//  });

// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({ 
//       scrollTop: offsetTop
//   }, 850);
//   e.preventDefault();
// });

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;
   
//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
   
//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("active")
//          .end().filter("[href=#"+id+"]").parent().addClass("active");
//    }                   
// });





// ---------our-services----tab block---
function tab() {
    let listBtn = document.querySelector('.list');

    listBtn.addEventListener('click', function(e){
        
        let target = e.target.closest('.btn-tab');

        if(!target) return;

        let index = target.dataset.button;
        let activeTab = document.querySelector('.active-tab');
        let newActiveTab = document.querySelector(`#${index}`);

        let currentButton  = document.querySelector(`.active-btn-tab`);

        currentButton.classList.remove('active-btn-tab');
        target.classList.add('active-btn-tab');

        activeTab.classList.remove('active-tab');
        newActiveTab.classList.add('active-tab');  
            
    });
};
// --circle bar------

    var progress_circle = $(".my-bar1").circleProgress({
        value: 0.8,
        size: 124,
        fill: {color: '#19bd9a'},
        emptyFill:'#047378',
        thickness: 5,
        startAngle: -Math.PI/2,
        reverse: true
        
        
    });
    
    var progress_circle = $(".my-bar2").circleProgress({
        value: 0.75,
        size: 124,
        fill: {color: '#19bd9a'},
        emptyFill:'#047378',
        thickness: 5,
        startAngle: -Math.PI/2,
        reverse: true
        
        
    });

    var progress_circle = $(".my-bar3").circleProgress({
        value: 0.6,
        size: 124,
        fill: {color: '#19bd9a'},
        emptyFill:'#047378',
        thickness: 5,
        startAngle: -Math.PI/2,
        reverse: true
        
        
    });
    
    tab();


// ---slick-slider 
$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prewArrow: false,
    nextArrow: false,
    arrows: false
  });

 window.onscroll = function() {myFunction()};
 function myFunction() {
        if( window.innerWidth > 960 ){
            let header = document.getElementById("myHeader");
            let sticky = header.offsetTop;  
           
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
        } else {
    
            let header1 = document.getElementById("burger-link");
            let sticky = header1.offsetTop;
    
            if (window.pageYOffset > sticky) {
                header1.classList.add("sticky");
            } else {
                header1.classList.remove("sticky");
            }
        }
    }; 
     


// const content = document.querySelector('.post__article');
// const insertTarget = document.querySelector('.page__header');
// scrollnav.init(content, { 
//     section :  ' id ' ,
//   debug: false,
//   insertTarget: insertTarget,
//   insertLocation: 'append'
// });

// ---------line bar--------
$('#progressbar1').LineProgressbar({
    percentage: 80,
    height: '5px',
    fillBackgroundColor: '#19bd9a',
    animation: true
});

$('#progressbar2').LineProgressbar({
    percentage: 65,
    height: '5px',
    fillBackgroundColor: '#19bd9a',
    animation: true
});

$('#progressbar3').LineProgressbar({
    percentage: 75,
    height: '5px',
    fillBackgroundColor: '#19bd9a',
    animation: true
});

// -----photo gallery-----
function phototab() {
    let listPhoto = document.querySelector('.links');

    listPhoto.addEventListener('click', function(e){
        let target = e.target.closest('.photo-tab');

        if(!target) return;

        let index = target.dataset.link;

        let disabledTab = document.querySelectorAll('.link');
        let newActiveTab = document.getElementsByClassName(`${index}`);

        let currentLink = document.querySelector('.links .active');


        for (let i = 0; i < disabledTab.length; i++) {
            if (index === 'all-links') {
                disabledTab[i].classList.remove('disabled');
            } else if (disabledTab[i].classList.contains(index) ) {
                disabledTab[i].classList.remove('disabled');
            } else {
                disabledTab[i].classList.add('disabled');
            }
            
        }

        console.log(newActiveTab);
      
        currentLink.classList.remove('active');
        target.classList.add('active');
            
    });
};
phototab()
$(document).ready(function() {
    $('.probar').waypoint(function() {
    $('.probar').css({
    animation: "animate-positive 2s",
    opacity: "1"
    });
    }, { offset: '75%' });