
// console.log(document.getElementById('our-text-input'))


// window.addEventListener('load', function(){
// 	console.log(document.getElementById('our-text-input'));
// })


// window.addEventListener('load', function(){
// 	var textField = document.getElementById('our-text-input');
// 	console.log(textField);
// })


window.addEventListener('load', function(){
	var textField = document.getElementById('our-text-input');
	textField.addEventListener('change', function(){
		console.log("something changed");
		console.dir(arguments);
	})
})


// function onChangeHandler(arg){
// 	console.log("something changed");
// 	console.dir(arg);
// }


// function onChangeHandler(input){
// 	console.log("something changed");
// 	console.log(input.value);
// }


// window.addEventListener('load', function(){
// 	var textField = document.getElementById('our-text-input');
// 	textField.addEventListener('change', function(event){
// 		console.log("something changed");
// 		console.dir(event.target.value);
// 	})
// })


// var textField = document.getElementById('our-text-input');
// textField.value = "default value";


window.addEventListener('load', function(){
	var textField = document.getElementById('our-text-input');
	textField.value = "default value";
})



