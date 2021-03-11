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
import { NanoToRaw, RawToNano } from 'nano-helper';

NanoToRaw('1.13');                             // '1130000000000000000000000000000'
NanoToRaw('1');                               // '1000000000000000000000000000000'
NanoToRaw('100');                              // '100000000000000000000000000000000'

RawToNano('100000000000000000000000000')   // '0.0001'
RawToNano('1000000000000000000000000000000000')  // '1000'
RawToNano('1234000000000000000000000000000') // '1.234'
```

