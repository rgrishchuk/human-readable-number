module.exports = function toReadable (number) {
	if (number === 0) return 'zero';
	if (('' + number).length > 3) return 'Value too large';

	const ones = ['',' one',' two',' three',' four',' five',' six',' seven',' eight',' nine',' ten',
	' eleven',' twelve',' thirteen',' fourteen',' fifteen',' sixteen',' seventeen',' eighteen',' nineteen',];
	const dozens = [' twenty',' thirty',' forty',' fifty',' sixty',' seventy',' eighty',' ninety'];

	let result = '';

	hundred = Math.trunc(number / 100);
	if (hundred !== 0) {
		result = ones[hundred] + ' hundred';
	}

	tens = number % 100;
	if (tens < 20) result += ones[tens]
		else result += dozens[Math.trunc(tens / 10) - 2] + ones[tens % 10];
	return result.trim();  
}
