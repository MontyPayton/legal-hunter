
// //    ===========================================
$('.btn-max').on('click', function () {
    $('.btn-max').css('background', ' #ECECEC');
    $('.btn-min').css('background', 'white');
})
$('.btn-min').on('click', function () {
    $('.btn-max').css('background', 'white');
    $('.btn-min').css('background', '#ECECEC');
})
//открытие малого====================================================
$(document).ready(function($) {
	$('.input').click(function() {
		$('#popup-min').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('#popup-min').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('#popup-min').fadeOut();
		}
	});
	
	$('#popup-min').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
//=====================================================
//закрытие малогл=====================================================
$(document).ready(function($) {
	// Клик по ссылке "Закрыть".
	$('.popup-close').click(function() {
		$(this).parents('#popup-min').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('#popup-min').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('#popup-min').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});
//открытие большого====================================================
$(document).ready(function($) {
	$('.registration').click(function() {
		$('#popup-max').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('#popup-max').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('#popup-max').fadeOut();
		}
	});
	
//закрытие большого=====================================================
$(document).ready(function($) {
	// Клик по ссылке "Закрыть".
	$('.colse-popup').click(function() {
		$(this).parents('#popup-max').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('#popup-max').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('#popup-max').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});

	$('#popup-max').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
$('.searh-icon').on('click', function () {
    $('.input-head').fadeToggle()
})
//================2 добавляем input==========

$('.search-but').on('click', function () {
	var num = 1
	$(".none-active").append('<div class="search-wr"><input class="button-div-input"type="text" name="" id="'+(num++)+'" placeholder=""><div class="search-but del">x</div></div>');
})

$('search-but del').on('click', function () {
	console.log("klick");
	
})	
