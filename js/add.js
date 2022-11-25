
// //    ===========================================
$('.btn-max').on('click', function () {
    $('.btn-max').css('background', ' #ECECEC');
    $('.btn-min').css('background', 'white');

		$('.form-min').fadeIn(10);
	$('.form-max').fadeOut(10);
	})

$('.btn-min').on('click', function () {
    $('.btn-max').css('background', 'white');
    $('.btn-min').css('background', '#ECECEC');
$('.form-min').fadeOut(10);
		$('.form-max').fadeIn(10);
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
	$('.registration').click(function(e) {
		$('#popup-max').fadeIn();
		$('.form-max').fadeIn();
		$('.form-nin').fadeOut();
		return false;
	
	});	
})
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
 
// 	Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('#popup-max').fadeOut();
		}
	});
	
// 	Клик по фону, но не по окну.
	$('#popup-max').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
})

	$('#popup-max').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});


$('.searh-icon').on('click', function () {
    $('.input-head').fadeToggle()
})
//================2 добавляем input==========

$('.search-but').on('click', function () {
	var num = 1

	$(".none-active").append('<div class="search-wr"><input class="button-div-input input-color"type="text" name="" id="'+(num++)+'" placeholder="текст"><div class="search-but del">x</div></div>');

})
//=================2 убираем input===========
$(document).ready(function () {
	$("body").on("click", ".del", function () {
		  $(this).parent().remove();
		});

});


//====================== nav pers===========

$(".active-li li").each(function(i) {
	('click', function (i) {
		console.log(i);
	})
	})	

	$('.active-li li').on('click', function () {
		let index = $(".active-li li").index( this );
		console.log(index);
		$(".active-li li").eq(index).addClass("active-menu");
		
	})	

	
$('.responses').on('click',function(){
	$('.responses').addClass("active-div");
	$('.invitations').removeClass("active-div");
	$('.invitations h4').removeAttr("id");
	$('.responses h4').prop('id', 'active-h4');
	$('table').toggle(500)
	$('.clozet').toggle(500)
})
$('.invitations').on('click',function(){
	$('.invitations').addClass("active-div");
	$('.responses').removeClass("active-div");
	$('.invitations h4').prop('id', 'active-h4');
	$('.responses h4').removeAttr("id");
	$('table').toggle(500)
	$('.clozet').toggle(500)
})
// =========================== открытие отклика popup =================
$(document).ready(function($) {
	$('.th-svg').click(function() {
		$('#popup-max').fadeIn();
		return false;
	});	
	
	$('.colse-popup-contact').click(function() {
		$(this).parents('#popup-max').fadeOut();
		return false;
	});		
 

// 		$(document).keydown(function(e) {
// 		if (e.keyCode === 27) {
// 			e.stopPropagation();
// 			$('#popup-max').fadeOut();
// 		}


	})


