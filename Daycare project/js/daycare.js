// $(document).ready(function(){
//    $(".sec").on("click", (function(){
//      $(this).hide();
//    });
// });
// $(document).ready(function(){
//     alert("Loader alert");
// });

// $(document).ready(function(){
//     $(".box.person").on("click", function(){
//         $(this).hide(1500).show(1500);
//     });
// });


$(document).ready(function(){

     



    $("#col1").click(function(){
        $("#para1").css("display","block").css("background-color","rgb(240,128,128)");
            $("#col1").click(function(){
                $("#para1").toggle();  
            });
    });
    $("#col2").click(function(){
        $("#para2").css("display","block");
            $("#col2").click(function(){
                $("#para2").toggle();  
            });
    });
    $("#col3").click(function(){
        $("#para2").css("display","block");
            $("#col3").click(function(){
                $("#para2").toggle();  
            });
    });
    $("#col4").click(function(){
        $("#para2").css("display","block");
            $("#col4").click(function(){
                $("#para2").toggle();  
            });
    });
});

$(document).ready(function(){
    $('#sidebarBtn').click(function(){
        $(".sidebar").toggleClass('active');
        $("#sidebarBtn").toggleClass('toggle');
    });
});
$(document).ready(function(){
    $('.active1').click(function(){
        $(this).toggleClass('active');
    });
});

// 
// $('.top_nav').slick();

// $('.top_nav').slick({
//     centerMode: true,
//     centerPadding: '80px',
//     slidesToShow: 4,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     arrows:false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '23px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

$('.top_nav').slick({
    infinite: true,
	 autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:true,
    centerPadding: '0px',
	 
	 responsive: [
       {
         breakpoint: 768,
         settings: {
           arrows: true,
           centerMode: true,
           centerPadding: '0',
           slidesToShow: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '0px',
           slidesToShow: 1
         }
       }
     ]
    
  });








// $('#col1').on('shown.bs#col1', function(){
//     $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
//     }).on('hidden.bs#col1', function(){
//     $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
//     });