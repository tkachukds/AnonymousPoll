jQuery.noConflict()(function ($) { //чтобы не было ошибок из-за доллара
	$(document).ready(function(){//dom прочитан

		var newtext = document.getElementsByClassName('new_teaxtarea');
		function create_textarea2(){
		for (var i = 0; i < newtext.length; i ++) {
			newtext[i].style.display = 'none';
		}
		}

		(function(b){b.fn.autoResize=function(f){var a=b.extend({onResize:function(){},animate:!0,animateDuration:150,animateCallback:function(){},extraSpace:20,limit:1E3},f);this.filter("textarea").each(function(){var d=b(this).css({"overflow-y":"hidden",display:"block"}),f=d.height(),g=function(){var c={};b.each(["height","width","lineHeight","textDecoration","letterSpacing"],function(b,a){c[a]=d.css(a)});return d.clone().removeAttr("id").removeAttr("name").css({position:"absolute",top:0,left:-9999}).css(c).attr("tabIndex","-1").insertBefore(d)}(),h=null,e=function(){g.height(0).val(b(this).val()).scrollTop(1E4);var c=Math.max(g.scrollTop(),f)+a.extraSpace,e=b(this).add(g);h!==c&&(h=c,c>=a.limit?b(this).css("overflow-y",""):(a.onResize.call(this),a.animate&&"block"===d.css("display")?e.stop().animate({height:c},a.animateDuration,a.animateCallback):e.height(c)))};d.unbind(".dynSiz").bind("keyup.dynSiz",e).bind("keydown.dynSiz",e).bind("change.dynSiz",e)});return this}})(jQuery);

function q_t(){
jQuery(function(){
	jQuery('textarea').autoResize();
});
}
q_t();
let number_new_textarea=0; 
let limit_new_textarea = 20;//сколько колличество раз можно создать вариант ответа
function create_textarea() {  //создать вариант ответа-новую textarea
		if (number_new_textarea<limit_new_textarea){
		//	$("<textarea class='uk-textarea text_input_parametrs q-text' maxlength='512' placeholder='Вариант ответа' rows='1' cols='20' ></textarea>").insertBefore(".new_textarea_q");	
			number_new_textarea++;
			console.log(number_new_textarea);
			
			//q_t();
		}
	
	}
//анимируем начало			               }
//кнопка добавить вариант овтета
$(".AddComment").click(function () {
create_textarea2();
console.log(newtext);
});




//конец, печатать
})
});

