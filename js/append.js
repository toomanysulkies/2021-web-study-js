/************전역설정*********** */
var stage = document.querySelector('.stage')
var btAppend = document.querySelector('.bt-append')
var btRemove = document.querySelector('.bt-remove')





/**********사용자 함수************* */





/**********이벤트설정************* */
btAppend.addEventListener('click', onAppend)
btRemove.addEventListener('click', onRemove)




/**********이벤트콜백************* */
function onAppend() {
	/*  var html = stage.innerHTML;
		stage.innerHTML = html + '<div class="box"></div>'
		 를 줄여쓰면 */

	/*	stage.innerHTML = stage.innerHTML + '<div class="box"></div>'  
		가 되는데 이것을 또 줄이면 ->*/

	stage.innerHTML += '<div class="box"></div>'
}

function onRemove() {
	stage.innerHTML = ' ';
}


/*********************** */
//변수선언은 위에서 선언해야 한다. 그러나 함수는 문서 어느 위치든 상관없다!