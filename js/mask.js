let form__tel_message_number = 12;
let form1 = document.getElementById("order_form"),
	btn1 = document.getElementById("btn1");
//  form2 = document.getElementById("form2"),
// 	btn2 = document.getElementById("btn2");
//  form3 = document.getElementById("form3"),
// 	btn3 = document.getElementById("btn3");

function setButtonSubmitProperties(button) {
	button.style.opacity = "0.7";
	button.textContent = "...отправка";
	button.disabled = true;
}

let date_trigger, phone_trigger;

form1.addEventListener("submit", function (e) {
	getPhoneValue(e, btn1, '#phone1', "#name1", "#order_form");

	// e.preventDefault();
	// return
});

// form2.addEventListener("submit", function (e) {
// 	getPhoneValue(e, btn2, '#phone2', "#name2","#form2");

// 	// e.preventDefault();
// 	// return
// });


function getPhoneValue(event_for_submit, button, phone_id, name_id,form_message_bl) {
	let number = $(phone_id).val().replace(/\+|\)|\(|_|\-/g, ''),
		mass_user = localStorage.getItem('user_phone'),
		// tel_msg = 'Введите номер.';
		tel_msg = 'Введите номер в длину ' + form__tel_message_number + ' цифр.';


	// Условие на длину имени
	if ($(name_id).val().length < 2 || $(name_id).val().length > 30) {
		$(`${form_message_bl + ' .form__name_message'}`).text('Длина имени от 2 до 30 символов....');
		displayPopUpBlock(`${form_message_bl + ' .form__name_message'}`);
		event_for_submit.preventDefault();
		return
	}


	// Условие на длину номера телефона
	if (number.length < form__tel_message_number) {
	// if (number.length < 2) {
		$(`${form_message_bl + ' .form__tel_message'}`).text(tel_msg);
		displayPopUpBlock(`${form_message_bl + ' .form__tel_message'}`);
		event_for_submit.preventDefault();
		return
	}

	// Условие на повтор лида
	if (mass_user == null || mass_user == undefined || mass_user == '') {
		localStorage.setItem('user_phone', number);
		phone_trigger = true;
	} else {
		if (mass_user.includes(number)) {
			phone_trigger = false;
		} else {
			let massive1 = mass_user.split(',');
			massive1.push(number);
			mass_user = massive1;
			localStorage.setItem('user_phone', mass_user);
			phone_trigger = true;
		}
	}

	if (date_trigger == false && phone_trigger == false) {
		$(`${form_message_bl + ' .form__tel_message'}`).text('Ваш заказ отправлен по этому номеру.');
		displayPopUpBlock(`${form_message_bl + ' .form__tel_message'}`);
		setTimeout(function () {
			$(`${form_message_bl + ' .form__tel_message'}`).text(tel_msg);
		}, 5030);
		event_for_submit.preventDefault();
		return
	}


	setButtonSubmitProperties(button);
}


// Анимация start
function displayPopUpBlock(blockClassName) {
	messageVisible(blockClassName);
	setTimeout(function () {
		messageInvisible(blockClassName);
	}, 4000);
}

function messageVisible(blockClassName) {
	var elem = document.querySelector(blockClassName);
	var massiveClass = elem.classList;

	if (massiveClass.contains("invisible") == true) {
		massiveClass.remove("invisible");
	}
	setTimeout(function () {
		massiveClass.remove("opacityNone");
	}, 50);
}

function messageInvisible(blockClassName) {
	var elem = document.querySelector(blockClassName);
	var massiveClass = elem.classList;
	massiveClass.add("opacityNone");
	elem.addEventListener("transitionend", addHiddenClass(blockClassName), false);
}

function addHiddenClass(blockClassName) {
	setTimeout(function () {
		var elem = document.querySelector(blockClassName);
		var massiveClass = elem.classList;
		massiveClass.add("invisible");
	}, 1000);
}
// Анимация end










// Текущее время
let date_user = new Date();
let date_user_year = date_user.getFullYear();
let date_user_month = date_user.getMonth();
let date_user_day = date_user.getDay();
let date_user_hour = date_user.getHours();
let date_user_minute = date_user.getMinutes();

// let phone_user = document.querySelectorAll("input[name='phone']").value;

// Время из localStorage
let get_date_user_year = localStorage.getItem('user_year');
let get_date_user_month = localStorage.getItem('user_month');
let get_date_user_day = localStorage.getItem('user_day');
let get_date_user_hour = localStorage.getItem('user_hour');
let get_date_user_minute = localStorage.getItem('user_minute');

// Время в localStorage нет времени задаём текущее
if (get_date_user_year == null || get_date_user_year || undefined || get_date_user_year == '') {
	localStorage.setItem('user_year', date_user_year);
}
if (get_date_user_month == null || get_date_user_month || undefined || get_date_user_month == '') {
	localStorage.setItem('user_month', date_user_month);
}
if (get_date_user_day == null || get_date_user_day || undefined || get_date_user_day == '') {
	localStorage.setItem('user_day', date_user_day);
}
if (get_date_user_hour == null || get_date_user_hour || undefined || get_date_user_hour == '') {
	localStorage.setItem('user_hour', date_user_hour);
}
if (get_date_user_minute == null || get_date_user_minute || undefined || get_date_user_minute == '') {
	localStorage.setItem('user_minute', date_user_minute);
}

// отдаёт true или false для отправки лида
if (
	(date_user_year - get_date_user_year) >= 0 &&
	(date_user_month - get_date_user_month) >= 0 &&
	(date_user_day - get_date_user_day) >= 0 &&
	(date_user_hour - get_date_user_hour) >= 0 &&
	(date_user_minute - get_date_user_minute) > 10
) {
	date_trigger = true;
	localStorage.setItem('user_phone', '');
} else {
	date_trigger = false;
}


// console.log(date_user_year, date_user_month, date_user_day, date_user_hour, date_user_minute);
// console.log('-----------------------');
// console.log(get_date_user_year, get_date_user_month, get_date_user_day, get_date_user_hour, get_date_user_minute);
// console.log('date_trigger -- ', date_trigger);