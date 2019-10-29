// function lll() {
//     let menu = document.querySelector('.burger-link');
//     let menuActive = document.querySelector('.burger-link-active');
//     let navigation = document.querySelector('.myMenu');
//     // let navActive = document.querySelector('.menu-active');
 
//     menu.addEventListener('click', function() {
//         e.preventDefault();
//         menu.classList.add('burger-link-active');
//         navigation.classList.add('menu-active');
//     }),

//     menuActive.addEventListener('click', function() {
//         // e.preventDefault();
//         menu.classList.remove('burger-link-active');
//         navigation.classList.remove('menu-active');

//     });
// };
// lll()

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
            
          

           
        
    
          
   




// -------navigation----
function  navTab() {
    let listNav = document.querySelector('.myMenu'); 

    listNav.addEventListener('click', function(e){
        let target = e.target.closest('.menu');

        if(!target) return;

        [].forEach.call(listNav.querySelectorAll('a'), function(item) {

            item.classList.remove('active');
        });
        e.target.classList.add('active');


    })
  };

  navTab()
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




// let navLi = $('.myMenu li');
// let bar = $('.probar');
// $('.tracked').waypoint( function() {


//     let hash = $(this).attr('id');
//     navLi.removeClass('active');

//     $.each( navLi, function() {
//         if ( $(this).children('a').attr('href').slice(1) == hash ) {
//             $(this).addClass('active');
//         }
//     });
// }, {offset: '30px' 
// }, {offset: '50%'}
// );




// -----------header scroll
// window.onscroll = function() {myFunction()};
// function myFunction() {
//     let header = document.getElementById("myHeader");
//     let sticky = header.offsetTop;  
   
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
// 
// window.onscroll = function(asd) {myFunction()};

// function myFunction() {
//     let header = document.getElementById("burger-link");
//     let sticky = header.offsetTop;

//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }









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
     
    

  
// 
// window.onscroll = function(asd) {myFunction()};

// function myFunction() {
    
// }

// $(document).ready(function () {
//     $(document).on("scroll", onScroll);

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
        // let disabledTab = document.querySelectorAll('.disabled');
        let newActiveTab = document.querySelector(`#${index}`);

        let currentLink  = document.querySelector(`.active`);

       

        currentLink.classList.remove('active');
        target.classList.add('active');

        // disabledTab.classList.remove('disabled');
        newActiveTab.classList.add('active-tab');  
            
    });
};
phototab()
