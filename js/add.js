

$('.color-bl a').on('click', function () {
  
    $('#popup-min').addClass('active')
    $('#popup-max').removeClass('active')
    $('.btn-max').css('background', 'white');
})
$('.colse-popup').on('click', function () {
    $('#popup-min').removeClass('active')
   
})

$('.color-red a').on('click', function () {
  
    $('#popup-max').addClass('active')
    $('#popup-min').removeClass('active')
    $('.btn-min').css('background', 'white');
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
//=====================================================


$('.searh-icon').on('click', function () {
  
    $('.input-head').fadeToggle()
  
    

 
})

