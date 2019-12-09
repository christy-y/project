	$(function(){
			//设置视窗的宽度
				var w=$(window).width()
				console.log(w);
				$('.body').css('width',w)

				// 吸顶导航
					var offsetTop = $('.nav').offset().top;
					console.log(offsetTop);
					$(window).scroll(function(){
						var scrollTop = $(window).scrollTop();
						console.log(scrollTop);					
						if(scrollTop>=offsetTop){
							$('.nav').css({'position':'fixed','top':'0px','background':'white'})
						}else{
							$('.nav').css({'position':'static','background':''})
						}
					})

				var value=0;
				$('.contact>ul>li').click(function(){
					$('.contact>div>p').eq(value).show().siblings().hide()
					value++;
					if(value>3){
						value=0;
					}
				})

				$('.wrap>.box>ul>li').mouseenter(function(){
					$(this).children('div').slideDown(1000);
				})
				
				$('.wrap>.box>ul>li').mouseleave(function(){
					$(this).children('div').slideUp(1000);
				})
		})