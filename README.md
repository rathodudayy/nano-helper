# Nano Helper

Nano Helper converts raw to nano and nano to raw for the [Nano](https://nano.org/en) cryptocurrency. 


```
1 nano = 1000000000000000000000000000000 Raw
```

## Installation

```
npm install nano-helper
```

## Examples

```js
import { NanoToRaw, RawToNano, FormatNano } from 'nano-helper';

NanoToRaw('1.13');                                // '1130000000000000000000000000000'
RawToNano('1234000000000000000000000000000');     // '1.234'


RawToNano('4723200000000000000');                   // '0.0000000000047232' 
FormatNano(RawToNano('4723200000000000000'));       // '0.0000000000047'

RawToNano('72000000200233734563402000000000000');   // '72000.000200233734563402
FormatNano(RawToNano('72000000200233734563402000000000000'), 15);  // '72000.000200233'

```

## Important

Remember to pass amount in string value only, or you will have rounding up problems.


## Donate

Nano : nano_3aj7n9x87cgki469cmairbmnd3wo9tkwpr1zij9xdnq4c3h1o447o55p3ow5
