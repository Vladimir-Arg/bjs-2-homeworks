"use strict"

function solveEquation(a, b, c) {
	const arr = [];
	const d = b ** 2 - 4 * a * c;
	if (d > 0) {
		const x1 = (-b + Math.sqrt(d)) / (2 * a);
		const x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1);
		arr.push(x2);
	} else if (d === 0) {
		const x = -b / (2 * a);
		arr.push(x);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percent0 = percent / 100;
  //Для дисконтирования применяется ежемесячная процентная ставка. Она определяется так:
//const monthPercent = ((1 + percent0 / 100) ** (1 / 12) - 1) * 100; (формула для нашей задачи не правильная)
  const monthPercent = percent0 / 12;
  const S = amount - contribution;
  const P = monthPercent;
  const monthPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  //                   S * (P + (P / (((1 + P)^n) - 1))); проверка - правилно ли расставлены скобки в формуле :-)
  const monthPaymentToFixed2 = +monthPayment.toFixed(2);
  const allPayments = monthPayment * countMonths;
  const allPaymentsToFixed2 = +allPayments.toFixed(2);
  return allPaymentsToFixed2;
}