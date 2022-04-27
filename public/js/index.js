jQuery.noConflict()(function ($) { //чтобы не было ошибок из-за доллара
	$(document).ready(function(){//dom прочитан

		//авторазмер текстареа
		(function(b){b.fn.autoResize=function(f){var a=b.extend({onResize:function(){},animate:!0,animateDuration:150,animateCallback:function(){},extraSpace:20,limit:1E3},f);this.filter("textarea").each(function(){var d=b(this).css({"overflow-y":"hidden",display:"block"}),f=d.height(),g=function(){var c={};b.each(["height","width","lineHeight","textDecoration","letterSpacing"],function(b,a){c[a]=d.css(a)});return d.clone().removeAttr("id").removeAttr("name").css({position:"absolute",top:0,left:-9999}).css(c).attr("tabIndex","-1").insertBefore(d)}(),h=null,e=function(){g.height(0).val(b(this).val()).scrollTop(1E4);var c=Math.max(g.scrollTop(),f)+a.extraSpace,e=b(this).add(g);h!==c&&(h=c,c>=a.limit?b(this).css("overflow-y",""):(a.onResize.call(this),a.animate&&"block"===d.css("display")?e.stop().animate({height:c},a.animateDuration,a.animateCallback):e.height(c)))};d.unbind(".dynSiz").bind("keyup.dynSiz",e).bind("keydown.dynSiz",e).bind("change.dynSiz",e)});return this}})(jQuery);
function q_t(){
jQuery(function(){
	jQuery('textarea').autoResize();
});
}
q_t();
//

let number_new_textarea=1; 
let limit_new_textarea = 20;//сколько колличество раз можно создать вариант ответа
function create_textarea() {  //создать вариант ответа-новую textarea
		if (number_new_textarea<limit_new_textarea){
			number_new_textarea++;
			if (number_new_textarea == 2)
			$( ".step_2" ).show(1000);
			if (number_new_textarea == 3)
			$( ".step_3" ).show(1000);
			if (number_new_textarea == 4)
			$( ".step_4" ).show(1000);
			if (number_new_textarea == 5)
			$( ".step_5" ).show(1000);
			if (number_new_textarea == 6)
			$( ".step_6" ).show(1000);
			if (number_new_textarea == 7)
			$( ".step_7" ).show(1000);
			if (number_new_textarea == 8)
			$( ".step_8" ).show(1000);
			if (number_new_textarea == 9)
			$( ".step_9" ).show(1000);
			if (number_new_textarea == 10)
			$( ".step_10" ).show(1000);
			if (number_new_textarea == 11)
			$( ".step_11" ).show(1000);
			if (number_new_textarea == 12)
			$( ".step_12" ).show(1000);
			if (number_new_textarea == 13)
			$( ".step_13" ).show(1000);
			if (number_new_textarea == 14)
			$( ".step_14" ).show(1000);
			if (number_new_textarea == 15)
			$( ".step_15" ).show(1000);
			if (number_new_textarea == 16)
			$( ".step_16" ).show(1000);
			if (number_new_textarea == 17)
			$( ".step_17" ).show(1000);
			if (number_new_textarea == 18)
			$( ".step_18" ).show(1000);
			if (number_new_textarea == 19)
			$( ".step_19" ).show(1000);
			if (number_new_textarea == 20){
			$( ".step_20" ).show(1000);
			$( ".AddComment" ).hide(1000);
			
			}
	
			//$( `.step_[number_new_textarea]` ).show(1000);
			console.log(number_new_textarea);
		}
	
	}
//анимируем начало			               }

//кнопка добавить вариант овтета
$(".AddComment").click(function () {
create_textarea();
});
//конец, печатать
})
});

