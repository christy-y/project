	$(function(){
			//设置视窗的宽度
			//设置视窗的高度
				var w=$(window).width()
				// console.log(w);
				$('.body').css('width',w)

				// 吸顶导航
					var offsetTop = $('.nav').offset().top;
					// console.log(offsetTop);
					$(window).scroll(function(){
						var scrollTop = $(window).scrollTop();
						// console.log(scrollTop);					
						if(scrollTop>=offsetTop){
							$('.nav').css({'position':'fixed','top':'0px','background':'white'})
						}else{
							$('.nav').css({'position':'static','background':''})
						}
					})

					
					$('.one').animate({top:'0px'},1000)
					$('.two').animate({left:'0px'},1000)
					$('.three').animate({right:'0px'},1000)

					var f_ot = $('.nav').offset().top;
					// console.log(f_ot);
					$(window).scroll(function(){
						var f_st = $(window).scrollTop();
						// console.log(f_st);					
						if(f_st>=f_ot){
							$('.four').animate({left:'0px'},1000)
						}
					})
					
					var fi_ot = $('.one').offset().top;
					console.log(fi_ot);
					$(window).scroll(function(){
						var fi_st = $(window).scrollTop();
						console.log(fi_st);					
						if(fi_st>=fi_ot){
							$('.five').animate({right:'0px'},1000)
						}
					})
					
					var s_ot = $('.two').offset().top;
					// console.log(s_ot);
					$(window).scroll(function(){
						var s_st = $(window).scrollTop();
						// console.log(s_st);					
						if(s_st>=s_ot){
							$('.six').animate({left:'0px'},1000)
						}
					})
					
					var se_ot = $('.three').offset().top;
					// console.log(se_ot);
					$(window).scroll(function(){
						var se_st = $(window).scrollTop();
						// console.log(se_st);					
						if(se_st>=se_ot){
							$('.seven').animate({bottom:'0px'},1000)
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