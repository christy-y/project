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

				var value=0;
				$('.contact>ul>li').click(function(){
					$('.contact>div>p').eq(value).show().siblings().hide()
					value++;
					if(value>3){
						value=0;
					}
				})

				// 动画效果
				$('.wrap>h6').animate({top:'0px'},1000)

				// 移入移出动画
				// one
				$('.one>.center').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.one>.center').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				// two
				$('.two>.left').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.two>.left').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.two>.right').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.two>.right').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.two>.center').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.two>.center').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.two>.first').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.two>.first').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.two>.end').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.two>.end').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				// three
				$('.three>.left').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.three>.left').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.three>.right').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.three>.right').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.three>.center').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.three>.center').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				// four
				$('.four>.left').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.four>.left').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.four>.right').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.four>.right').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.four>.center').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.four>.center').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				// five
				$('.five>.left').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.five>.left').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.five>.center').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.five>.center').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.five>.right').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.five>.right').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				// six
				$('.six>.left').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.six>.left').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.six>.right').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.six>.right').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
				$('.six>.center').mouseenter(function(){
					$(this).children('.contact').slideDown(1000);
				})
				$('.six>.center').mouseleave(function(){
					$(this).children('.contact').slideUp(1000);
				})
		})