function resizeX() {
	$('.treina-quinzenal-img').css('min-height', $('.treina-quinzenal-conteudo').outerHeight());
}

$(window).bind('scroll', function() {
	// if ($(window).scrollTop() > 0) {
	// 	$('header').addClass('fixed');     
	// }
	// else {
	// 	$('header').removeClass('fixed');
	// }
});

$(window).bind('resize', function() {
	resizeX();
});

$(document).ready(function() {

	// #################################################################
	// #################################################################
	// #################################################################
	// ############										    ############
	// ############            Título da página             ############
	// ############                                         ############
	// #################################################################
	// #################################################################
	// #################################################################



	// #################################################################
	// #################################################################
	// #################################################################
	// ############										    ############
	// ############           Eventos Genéricos             ############
	// ############                                         ############
	// #################################################################
	// #################################################################
	// #################################################################
	// $('a[rel=modal]').on('click', function(event) {
	// 	event.preventDefault();
	// 	$('.modal').center();
	// 	$($(this).attr('href')+', #mask').fadeIn('fast', function() {
	// 		$('.modal').center();			
	// 	});
	// });

	// $('.modal .close, #mask').on('click', function(event) {
	// 	event.preventDefault();
	// 	$('.modal, #mask').fadeOut();
	// });


});

function alerta(txt, title, href) {

    $('.txt-alerta').html(txt);
    if (title) {
        $('.title-alerta').html(title);
    };
    $('#modal-alerta').modal(function () {
        $("#modal-alerta").show();
    });

    if (href != false && href != undefined && href != "") {
        $('#modal-alerta .bt-close, #modal-alerta').on('click', function (event) {
            event.preventDefault();
            window.location.href = href;
        });
    }

};

// Resize do IMG Treinamento Quinzenal / Inicio
var rx = 0;
var resizeXLoop = setInterval(function() {
	if (rx < 5) {
		resizeX();
		rx++;
	} else {
		clearInterval(resizeXLoop);
	}
}, 1000);

$(function () {    
    
   
})


	// #################################################################
	// #################################################################
	// #################################################################
	// ############										    ############
	// ############                Menu                     ############
	// ############                                         ############
	// #################################################################
	// #################################################################
	// #################################################################

$(function() {
    $('nav, .nav-controller').on('click', function(event) {
        $('nav').toggleClass('focus');
    });
    $('nav, .nav-controller').on('mouseover', function(event) {
        $('nav').addClass('focus');
    }).on('mouseout', function(event) {
        $('nav').removeClass('focus');
    })
})


$(function () {
      
    
    
    $('.navbar-toggler').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.navbar-minimal').toggleClass('open');
	})
});