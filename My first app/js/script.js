myFirtsApp("Артём", 19);

function myFirtsApp(name, age) {

	alert("Привет, меня зовут " + name + ", мне " + age + " лет и это моя первая программа на JS!");
	showSkills();
	checkAge();

	let number = prompt("Какое число будем возводить в квадрат?", "")
	calcPow(number);


	function showSkills() {
		let skills = ['HTML', 'CSS', 'Motion Design', 'C#', 'C++'];

		for (let i = 0; i < skills.length; i++) {
			// Я владею в столбик с помощью <br>
			document.write("Я владею " + skills[i] +'<br/>');
		}
	} // Выводим навыки 

	function checkAge() {
		if (age > 18) {
			alert("Ого, мне больше 18!");
		} else {
			alert("Мне ещё нет 18 лет :(");
		}
	} // Проверяем возраст

	function calcPow(num) {
		numberPow = num * num;
		console.log(numberPow);
		document.write("<br/>" + "Число " + number + " в квадрате = " + numberPow);
	} // Выводим квадрат числа
}