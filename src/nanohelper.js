import Big from 'big.js';

Big.NE = -31;
Big.PE = 39;
const RAW = new Big('1000000000000000000000000000000');

export function RawToNano(raw){

	let rawBig ;

	try {
		rawBig = new Big(raw);
	} catch (error) {
		throw Error('The raw amount is invalid.');
	}

	return rawBig.div(RAW).toString();
}

export function NanoToRaw(nano) {

	let nanoBig;

	try {
		nanoBig = new Big(nano);
	} catch (error) {
		throw Error('The nano amount is invalid.');
	}

	return nanoBig.times(RAW).toString();
}

export function FormatNano(n) {
	const str_n = n.toString();
	if(str_n.length > 15)
	{
		return str_n.slice(0, 15);
	}
	else{
		return n;
	}

}
