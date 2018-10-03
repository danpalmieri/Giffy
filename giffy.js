$.fn.giffy = function() {
	return this.each(function() {
		var cover = $(this).data('cover');
		var gif = $(this).prop('src');

		if (cover == null){
			var cover = gif.replace('gif', 'png');
		}

		$(this).wrap("<div class='giffy-container'></div>");

		$(this).prop('src', cover).hover(function(){
			$(this).prop('src', gif);
		}, function(){
			$(this).prop('src', cover);
		});

		$('.giffy-container').prepend("<style>.giffy-container{position:relative; display: inline-block; } .giffy-container:hover.giffy-container:after{display: none; } .giffy-container:after{transition: all .1s ease; width: 60px; font-size: 18px; height: 60px; content: 'GIF'; display: inline-block; padding: 15px 0 0; text-align: center; vertical-align: middle; border-radius: 50%; border: 2px dashed rgba(0,0,0,.4); background: rgba(255,255,255,.8); color: #000; font-weight: bold; position: absolute; top: calc(50% - 30px); left: calc(50% - 30px); }</style>");
	});
};