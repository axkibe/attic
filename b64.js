/*
| Returns a number as base64 string.
*/
'use strict';


tim.define( module, ( def ) => {


const _b64Mask = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_';


/*
| Returns a number as base64 string.
*/
def.static.b64Encode =
	function(
		num // number to encode
	)
{
	let result = '';

	do
	{
		result = _b64Mask[ num & 0x3F ] + result;

		num = num >> 6;
	}
	while( num > 0 );

	return result;
};


} );
