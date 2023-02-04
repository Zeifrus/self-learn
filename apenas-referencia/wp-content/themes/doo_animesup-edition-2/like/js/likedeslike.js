jQuery(function ($) {
    /* Script */
    $('.sl-button').click(function (e) {
    	e.preventDefault();
		var button 		= $(this);
		var post_id 	= button.data('id');
		var security 	= button.data('nonce');
		var type 		= button.data('type');
		if (post_id != '') {
			$.ajax({
				type: 'POST',
				url: simpleLikes.ajaxurl,
				data: {
					action: 'save_like',
					post_id: post_id,
					nonce: security,
					type: type,
				},
				beforeSend:function(){
					button.addClass('loader_like');
				},	
				success: function(response){
					if (response.code_like == 2 || response.code_like == 0) {
						$('.liked').removeClass('active');
					}
					if (response.code_deslike == 2 || response.code_deslike == 0) {
						$('.desliked').removeClass('active');
					}
					if (response.code_like == 1) {
						$('.liked').addClass('active');
					}
					if (response.code_deslike == 1) {
						$('.desliked').addClass('active');
					}
					$('.liked .sl-count').html(response.like_vote);
					$('.desliked .sl-count').html(response.deslike_vote);
					button.removeClass('loader_like');		
				}
			});
			
		}
		return false;
	});
	
});
