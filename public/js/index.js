jQuery.noConflict()(function ($) { //чтобы не было ошибок из-за доллара
	$(document).ready(function(){//dom прочитан

let new_number_textarea=4 //сколько колличество раз можно создать вариант ответа

function create_textarea() {  //создать вариант ответа-новую textarea
	$(document).ready(function(){
		
			$("<textarea name='question' maxlength='512' style='color:red;' placeholder='Вариант ответа' rows='1' cols='30px' class='q-text'></textarea><br>").insertBefore(".uk-form-controls");	
			new_number_textarea--;
		});
	}
//анимируем начало			               }
setTimeout(function() { create_textarea(); }, 0500)
setTimeout(function() { create_textarea(); }, 1000)

//кнопка добавить вариант овтета
$(".AddComment").click(function () {
if (new_number_textarea>=1)
create_textarea();
});


//конец, печатать
})
});

