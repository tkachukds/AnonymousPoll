let number_new_textarea=1; 
let limit_new_textarea = 20;//сколько колличество раз можно создать вариант ответа
let more_q_number = 0; // кнопка множественный варинт ответа нажата = 1, нет = 0/ при загрузке


//достаем все из юрл
function getUrlVars() { 
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	vars[key] = value;
	});
	return vars;
	}
	//id json 
var first = getUrlVars()["id"];
let q_id = '?id='+first;

//ссылка внизу
let linknow = window.location.href;
document.getElementById("item-to-copy").innerHTML = linknow;
//server сохранение опроса

window.addEventListener("DOMContentLoaded", () => {

$("#submitetn").click(function() {
var name = $("#name").val();
var val1 = $(".new_teaxtarea1").val();
var val2 = $(".new_teaxtarea2").val();
var val3 = $(".new_teaxtarea3").val();
var val4 = $(".new_teaxtarea4").val();
var val5 = $(".new_teaxtarea5").val();
var val6 = $(".new_teaxtarea6").val();
var val7 = $(".new_teaxtarea7").val();
var val8 = $(".new_teaxtarea8").val();
var val9 = $(".new_teaxtarea9").val();
var val10 = $(".new_teaxtarea10").val();
var val11 = $(".new_teaxtarea11").val();
var val12 = $(".new_teaxtarea12").val();
var val13 = $(".new_teaxtarea13").val();
var val14 = $(".new_teaxtarea14").val();
var val15 = $(".new_teaxtarea15").val();
var val16 = $(".new_teaxtarea16").val();
var val17 = $(".new_teaxtarea17").val();
var val18 = $(".new_teaxtarea18").val();
var val19 = $(".new_teaxtarea19").val();
var val20 = $(".new_teaxtarea20").val();

$.post('http://localhost:3000/poll',{
	name:name,
	val1:val1,
	val2:val2,
	val3:val3,
	val4:val4,
	val5:val5,
	val6:val6,
	val7:val7,
	val8:val8,
	val9:val9,
	val10:val10,
	val11:val11,
	val12:val12,
	val13:val13,
	val14:val14,
	val15:val15,
	val16:val16,
	val17:val17,
	val18:val18,
	val19:val19,
	val20:val20,
	q_val:number_new_textarea,
	moreq:more_q_number,
	res_val1:0,
	res_val2:0,
	res_val3:0,
	res_val4:0,
	res_val5:0,
	res_val6:0,
	res_val7:0,
	res_val8:0,
	res_val9:0,
	res_val10:0,
	res_val11:0,
	res_val12:0,
	res_val13:0,
	res_val14:0,
	res_val15:0,
	res_val16:0,
	res_val17:0,
	res_val18:0,
	res_val19:0,
	res_val20:0
},function(data) { 
    console.log(data.id); // ответ от сервера
	document.location.href = "index 2.html?id="+data.id;
})
})
// загрузка опроса
    function req() {
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/poll"+q_id) ;
    request.setRequestHeader("Content-type", 'application/json; charset=utf-8') ;
    request.send();
    request.addEventListener("load" , function() {
    
    if (request.readyState === 4 && request.status == 200)
    {
        let data = JSON.parse(request.response);
        data.forEach(item => {
			let = LoadMoreQ = item.moreq; //загрузка - множественный вариант ответа ?
            first_text.innerHTML = `
			<div id="first_text" class="poll"> ${item.name}</div>`;
			let qval = [item.val1, item.val2, item.val3, item.val4, item.val5, item.val6, item.val7, item.val8, item.val9, item.val10, item.val11, item.val12, item.val13, item.val14, item.val15, item.val16, item.val17, item.val18, item.val19, item.val20];
			let qresval = [item.res_val1, item.res_val2, item.res_val3, item.res_val4, item.res_val5, item.res_val6, item.res_val7, item.res_val8, item.res_val9, item.res_val10, item.res_val11, item.res_val12, item.res_val13, item.res_val14, item.res_val15, item.res_val16, item.res_val17, item.res_val18, item.res_val19, item.res_val20]
			let q_otvet = item.q_val;
			for (let i = 0; i < q_otvet; i++) {
				qvals=qval[i];
				qresvals = qresval[i]
				let qdiv = [];
				qdiv[i] = document.createElement('div');
				qdiv[i].innerHTML = 
				`<label class="rov${i}"><input class="uk-radio result-radio" type="radio" onclick="result_radio()" name="radio1"><input id="changerbox" class="uk-checkbox changerbox_dn" type="checkbox"> ${qvals}  <b class="result-total">  ${qresvals}%</b></label><Br>
				`;
				document.querySelector('.q_poll').appendChild(qdiv[i]);
				console.log(i);
	}
			if (LoadMoreQ == 1)
				changerbox(); //изменить на фладки или чекбокс
			
        });
    } else {
        console.error('Брат, щото нитак с сервером')
    }
    });
}

    req();
});
//

function result_radio(){
	$( ".result-total" ).show(1000);
	$('.uk-radio').attr('disabled', true);
}

let ch_box = 0
function changerbox(){
	if (ch_box == 0) {
	$( ".changerbox_dn" ).show(1000);
	$( ".uk-radio" ).hide(1000);
	ch_box = 1
	} else {
		$( ".changerbox_dn" ).hide(1000);
		$( ".uk-radio" ).show(1000);
		ch_box = 0
	}
}


//скопировать в буфер
function copyToClipboard() {
    const str = document.getElementById('item-to-copy').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
//


// async function getResponce() {
// let responce  = await fetch('index.json');	
// let content = await responce.json
// console.log(responce);
// }

// getResponce();


//
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


function create_textarea() {  //создать вариант ответа-новую textarea
	//да-да через массив почему-то не работает. допилю на новых версиях
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

//кнопка добавить вариант овтета
$(".AddComment").click(function () {
create_textarea();

});
$("#more_q").click(function () {
	if (more_q_number == 0) {
		
		more_q_number = 1

		console.log('множественный вариант ответа '+more_q_number);
		} else {
			more_q_number = 0
			console.log('множественный вариант ответа '+more_q_number);
		}
});


function vote_in_the_poll(){

}

function create_poll(){

}
//конец, печатать
})
});

