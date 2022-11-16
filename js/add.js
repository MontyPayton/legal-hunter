

$('.color-bl a').on('click', function () {
  
    $('#popup-min').addClass('active')
    $('#popup-max').removeClass('active')
})
$('.colse-popup').on('click', function () {
    $('#popup-min').removeClass('active')
   
})

$('.color-red a').on('click', function () {
  
    $('#popup-max').addClass('active')
    $('#popup-min').removeClass('active')
})
$('.colse-popup').on('click', function () {
    $('#popup-max').removeClass('active')
//    ===========================================
})
$('.btn-max').on('click', function () {
  
    $('#popup-max').addClass('active')
    $('#popup-min').removeClass('active')
})
$('.btn-min').on('click', function () {
  
    $('#popup-min').addClass('active')
    $('#popup-max').removeClass('active')
})




// $(document).ready(function(){
  
//     $(".fa-search").click(function(){
//       $(".wrap, .input").toggleClass("active");
//       $("input[type='text']").focus();
//     });
    
//   });