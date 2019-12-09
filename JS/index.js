$(function(){
				var timer;
				//设置视窗的宽度
				var w=$(window).width()
				// console.log(w);
				$('div.wrap').css('width',w)	
			
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

				// 轮播图
				// 定义index为当前显示第几张
				var index = 0;
				var num = 0;
				var timer;
				function run(){
					timer=setInterval(function(){					
						index++;
						num++;
						if(index>3){
							$('.img').css('left','0px')
							index = 1;
						}	
						if(num>2){
							num = 0;
						}					
						var obj = {left:-1200*index + 'px'}
						$('.img').animate(obj,500).next().children('li').eq(num).addClass('active').siblings().removeClass('active')
					},2000)
				}
				run();

				$('.banner>.img>li').mouseover(function(){
					clearInterval(timer);
				})
				$('.banner>.img>li').mouseout(function(){
					run();
				})
				// 网页动态效果	
				// 历史
				var o_ot = $('.header').offset().top;
					console.log(o_ot);
					$(window).scroll(function(){
						var o_st = $(window).scrollTop();
						console.log(o_st);					
						if(o_st>=o_ot){
							$('.one>.left').animate({left:'0px'},1000)
							$('.one>.center').animate({right:'0px'},1000)
							$('.one>.right').animate({right:'0px'},1500)
						}
					})

				// 诗句
				var tl_ot = $('.one').offset().top;
					console.log(tl_ot);
					$(window).scroll(function(){
						var tl_st = $(window).scrollTop();
						console.log(tl_st);					
						if(tl_st>=tl_ot){
							$('.three>.up').animate({right:'0px'},1500)
						}
					})
				// 句子
				var tr_ot = $('.three').offset().top;
					console.log(tr_ot);
					$(window).scroll(function(){
						var tr_st = $(window).scrollTop();
						console.log(tr_st);					
						if(tr_st>=tr_ot){
							$('.three>.down').animate({left:'0px'},1000)
						}
					})

				// 关于抹茶
				var fo_ot = $('.three').offset().top;
					console.log(fo_ot);
					$(window).scroll(function(){
						var fo_st = $(window).scrollTop();
						console.log(fo_st);					
						if(fo_st>=fo_ot){
							$('.four>.up>.left').animate({left:'0px'},1000)
							$('.four>.up>.right').animate({top:'0px'},1000)
						}
					})
				
				var ft_ot = $('.down').offset().top;
					console.log(ft_ot);
					$(window).scroll(function(){
						var ft_st = $(window).scrollTop();
						console.log(ft_st);					
						if(ft_st>=ft_ot){
							$('.four>.down>.right').animate({right:'0px'},1000)
							$('.four>.down>.left').animate({bottom:'0px'},1000)
						}
					})
				
				// 联系方式
				var value=0;
				$('.contact>ul>li').click(function(){
					$('.contact>div>p').eq(value).show().siblings().hide()
					value++;
					if(value>3){
						value=0;
					}
				})
			})