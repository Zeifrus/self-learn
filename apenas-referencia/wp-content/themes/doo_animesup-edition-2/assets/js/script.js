(function($){
	$('.page_user .list-inline-item:first-child').addClass('select');
	$('.infobox').hide();
	$('.infobox:first').show();

	$('.page_user .list-inline-item').click(function(){
		$('.close_user').hide();
		$('.img-placeholder').hide();
		$('.btn_user').show();
		$('.img-placeholder').hide();
	  	$('.page_user .list-inline-item').removeClass('select');
	  	$(this).addClass('select');
	  	$('.infobox').hide();
	  	$("#settings").hide();
	  
	  	var activeTab = $(this).data('item');
	  	$(activeTab).fadeIn();
	  	return false;
	});

	$('.btn_user').click(function(){
		$(this).hide();
		$('.close_user').show();
		$('.img-placeholder').show();
	  	$('.infobox').hide();
	  	var activeTab = $("#settings");
	  	$(activeTab).fadeIn();
	  	return false;
	});

	$('.close_user').click(function(){
		$(this).hide();
		$('.img-placeholder').hide();
		$('.btn_user').show();
		$('.page_user .list-inline-item:first-child').addClass('select');
		$('.infobox').hide();
		$('.infobox:first').show();
		$("#settings").hide();
	  	return false;
	});

    $('[data-search]').on('keyup', function() {
    	var id 			= $(this).data('id-content'),
    	searchVal 	= $(this).val(),
    	filterItems 	= $(id+' [data-filter-item]');

		if ( searchVal != '' ) {
			filterItems.addClass('none');
			$(id+' [data-filter-item][data-filter-name="' + searchVal.toLowerCase() + '"]').removeClass('none');
		} else {
			filterItems.removeClass('none');
		}
	});

	$('.trailer_open').on('click', function() {
		$('.videobox').addClass('show');
	});

	$('.videobox .close').on('click', function() {
		$('.videobox').removeClass('show');
		$('.rptss').attr('src', $('.rptss').attr('src'));
	});

	function showPlayer(atual) {
	  	var tipo = atual.data('nume');
	  	$('.dooplay_player_option').removeClass('on');
	  	atual.addClass('on');
	  	$('.source-box').removeClass('on');
	  	$('#source-player-'+tipo).addClass('on');
	};

	$(document).on('click', '.dooplay_player_option', function () {
	  	var atual = $(this),
	  	tipo = atual.data('nume');
	  	//tipo = 'source-player-'+tipo;
	  	showPlayer(atual);
	  	createStoregeOrCookie('player_save', tipo)
	});

	var player_save = checkLStoregeOrCookie('player_save');
	if (player_save !== null && $('#player-option-'+player_save).length) {
	  var atual = $('#player-option-'+player_save);
	  showPlayer(atual);
	} else {
	  var atual = $('.dooplay_player_option').first();
	  showPlayer(atual);
	}
})(jQuery);