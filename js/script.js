

function makePhrases() {

let words1 = ["Коллеги, ", "В то же время, ", "Однако, ", "Тем не менее, ", "Следовательно, ", "Соответственно, ", "Вместе с тем, ", "С другой стороны, "];
let words2 = ["парадигма цифровой экономики ", "контекст цифровой информации ", "диджитализация бизнес-процессов ", "прагматичный подход к цифровым платформам ", "савокупность сквозных технологий ", "программа прорывных исследований ", "ускорение блокчейн-транзакций ", "экспоненциальный рост Big data "];
let words3 = ["открывает новые возможности для ", "выдвигает новые требования ", "несет в себе риски ", "расширяет горизонты ", "заставляет искать варианты ", "не оставляет шанса для ", "повышает вероятность ", "обостряет проблему "];
let words4 = ["дальнейшего углубления ", "бюджетного финансирования ", "синергетического эффекта ", "компроментации конфиденциальных ", "универсальной коммодитизации ", "несанкционированной кастомизации ", "нормативного регулирования ", "практического приминения "];
let words5 = ["знаний и компетенций.", "непроверенных гипотез.", "волатильных активов.", "опасных экспериментов.", "государстенно-частных партнерств.", "цифровых следов граждан.", "нежелательных последствий.", "внезапных открытий."];


let rand1 = Math.floor(Math.random() * words1.length);
let rand2 = Math.floor(Math.random() * words2.length);
let rand3 = Math.floor(Math.random() * words3.length);
let rand4 = Math.floor(Math.random() * words4.length);
let rand5 = Math.floor(Math.random() * words5.length);



let phrase = words1[rand1] + words2[rand2] + words3[rand3] + words4[rand4] + words5[rand5] 
alert (phrase);
}


makePhrases()