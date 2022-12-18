
// //    ===========================================
$('.btn-max').on('click', function () {
    $('.btn-max').css('background', ' #ECECEC');
    $('.btn-min').css('background', 'white');

		$('.form-min').fadeIn(1);
	$('.form-max').fadeOut(1);
	})

$('.btn-min').on('click', function () {
    $('.btn-max').css('background', 'white');
    $('.btn-min').css('background', '#ECECEC');
$('.form-min').fadeOut(1);
		$('.form-max').fadeIn(1);
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
// =========================================='''
$(document).ready(function($) {
	$('.input-popup-min').click(function() {
		$('#popup-min').fadeIn();
		$("#popup-min-pas3").fadeOut()
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
// ==================восстановление пароля================
$('.go-inp-pass').on('click', function () {
    $('#popup-min-pas').fadeIn()
	$('#popup-min').fadeOut()
})	
$('.go-inp').on('click', function () {
    $('#popup-min-pas').fadeOut()
	$('#popup-min').fadeIn()
})	


// =====================/восстановление пароля=============
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

// =============
//закрытие малогл=====================================================
$(document).ready(function($) {
	// Клик по ссылке "Закрыть".
	$('.popup-close').click(function() {
		$(this).parents('#popup-min-pas').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('#popup-min-pas').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('#popup-min-pas').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});

// ===========================text===================
$(document).ready(function($) {
	// Клик по ссылке "Закрыть".
	$('.popup-close').click(function() {
		$(this).parents('#popup-min-text').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('#popup-min-text').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('#popup-min-text').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});
// ===========================text btn===================
$(document).ready(function($) {
	// Клик по ссылке "Закрыть".
	$('.popup-close').click(function() {
		$(this).parents('#popup-min-pas2').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('#popup-min-pas2').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('#popup-min-pas2').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});
// ===========================text btn===================
$(document).ready(function($) {
	// Клик по ссылке "Закрыть".
	$('.popup-close').click(function() {
		$(this).parents('#popup-min-pas3').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('#popup-min-pas3').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('#popup-min-pas3').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});

//открытие большого====================================================
$(document).ready(function($) {
	$('.registration').click(function(e) {
		$('#popup-max').fadeIn();
		// $('.form-max').fadeIn();
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
		$(this).parents('.popup-max').fadeOut();
		return false;
	});        
 
// 	Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-max').fadeOut();
		}
	});
	
// 	Клик по фону, но не по окну.
	$('.popup-max').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
})

	$('.popup-max').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});


$('.searh-icon').on('click', function () {
    $('.input-head').fadeToggle()
})
// //================2 добавляем input==========

$('.search-but').on('click', function () {
	var num = 1
	// $('.none-active').append($('.search-wr').html());
	// $(".none-active").append('<div class="search-wr"> <div class="grow-input-container"><input class="button-div-input" type="text" name="" id="'+(num++)+'" value="текст"><div class="search-but del">x</div></div></div>');
$(".search-wr.none").fadeIn();
})


                           
                     
                           
                         

// $('.search-but').on('click', function() {
//     $('.search-wr').clone().appendTo(".none-active");
// });


// $('.search-but').on('click', function() {
	
// $('.none-active').prepend('');

//      $(document.createTextNode('.search-wr')).prependTo('.none-active');
// });

$('.search-but').on('click', function() {
	function push(e) {
		e.preventDefault();
		var val = $(".button-div-input").value;
		$(".none-active").value = val;
		return false;
	 }
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
	$('.invitations-two').removeClass("active-div");
	$('.invitations h4').removeAttr("id");
	$('.invitations-two h4').removeAttr("id");
	$('.responses h4').prop('id', 'active-h4');
	
})
	

$('.invitations').on('click',function(){
	$('.invitations').addClass("active-div");
	$('.responses').removeClass("active-div");
	$('.invitations-two').removeClass("active-div");
	$('.invitations h4').prop('id', 'active-h4');
	$('.responses h4').removeAttr("id");
	$('.invitations-two h4').removeAttr("id");
	
	
})
$('.invitations-two').on('click',function(){
	$('.invitations-two').addClass("active-div");
	$('.responses').removeClass("active-div");
	$('.invitations').removeClass("active-div");
	$('.invitations-two h4').prop('id', 'active-h4');
	$('.responses h4').removeAttr("id");
	$('.invitations h4').removeAttr("id");
	
	
})

// -----------------
$('.invitations.otklik').on('click', function () {
    $('.clozet-prigl').fadeIn(1)
	$('.clozet-otclick').fadeOut(1)
})	
$('.responses.otklik').on('click', function () {
    $('.clozet-prigl').fadeOut(1)
	$('.clozet-otclick').fadeIn(1)
})	


$('.invitations.tab-big').on('click',function(){
	
	$('.table-active').fadeIn(10);
	$('.non-table-active').fadeOut(10);
})
$('.responses.tab-big').on('click',function(){
	
	$('.non-table-active').fadeIn(10);
	$('.table-active').fadeOut(10);
})

// =========================== открытие отклика popup =================
// // $(document).ready(function($) {
// // 	$('.th-svg').click(function() {
// // 		$('#popup-max').fadeIn();
// // 		return false;
// // 	});	
	
	// $('.colse-popup-contact').click(function() {
	// 	$(this).parents('#popup-max').fadeOut();
	// 	return false;
	// });	
	// })

	// $(document).ready(function($) {
	// 	$('.th-svg').click(function() {
	// 		$('#popup-max').fadeIn();
	// 		return false;
	// 	});	
		
	// 	$('.colse-popup-contact').click(function() {
	// 		$(this).parents('#popup-max').fadeOut();
	// 		return false;
	// 	});	
	// 	})

// ======================сортировка ссылкой

// var links = [];
//   links['tests'] = '?sort=show_counter&method=asc';
//   links['tests2'] = '?sort=date_active_from&method=asc';
	
//   $(".content-block").each(function() {
//     let more = $(this).find(".show-more");
//     let hide = $(this).find(".hide-content");
//     hide.hide();
//     more.click(function() {
//         hide.slideToggle();
//         more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
//     });
// });

// ======================сортировка ссылкой

// var links = [];
//   links['tests'] = '?sort=show_counter&method=asc';
//   links['tests2'] = '?sort=date_active_from&method=asc'
	
//   $(".content-block").each(function() {
//     let more = $(this).find(".show-more");
//     let hide = $(this).find(".hide-content");
//     hide.hide();
//     more.click(function() {
//         hide.slideToggle();
//         more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
//     });
// });

// ===================аня======================
// ===========================================
function insertParam(key, value) {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);image.png

    // kvp looks like ['key1=value1', 'key2=value2', ...]
    var kvp = document.location.search.substr(1).split('&');
    let i=0;

    for(; i<kvp.length; i++){
        if (kvp[i].startsWith(key + '=')) {
            let pair = kvp[i].split('=');
            pair[1] = value;
            kvp[i] = pair.join('=');
            break;
        }
    }

    if(i >= kvp.length){
        kvp[kvp.length] = [key,value].join('=');
    }

    // can return this or...
    let params = kvp.join('&');

    // reload page with new params
    document.location.search = params;
}

$(document).ready(function() {
	let divSelect =  $('.js-example-basic.select');
	 
    divSelect.change(function() {

		 let paramSort = $(this.options[this.selectedIndex]).attr('data-param');
		let paramSort1 = $(this.options[this.selectedIndex]).attr('data-param1');
		
		let paramVal = $(this.options[this.selectedIndex]).attr('data-value');
		let paramVal1 = $(this.options[this.selectedIndex]).attr('data-value1');




			insertParam(paramSort, paramVal);
			insertParam(paramSort1, paramVal1);
	  });
	 
});

// =======================/аня======================
// ==================================================

//  $('.js-example-basic.select.region').change(function() {
// 		var selUrl2 = this.options[this.selectedIndex].value;
// 			window.location.href = selUrl2
// 		  });

// onchange="window.location.href = this.options[this.selectedIndex].value"

// ===========================================celect============
// $(document).ready(function() {
//     $('.js-example-basic').select2();
	
// 	$(".js-example-responsive").select2({
//     width: 'resolve'
	
// });

// });



// -------------------------------- input


// $('#my-input').autoGrowInput({ minWidth: 100, maxWidth: 600, comfortZone: 40 });
// $('#grow-input').autoGrowInput({ minWidth: 40, maxWidth: function(){ return $('.search-wr.grow-input-container').width()-22; }, comfortZone: 30 });
//     $(window).resize(function(){ $('#grow-input').trigger('autogrow'); });

// $('#my-input').autoGrowInput({ minWidth: 100, maxWidth: 600, comfortZone: 40 });
$('.button-div-input').autoGrowInput({ minWidth: 40, maxWidth: function(){ return $('.search-wr.grow-input-container').width()-22; }, comfortZone: 40 });
    $(window).resize(function(){ $('.button-div-input').trigger('autogrow'); });


// ===============================	


// $('.acor-container label:before').click(function() {
	
// 	 $('.acor-body').scroll(100);
	
// 	});
	
$('.acor-scrol').click(function() {
	$('.acor-scrol').scroll();
  });



//    $(function() {
//      $(".input-file").fileinput('<div class="doc-wrap"><button class="wiht-activ btn-2"><img src="./img/skrep.svg" alt="">Прикрепить устав</button></div>');
//    });



$('#review-file-one').on('change', function (e) {
	$(this).prev('span').html(e.target.files[0].name);
});

$('#review-file-two').on('change', function (e) {
	$(this).prev('span').html(e.target.files[0].name);
});



//    ==================

$('.invitations-two').click(function() {
	$('.arch-vacans').fadeIn(10);
	$('.act-vacans').fadeOut(10);
	$('.chern-vacans').fadeOut(10);

  });

  $('.responses').click(function() {
	$('.arch-vacans').fadeOut(10);
	$('.act-vacans').fadeIn(10);
	$('.chern-vacans').fadeOut(10);

  });
  $('.invitations').click(function() {
	$('.arch-vacans').fadeOut(10);
	$('.act-vacans').fadeOut(10);
	$('.chern-vacans').fadeIn(10);

  });
// =====================

  $('.td-active-vacans').click(function(){
	
	var _val = $(this).data('index');
	
	$('.popup-iner').each(function(){
	   if (_val === $(this).data('index')){
		console.log($(this));
		$(this).fadeIn(10)
		}
	});
  });
  
  	$('.colse-popup-contact').click(function() {
		$(this).parents('.popup-max').fadeOut();
		return false;
	});	


// =================// ====================специальность

$('.rad-btn-act').click(function(){
	
		// if ($(this).is(':checked')){
		// 	$('.hide').show();
		// } else {
		// 	$('.hide').hide();
		// }
		
		


		 });  



$(document).ready(function(){
	$('.rad-btn-act').change(function() {
		$(this).parent().prev().find('div.wr-sel').toggleClass('class-none');
		$(this).parent().prev().find('.hide').toggleClass('class-a');
	});
});
      
// ====================/специальность
//  =+block=============

			  
				$(document).ready(function (){
					$('.wrapp-tell-a.bl-1').click(function (){
						var links = $("[rebest='yesNo']").length; 
						// var links11=$("[rebest-1='yesNo-1']").length
						// var inpOne =$('[name="place_edu-0"]')
						// var inpTwo =$('[name="spec_edu-0"]')
					var clone =	$('#nameSel').clone(true);
					clone.find('select[name ="place_edu-0"]').attr('name', 'place_edu-' + links)
					clone.find('select[name="spec_edu-0"]').attr('name', 'spec_edu-' + links)
					clone.find('input[name ="spec-0"]').attr('name', 'spec-' + links)
					clone.find('input[name ="no_spec-0"]').attr('name', 'no_spec-' + links)
					clone.find('select[name="lvl_edu-0"]').attr('name', 'lvl_edu-' + links)
					clone.find('input[name ="start_edu-0"]').attr('name', 'start_edu-' + links) 
					clone.find('input[name ="end_edu-0"]').attr('name', 'end_edu-' + links) 
						clone.attr('id', 'nameSel' + links) 
						
						clone.appendTo('.block1-duble');
	                    
					  })
				
				
				
					})		


			$(document).ready(function (){
				

				$('.wrapp-tell-a.bl-2').click(function (){
		
					var links = $("[rebest='noo']").length;
					var links2 = $("[rebest='noo2']").length;

					$myClone = $('[name="lang-0"]').clone(true).attr('name', 'lang-' + links).css('margin-top','30px');
					$myClone2 = $('[name="lvl-0"]').clone(true).attr('name', 'lvl-' + links2).css('margin-top','30px');
					
					$myClone.appendTo('.block-input-two-last.slome');
					$myClone2.appendTo('.block-input-two-last-child.select25.slome2');
					
					//  $(".js-example-basic-v").select2()
			        //  $(".js-example-responsive-v").select2({
					// 	width: 'resolve'
					//  })
			
					return false;
					
				});
					

				  })



	
		$(document).ready(function (){
			$('.wrapp-tell-a.bl-3').click(function (){

				var links2 = $("[rebest='yess']").length;
				var links3 = $("[rebest='yess2']").length;

				    $myClone3 = $("[name='project_name-0']").clone(true).attr('name', 'project_name-' + links2).css('margin-top','30px');
					$myClone4 = $('[name="project_url-0"]').clone(true).attr('name', 'project_url-' + links3).css('margin-top','30px');

					$myClone3.appendTo('.block-input-two-last.slome3');
					$myClone4.appendTo('.block-input-two-last-child.slome4');
					
			
			  	  return false;
			  })
		
			})	
			
			




	
	