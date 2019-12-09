	$(function(){
			var timer;
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

				// 动画效果
				$('.wrap>h6').animate({top:'0px'},1000)
				$('.one>.left').animate({left:'0px'},1500)
				$('.one>.right').animate({right:'0px'},1500)

				var o_ot = $('.one').offset().top;
					console.log(o_ot);
					$(window).scroll(function(){
						var o_st = $(window).scrollTop();
						console.log(o_st);					
						if(o_st>=o_ot){
							$('.three>.left').animate({left:'0px'},1500)
							$('.three>.right').animate({right:'0px'},1500)

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
		})
