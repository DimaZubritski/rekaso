if ($(".owl-carousel").length > 0) {
	$(".owl-carousel").owlCarousel({
		items: 1,
		rewind: true,
		autoHeight: true,
		nav: true,
		dots: false,
		navText: ['<i class="bx bxs-left-arrow"></i>', '<i class="bx bxs-right-arrow"></i>']
	});

	var prev_style = $(".owl-prev:first").attr('style');
	var next_style = $(".owl-next:first").attr('style');
	$('.owl-prev').last().attr('style', prev_style);
	$('.owl-next').last().attr('style', next_style);

	$('.owl-nav:first').remove();
}

// Плавный скрол
$(function () {
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});
})


$(document).ready(function () {

	$('input[name="name"]').inputmask({
		placeholder: "",
		regex: "[а-яА-ЯеЁa-zA-Z/0-9/Ññá¡/ ]{30}"
	});
	$('input[name="phone"]').inputmask("+375(99)-999-99-99", {});
	// $('input[name="phone"]').inputmask({
	// 	placeholder: "",
	// 	regex: "[0-9]{20}"
	// });

});