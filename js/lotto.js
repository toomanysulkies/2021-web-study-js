/****************************글로벌 설정**************************************/







/***************************************사용자 함수****************************/





/********************************이벤트 등록***********************************/

$('#bt-lotto').on('click', onLotto)
$('#bt-reset').on('click', onReset)

//bt-lotto를 클릭하면 onLotto가 돌아서



/*****************************이벤트 콜백*************************************/




function onReset() {
	$('.disp-wrapper .display').empty()
	$('.history-wrapper').empty()
}
function onLotto() {


	/***************변수선언*********** */
	var numbers = [], n, i, color //필요한 변수 네개 빈 배열 / n :랜덤 / i :증가값  /color값


	/**********조건이 참일 때까지 반복************ */
	/***********랜덤 로또번호 6개추출************** */
	while (numbers.length < 6) { //while->조건이 참일 때까지 반복한다.//길이가 6보다 작다->참//아래로 length는 속성
		n = Math.floor(Math.random() * 45) + 1; //0부터44까지 +1//Math라는 객체가 가진 매서드(floor/random)을 실행해주세요
		if (numbers.indexOf(n) === -1) { //값을 줬을 때 이 값이 numbers 안에 존재한다면, 자릿수를 리턴한다 밑의 설명과 같은 말
			numbers.push(n)//numbers에다가 n 을 맨 뒤에 넣어줌
		}
	}
	//indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다. 

	/*while문을 빠져나가는 과정
	 1.while (numbers.length < 6)      //배열 안의 길이가 5까지 있다면 
	 2.	n = Math.floor(Math.random() * 45) + 1;    //랜덤 매서드가 실행되고
	 3.if (numbers.indexOf(n) === -1)       //numbers.indexOf(n)이 값이 -1과 같다면 (배열 안에 n 없으므로 -1 리턴되어 조건 충족, 참)
	 4.numbers.push(n) //배열에 랜덤값을 또 추가한다.
	 5.while 문이기에 다시 반복 ->그러나 length가 6이 되었기 때문에 조건문 탈출!
	 
	 
	 */
	/************추출된 번호 오름차 순 정렬************* */
	numbers.sort(function (a, b) { return a - b })
	//  numbers.sort(function(a,b){return a - b})오름차순
	//  numbers.sort(function(a,b){return b - a})내림차순


	// console.log(numbers)


	/**************.display에 표현*********** */
	$('.disp-wrapper .display').empty()//이 안을 지워라

	for (i = 0; i < 6; i++) {
		if (numbers[i] <= 10) { color = 'yellow' }
		else if (numbers[i] <= 20) { color = 'blue' }
		else if (numbers[i] <= 30) { color = 'red' }
		else if (numbers[i] <= 40) { color = 'grey' }
		else { color = 'green' }


		$('.disp-wrapper .display').append('<li class="ball ' + color + '">' + numbers[i] + '</li>');
	}



	/**********.history-wrapper에 넣어주기*************** */
	$('.history-wrapper').prepend($('.disp-wrapper .display').clone())



}