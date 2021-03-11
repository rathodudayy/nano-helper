import Big from 'big.js';

Big.NE = -31;
Big.PE = 39;


const RAW_IN_MEGA = new Big('1000000000000000000000000000000');

const MEGA_IN_RAW = new Big('.000000000000000000000000000001');

const RAW_MIN_AMOUNT = new Big('1');

const RAW_MAX_AMOUNT = new Big('340282366920938463463374607431768211455');

const MEGA_MIN_AMOUNT = new Big('.000000000000000000000000000001');

const MEGA_MAX_AMOUNT = new Big('340282366.920938463463374607431768211455');



export function RawToNano(raw){

	let rawBig: Big;

	try {
		rawBig = new Big(raw);
	} catch (error) {
		throw Error('The raw amount is invalid.');
	}

	if (rawBig.lt(0)) {
		throw Error('The raw amount must not be negative.');
	}

	if (rawBig.lt(RAW_MIN_AMOUNT)) {
		throw Error('The raw amount is too small.');
	}

	if (rawBig.gt(RAW_MAX_AMOUNT)) {
		throw Error('The raw amount is too large.');
	}

	return rawBig.times(MEGA_IN_RAW).toString();
}

export function NanoToRaw(mega) {

	let megaBig: Big;

	try {
		megaBig = new Big(mega);
	} catch (error) {
		throw Error('The mega amount is invalid.');
	}

	if (megaBig.lt(0)) {
		throw Error('The mega amount must not be negative.');
	}

	if (megaBig.lt(MEGA_MIN_AMOUNT)) {
		throw Error('The mega amount is too small.');
	}

	if (megaBig.gt(MEGA_MAX_AMOUNT)) {
		throw Error('The mega amount is too large.');
	}

	return megaBig.times(RAW_IN_MEGA).toString();
}
