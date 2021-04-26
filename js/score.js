/* 
$('.wrapper') 		=> return jquery object
$('.wrapper')[0]	=> return javascript object
$($('.wrapper')[0])	=> return jquery object
$(document.querySelector('.wrapper'))	=> return jQuery object
*/

/*
scores[0] = {
	name: '홍길동',
	kor: 80,
	eng: 90,
	math: 85,
	total: 255,
	avg: 85,
	rank: 2
}
*/

/*************************************글로벌 설정*******************************************/
var scores = []

/***********************************사용자 함수*********************************************/



/*
// 축약과정
function rankScore() {
	scores.sort(function(a, b) {
		return b.total - a.total //a b 둘다 객체라 순위비교 못하니까 total값으로
	})
	scores.forEach(function(v, i) {
		if(i === 0) v.rank = 1
		else {
			if(v.total === scores[i - 1].total) v.rank = scores[i - 1].rank
			else v.rank = i + 1
		}
	})
}
function rankScore() {
	scores.sort(sortDesc('total'))
	scores.forEach(function(v, i) {
		if(i === 0) v.rank = 1
		else {
			v.rank = (v.total === scores[i - 1].total) ? scores[i - 1].rank : i + 1
		}
	})
}
function rankScore() {
	scores.sort(sortDesc('total'))
	scores.forEach(function(v, i) {
		v.rank = (i === 0) ? 1 : (v.total === scores[i - 1].total) ? scores[i - 1].rank : i + 1 
	})
}
*/

//function sum(a, b, fn){     
// 	fn (a + b)
// }
// sum(10,20,function(v){ //a=10,b=20,fn=v  sum의 값을 v에 넣어 함수 실행

// })
// 콜백
// 30

function rankScore() {
	scores.sort(sortDesc('total')).forEach(function (v, i) {
		v.rank = (i === 0) ? 1 : (scores[i - 1].total === v.total) ? scores[i - 1].rank : i + 1
	})
	scores.sort(sortAsc('createdAt'))
	// console.log(scores)
}

function renderScore() {
	// 테이블에 점수를 등록
	var i, html
	$('.score-tb tbody').empty()
	for (i = 0; i < scores.length; i++) {
		html = '<tr>'
		html += '<td>' + (i + 1) + '</td>'
		html += '<td>' + scores[i].name + '</td>'
		html += '<td>' + scores[i].kor + '점</td>'
		html += '<td>' + scores[i].eng + '점</td>'
		html += '<td>' + scores[i].math + '점</td>'
		html += '<td>' + scores[i].total + '점</td>'
		html += '<td>' + scores[i].avg + '점</td>'
		html += '<td>' + scores[i].rank + '등</td>'
		html += '<td>'
		// html += '<button class="bt-change">수정</button>&nbsp;'
		// html += '<button class="bt-remove">삭제</button>'
		html += '</td>'
		html += '</tr>'
		// console.log(html)
		$('.score-tb tbody').prepend(html)
	}
	$('.score-tb tbody tr').stop().fadeOut(0, function () {
		$(this).stop().fadeIn(1000)
	})
}


/*************************************이벤트 등록*******************************************/


/**************************************이벤트 콜백******************************************/


//데이터 저장
function onScoreSubmit(f) {
	//f는 this=(form)
	// var f = document.scoreForm
	var name = f.name.value.trim()
	var kor = f.kor.value.trim()
	var eng = f.eng.value.trim()
	var math = f.math.value.trim()
	var createdAt = new Date().getTime()

	//trim은 공백을 제거해서 스페이스를 텍스트로 인식하지 않게 해준다

	//데이터 검증
	if (name === '') {//따옴표 사이에 공백 있으면 안됨!!
		alert('이름을 입력하세요')
		f.name.focus()
		return false
	}
	if (kor === '') {
		alert('국어점수를 입력하세요')
		f.kor.focus()
		return false
	}
	if (eng === '') {
		alert('영어점수를 입력하세요')
		f.eng.focus()
		return false
	}
	if (math === '') {
		alert('수학점수를 입력하세요')
		f.math.focus()
		return false
	}
	//데이터 수정
	kor = Number(kor)
	eng = Number(eng)
	math = Number(math)
	total = kor + eng + math
	avg = Number((total / 3).toFixed(2))
	// console.log(kor, eng, math, total, avg);

	//배열에 데이터 저장
	scores.push({
		name: name,
		kor: kor,
		eng: eng,
		math: math,
		total: total,
		avg: avg,
		createdAt: createdAt
	})
	//console.log(scores)
	// form을 초기화
	f.reset()
	//데이터의 순위를 가공온다

	rankScore()





	// 데이터를 화면에 표현한다


	renderScore()
	return false
}



