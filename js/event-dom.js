// document.querySelector('.btn-wrapper>.bt-parent')

// document.querySelector('btn-parent').addEventListener('click', function ({

// }))
//변수의 범위! 중요!!
var a = 10;
//전역변수: 전 문서에 걸쳐 통용되는 변수 


function area() {
	var a = 20;//지역변수(local) 이 함수 내에서만 쓰임
	console.log('area():', a)
} //20


function area2() {
	console.log('area2():', a)
} //여기서는 따로 변수값을 재선언하지 않았으므로 전역변수가 적용된다

area();
area2();
console.log('root:', a)//10
//보통 변수를 겹쳐서 사용하지는 않는다! 단순예시용으로 사용~



//주로 사용되는 이벤트는 click, mouseenter, mouseleave, keypress, keyup, leypress, reset, submit, resize, scroll


window.addEventListener('resize', function () {
	console.log(this.innerWidth)
})