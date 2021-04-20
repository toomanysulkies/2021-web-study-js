/************선수학습*********** */
console.log(Math);
var n = 10.55
console.log(Math.floor(n)) //무조건 버림
console.log(Math.ceil(n)) //무조건 올림
console.log(Math.round(n)) //무조건 반올림

var n2 = -12.55
console.log(Math.abs(n2)) //절대값

var random = Math.random()  //0부터 1보다 작은 실수(0~0.99999999)
console.log(random)






/************전역설정*********** */

var boxCnt = 10;



/**********사용자 함수************* */




/**********이벤트설정************* */

$('.bt-make').on('click', onMake)
$('.bt-remove').on('click', onRemove)



/**********이벤트콜백************* */

function onMake() {
	var cnt = Number($('#cnt').val())
	var bg, r, g, b
	for (var i = 0; i < cnt; i++) {
		r = Math.floor(Math.random() * 256)
		g = Math.floor(Math.random() * 256)
		b = Math.floor(Math.random() * 256)

		bg = 'background-color:rgb(' + r + ',' + g + ',' + b + ')';//색상에도 랜덤값을 주기 위해 변수를 주었다!
		$('.stage').append('<div class="box" style=" ' + bg + ' "></div>') //스테이지의 박스를 어펜드 해주세요
	}//bg를 선언하고 그것을 적용한 것! <div class="box" style="background-color:rgb(12,3,27)"></div> 와 같다
}
function onRemove() {
	$('.stage').empty()//아래랑 같은 기능이다 [대상 안의 모든 요소를 삭제]
	$('.box').remove()//대상을 지운다

}

/*********************** */
//변수선언은 위에서 선언해야 한다. 그러나 함수는 문서 어느 위치든 상관없다!