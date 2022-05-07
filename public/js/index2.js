//загрузка из локального хранилища
let loadLocaljson = localStorage.getItem('data_local_'+first);
//Преобразуем их обратно в объект JavaScript:
let loadlocaldata = JSON.parse(loadLocaljson);

function selected_radio(){
}

function result_radio(){
    $('.uk-radio').attr('disabled', true);
    $('.VotePoll').attr('disabled', true);
	$( ".result-total" ).show(1000);
	
}

// загрузка опроса
    let request = new XMLHttpRequest();
    request.open("GET", ""+serverid) ;
    request.setRequestHeader("Content-type", 'application/json; charset=utf-8') ;
    request.send();
    request.addEventListener("load" , function() {
    
    if (request.readyState === 4 && request.status == 200)
    {
        let data = JSON.parse(request.response);
        data.forEach(item => {
			let = LoadMoreQ = item.moreq; //загрузка - множественный вариант ответа ?
            let qval = [item.val1, item.val2, item.val3, item.val4, item.val5, item.val6, item.val7, item.val8, item.val9, item.val10, item.val11, item.val12, item.val13, item.val14, item.val15, item.val16, item.val17, item.val18, item.val19, item.val20];
			let qresval = [item.res_val1, item.res_val2, item.res_val3, item.res_val4, item.res_val5, item.res_val6, item.res_val7, item.res_val8, item.res_val9, item.res_val10, item.res_val11, item.res_val12, item.res_val13, item.res_val14, item.res_val15, item.res_val16, item.res_val17, item.res_val18, item.res_val19, item.res_val20]
			let q_otvet = item.q_val;
			first_text.innerHTML = `
			<div id="first_text" class="poll"> ${item.name}</div>`;
			for (let i = 0; i < q_otvet; i++) {
				qvals=qval[i];
				qresvals = qresval[i];
				let qdiv = [];
				qdiv[i] = document.createElement('div');
				qdiv[i].innerHTML = 
				`<label class="rov${i}"><input class="uk-radio result-radio" type="radio" value="${i}" onclick="selected_radio()" name="radio1"><input id="changerbox" class="uk-checkbox changerbox_dn" type="checkbox"> ${qvals}  <b class="result-total">  (${qresvals} проголосовало за)</b></label><Br>
				`;
				document.querySelector('.q_poll').appendChild(qdiv[i]);
				//console.log(i);
	}
			if (LoadMoreQ == 1)
				changerbox(); //изменить на фладки или чекбокс

                if(loadlocaldata.golosoval == '1'){
                  //  console.log('локальное хранилище айди '+loadlocaldata.id);
                  //  console.log('локальное хранилище голосовал? /'+loadlocaldata.golosoval);
                 result_radio();
              
                }
                if(loadlocaldata.golos_za > 0){
                    console.log('голосовал за ' + loadlocaldata.golos_za);
                    //alert('Вы уже голосовали. Вы выбрали: '+loadlocaldata.golos_za+' вариант')
                    const golos_ = document.getElementById("golos_za");
                    golos_.innerHTML = 'Вы уже проголосовали. Вы выбрали: '+loadlocaldata.golos_za+' вариант.';
                  }
        });
    } else {
        console.error('Брат, щото нитак с сервером')
    }
    });

    function vote_in_the_poll(){
        if (request.readyState === 4 && request.status == 200)
        {
            let data = JSON.parse(request.response);
            data.forEach(item => {
                let res_voll = []
                //сначала ищем чекнутые кнопки
    let radios = document.querySelectorAll('input[type="radio"]');
    for (let radio of radios) {
		if (radio.checked) {
            res_voll = radio.value
			
		}}
        //console.log('чекнутая кнопка '+res_voll); //чекнутая кнопка
        let qresval = [item.res_val1, item.res_val2, item.res_val3, item.res_val4, item.res_val5, item.res_val6, item.res_val7, item.res_val8, item.res_val9, item.res_val10, item.res_val11, item.res_val12, item.res_val13, item.res_val14, item.res_val15, item.res_val16, item.res_val17, item.res_val18, item.res_val19, item.res_val20]
        let plus_res =  qresval[res_voll];//выбрать res и загрузить в переменную
        let pluss_res = +plus_res+1;//сложение
       // console.log('результат сложения '+pluss_res);
       let orig_resvol = +res_voll+1; //тк у нас нет res vol 0 , надо добавить единицу
        //let data_push = 'res_val'+orig_resvol+':'+pluss_res;
        //console.log('загрузим '+data_push);
        
        let data_push2 = {};
     if(orig_resvol ==1)data_push2 = {res_val1:pluss_res};
     if(orig_resvol ==2)data_push2 = {res_val2:pluss_res};
     if(orig_resvol ==3)data_push2 = {res_val3:pluss_res};
     if(orig_resvol ==4)data_push2 = {res_val4:pluss_res};
     if(orig_resvol ==5)data_push2 = {res_val5:pluss_res};
     if(orig_resvol ==6)data_push2 = {res_val6:pluss_res};
     if(orig_resvol ==7)data_push2 = {res_val7:pluss_res};
     if(orig_resvol ==8)data_push2 = {res_val8:pluss_res};
     if(orig_resvol ==9)data_push2 = {res_val9:pluss_res};
     if(orig_resvol ==10)data_push2 = {res_val10:pluss_res};
     if(orig_resvol ==11)data_push2 = {res_val11:pluss_res};
     if(orig_resvol ==12)data_push2 = {res_val12:pluss_res};
     if(orig_resvol ==13)data_push2 = {res_val13:pluss_res};
     if(orig_resvol ==14)data_push2 = {res_val14:pluss_res};
     if(orig_resvol ==15)data_push2 = {res_val15:pluss_res};
     if(orig_resvol ==16)data_push2 = {res_val16:pluss_res};
     if(orig_resvol ==17)data_push2 = {res_val17:pluss_res};
     if(orig_resvol ==18)data_push2 = {res_val18:pluss_res};
     if(orig_resvol ==19)data_push2 = {res_val19:pluss_res};
     if(orig_resvol ==20)data_push2 = {res_val20:pluss_res};
//сохраним в локальное хранилище перед патчем. иначе пока не получается
let data_local = {id: first, golosoval: 1, golos_za: orig_resvol};
let json = JSON.stringify(data_local);
localStorage.setItem('data_local_'+first, json)
console.log(json);
        fetch(serverSleshId, {
          method: 'PATCH',
         // body:(data_push2),
          body: JSON.stringify(data_push2),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
            });
        setTimeout(function(){ location.reload(); }, 500);
        }
    }