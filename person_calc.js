let sumEconomy = 0;
let sumEcology = 0;

let perPublTransport = [0, 0]
let perPersTransport = [0, 0]
let perFood = [0, 0]

//поля:
//Ввод расстояния
// Расстояние до работы//
// Пользователь выбирает, машина или общественный транспорт//
// Если общественный, то Москва или Питер (region = 1 или 2)
// Есди машина, то дополнительные пункты://
// Расход топлива машины//
// Тип топлива: 92, 95 или ДТ//
// Потом вопрос про то, сколько человек в среднем тратит на еду на работе в день

function calcPublicTransport (distance, region) {
	if (region == 1) {
		perPublTransport[0] = 26940;//
	};
	if (region == 2) {
		perPublTransport[0] = 28800;//
	};
	
	perPublTransport[1] = distance * 1.084 / 130000 * 121.8 * 21 * 12 * 2 * 1.25 / 20;//
	
}

// в зависимости от типа топлива в typeFuel передаётся 43.26, 47.56 или 47.62
function calcPersonTransport (distance,  fuel=10, typeFuel=47.56) {
	
	perPersTransport[0] = distance * fuel / 100 * typeFuel * 2 * 21 * 12;//
	perPersTransport[1] = distance * 1.085 / 130000 * 12.18 * fuel * 2 * 21 * 12;//
}

function calcFood (priceFood=300) {
	perFood = priceFood * 21 * 12;
}


