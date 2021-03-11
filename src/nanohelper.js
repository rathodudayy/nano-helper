import Big from 'big.js';

Big.NE = -31;
Big.PE = 39;
const RAW = new Big('1000000000000000000000000000000');
const NANO = new Big('0.000000000000000000000000000001');

export function RawToNano(raw){

	let rawBig ;

	try {
		rawBig = new Big(raw);
	} catch (error) {
		throw Error('The raw amount is invalid.');
	}
	return rawBig.mul(NANO).toString();
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

export function FormatNano(n, limit) {
	const str_n = n.toString();
	if(str_n.length > limit)
	{
		return str_n.slice(0, limit);
	}
	else{
		return n;
	}

}
