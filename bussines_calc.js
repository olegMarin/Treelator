let sumEconomy = 0;
let sumEcology = 0
// Переменные per*** содержат списки.
// Первое — изменение экономии денег
// Второе — изменение спасения деревьев
// Дальше складываем
let perSquare = [0, 0];
let perWoker = [0, 0];
let perBiscuits = [0, 0];
let perElectricity = [0, 0];
let perWater = [0, 0];
let perDrink = [0, 0];
let perPaper = [0, 0];


function calcEcology(Square) {
  sumEcology = perElectricity[1] + perWater[1] + perDrink[1] + perPaper[1];
}

// формула расчёта при большом количестве данных
// складывает переменные с экономией
function calcEconomy(Square) {
  sumEconomy = perSquare [0] + perElectricity[0] + perWater[0] + perDrink[0] + perBiscuits[0] + perPaper[0];
}

// мы получаем только площадь, делим на норматив (4,5 метра на человека), 
// подставляем фиктивно в People
function calcSquare(Square) {
  let people = Square / 4.5; 
  perElectricity[0] = people * 231 * 12 *    6.57;          // в реальности все переменные веду в месяце, перед выводом результата умножаю на 12
  perElectricity[1] = people * 231 * 12 *    0.004 * 0.45;  //
  perWater[0] = people * 74 * 12 *           32.53;         //
  perWater[1] = people * 74 * 12 *            0.003 * 0.33;  //
  perDrink[0] = people * 1.25 *             9.3;              //
  perDrink[1] = people * 1.25 *             0.003 * 0.33;     //
  perBiscuits[0] = people * (3099 + 3628);                    
  perPaper[0] = people * 6.1 * 12;                            //  
  perPaper[1] = people * 12 * 0.025;                          //
    
  perSquare [0] = 16400 * Square; //тут сразу год
  sumEconomy = perSquare [0] + perElectricity[0] + perWater[0] + perDrink[0] + perBiscuits[0] + perPaper[0];  
  sumEcology = perElectricity[1] + perWater[1] + perDrink[1] + perPaper[1]; 
}

function calcWoker(Woker) {
  perElectricity[0] = Woker * 231 * 12 * 6.57; 
  perElectricity[1] = Woker * 231 * 12 * 0.004 * 0.45;  
  perWater[0] = Woker * 74 * 32.53 * 12;
  perWater[1] = Woker * 74 * 12 * 0.003 * 0.33;  
  perDrink[0] = 9.3 * 1.25 * Woker;
  perDrink[1] = Woker * 1.25 * 0.003 * 0.33;
  perBiscuits[0] = Woker * (3099 + 3628);  
  perPaper[0] = Woker * 6.1 * 12;  
  perPaper[1] = Woker * 12 * 0.025;
    
  sumEconomy = perSquare [0] + perElectricity[0] + perWater[0] + perDrink[0] + perBiscuits[0] + perPaper[0];  
  sumEcology = perElectricity[1] + perWater[1] + perDrink[1] + perPaper[1];  
}

function calcRegion(Region) { // Либо 1 (дорогой регион), либо 2 (средний регион), либо 3 (дешёвый)
  if (Region == 1) {
    perSquare[0] = Square * 17500;
  };
  if (Region == 2) {
    perSquare[0] = Square * 13000;
  };
  if (Region == 3) {
    perSquare[0] = Square * 7500;
  };
}

// на вход получает список с 0 или 1, в зависимости от того, активированы ли пункты
function calcBiscuits(Biscuits) { // должно получать [0, 0, 0]/[1,1,1] [печеньки/кофе/фрукты]
  perBiscuits[0] = Woker * (Biscuits[0] * 3099 + Biscuits[1] * 3628 + Biscuits[0] * 7180);
  if (Woker > 100) {
    perBiscuits[0] = perBiscuits * 0.85;
  }; 
  if (Woker > 500) {
    perBiscuits[0] = perBiscuits * 0.75;
  };
  if (Woker > 500) {
    perBiscuits[0] = perBiscuits * 0.65;
  };
                                 
}

// на вход получает потребляемой энергии в кВт/м
// перезаписывает perElectricity (экономия в деньгах на электричестве)
function calcElectricity(Electricity) {
  if (Region == 1) {
    perElectricity[0] = Electricity * 7.41 * 12;//
  };
  if (Region == 2) {
    perElectricity[0] = Electricity * 6.57 * 12;//
  };
  if (Region == 3) {
    perElectricity[0] = Electricity * 5.96 * 12;//
  };
  perElectricity[1] = Electricity * 0.004 * 0.45;
}

function calcPaper(Paper) {
  perPaper[0] = Paper * 165.2 * 12;
  perPaper[1] = Paper * 0.025 * 12;
    
}

function calcWater(Water) {
  if (Region == 1) {
    perWater[0] = Water * 42.3 * 12;//
  };
  if (Region == 2) {
    perWater[0] = Water * 32.53 * 12;//
  };
  if (Region == 3) {
    perWater[0] = Water * 30.45 * 12;//
  };
  perWater[1] = Water * 0.003 * 0.33;
}

function calcCool(Cool) {//
  if (Cool == 1) {
    if (Region == 1) {
      perSquare[0] = Square * 21923;
    };
    if (Region == 2) {
      perSquare[0] = Square * 18000;
    };
    if (Region == 3) {
      perSquare[0] = Square * 13993;
    };  
  };
  if (Cool == 2) {
    if (Region == 1) {
      perSquare[0] = Square * 15600;
    };
    if (Region == 2) {
      perSquare[0] = Square * 12000;
    };
    if (Region == 3) {
      perSquare[0] = Square * 9600;
    }; 
  };
  if (Cool == 3) {
    if (Region == 1) {
      perSquare[0] = Square * 10200;
    };
    if (Region == 2) {
      perSquare[0] = Square * 7445;
    };
    if (Region == 3) {
      perSquare[0] = Square * 6120;
    }; 
  };
}

function calcRich(Rich) {
  perSquare[0] = Rich;
}

<iframe src="https://treelator.businessmod.ru" 
  sandbox="allow-same-origin allow-scripts"
  width="360" height="600"
  >

</iframe>