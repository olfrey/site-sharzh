$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	$('.product__img-slider').slick({
		fade: true,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false
	})

	$('.product__btn').hover(function() {
		var item = $(this).parents('.product');
		item.addClass('product_hover');
	}, function() {
		var item = $(this).parents('.product');
		item.removeClass('product_hover');
	});

	var selectedClass = 'selected'


	$('.catalog__nav li a').click(function(event) {
		var href = $(this).attr('href');
		if (href == '#') {
			event.preventDefault();

			var text = $(this).text(),
					items = $(this).parents('.catalog__nav').next('.catalog__list').find('.catalog__item'),
					itemsSelected = $(this).parents('.catalog__nav').next('.catalog__list').find('.catalog__item[data-filter *= "' + text + '"]');
			if (!$(this).hasClass(selectedClass)) {
				var selectedLink = $(this).siblings('.selected');
				selectedLink.removeClass(selectedClass);

				$(this).addClass(selectedClass);
				items.fadeOut(300);
				itemsSelected.fadeIn(300);
			}
		} 

		
	});

	$('.reviews__list').slick({
		slidesToShow: 3,
		responsive: [{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$('.slider__btn').click(function(event) {
		event.preventDefault();

		var sliderItem = $(this).parents('.slider__item'),
				nextStep = false;

		console.log(1);

		

		if ($(this).hasClass('btn-next')) {
			var sliderItemNext = sliderItem.next('.slider__item');
			sliderItemNext.addClass('slider__item_show');
			nextStep = true;
		} else if ($(this).hasClass('btn-prev')){
			var sliderItemNext = sliderItem.prev('.slider__item');
			sliderItemNext.addClass('slider__item_show');
			nextStep = true;
		}

		if (nextStep) {
			sliderItem.removeClass('slider__item_show');
		}

	});

	function valueElementForm(nameElement, nameBlock) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find(nameBlock),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('input', 'input');
	valueElementForm('textarea', 'textarea');
	valueElementForm('choice', 'input');
	valueElementForm('photo-add', 'input');
	

	$('select').styler();


	new WOW().init();

});
