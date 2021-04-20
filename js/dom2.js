// var el = document.querySelector('.list-wrap>.list:nth-child(2)>img');
document.querySelector('.title').addEventListener('click', function () {
	alert('Hello Customer!');
});
var thumb = document.querySelectorAll('.list>img');
var stage = document.querySelector('.img-wrap>img');

function onThumbClick() {
	stage.src = this.src;
}

for (var i = 0; i < thumb.length; i++) {
	thumb[i].addEventListener('click', onThumbClick)
}
for (var i = 0; i < 7; i++) {

}
