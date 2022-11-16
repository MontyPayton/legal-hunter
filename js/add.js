

$('.input').on('click', function () {
     $('#popup-min').addClass('active')
     $('#popup-max' ).removeClass('active')
})
    $( '.colse-popup').on('click', function () {
    $('#popup-min').removeClass('active')
   })
$('.registration').on('click', function () {
    $('#popup-max').addClass('active')
    $('#popup-min').removeClass('active')
})
$('.colse-popup').on('click', function () {
    $('#popup-max').removeClass('active')
})
//    ===========================================
$('.btn-max').on('click', function () {
    $('.btn-max').css('background', ' #ECECEC');
    $('.btn-min').css('background', 'white');
})
$('.btn-min').on('click', function () {
    $('.btn-max').css('background', 'white');
    $('.btn-min').css('background', '#ECECEC');
})
//=====================================================
$('.searh-icon').on('click', function () {
    $('.input-head').fadeToggle()
})
