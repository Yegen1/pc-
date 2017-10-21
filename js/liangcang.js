function hotgoodstyle(){
				var hotGoods = document.querySelectorAll(".hotgoods");
				var goodScript = document.querySelectorAll(".goodscript");
				for (var j = 0;j<hotGoods.length;j++) {
					(function(j){
						hotGoods[j].onmouseenter = function(){
//						if (((this.childNodes)[0].childNodes[2]).isAnimated) {
//							return;
//						}
//						((this.childNodes)[0].childNodes[2]).style.display = "block;";
						animate((this.childNodes)[0].childNodes[2],{"opacity":0.6},400);
						animate((this.childNodes)[0].childNodes[0].childNodes[0],{"width":250 ,"height":250},400);
						}
						hotGoods[j].onmouseout = function(){
//							if (((this.childNodes)[0].childNodes[2]).isAnimated) {
//							return;
//						}
						animate((this.childNodes)[0].childNodes[2],{"opacity":0},400);
						animate((this.childNodes)[0].childNodes[0].childNodes[0],{"width":220 ,"height":220},400);
						}
					}(j));
//						console.log(hotGoods[hotGoods.length-1].offsetTop);
					}
				}
function hotgoodstyle(){
				var hotGoods = document.querySelectorAll(".hotgoods");
				var goodScript = document.querySelectorAll(".goodscript");
				$(".hotgoods").mouseenter(function() {
				if($(this).find(".goodscript").is(":animated")) return;
						$(this) .find(".goodscript").animate({"opacity":.6},400);
						$(this).find("img").animate({"width":250,"height":250},400);
				})
					
				$(".hotgoods").mouseleave(function(){
					$(this) .find(".goodscript").stop(true,true);
					$(this).find("img").stop(true,true);
					$(this) .find(".goodscript").animate({"opacity":0},400);
					$(this).find("img").animate({"width":220,"height":220},400);
				})
				}