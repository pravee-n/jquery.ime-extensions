( function ( $ ) {
	'use strict';

	var guTransliteration = {
		id: 'gu-transliteration',
		name: 'લિપ્યાંતરણ',
		description: 'Gujarati transliteration',
		date: '2012-10-14',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Jaldeep R Vasavada ([[User:JaldeepVasavada]]) / Amir E. Aharoni ([[User:Amire80]])',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 2,
		maxKeyLength: 4,
		patterns: [
			['ક્h', 'c', 'ચ'],
			['\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1'],

			['([ક-હ]઼?)્a', '$1'],
			['([ક-હ]઼?)્A', '$1ા'],
			['([ક-હ]઼?)a', '$1ા'],
			['([ક-હ]઼?)્i', '$1િ'],
			['([ક-હ]઼?)(્I|િi|ેe)', '$1ી'],
			['([ક-હ]઼?)્u', '$1ુ'],
			['([ક-હ]઼?)(ુu|્U|ોo)', '$1ૂ'],
			['([ક-હ]઼?)્R', '$1ૃ'],
			['([ક-હ]઼?)ૃR', '$1ૄ'],
			['([ક-હ]઼?)ે\\^', '$1ૅ'],
			['([ક-હ]઼?)્e', '$1ે'],
			['([ક-હ]઼?)્E', '$1ૅ'],
			['([ક-હ]઼?)ો\\^', '$1ૉ'],
			['([ક-હ]઼?)i', '$1ૈ'],
			['([ક-હ]઼?)્o', '$1ો'],
			['([ક-હ]઼?)્O', '$1ૉ'],
			['([ક-હ]઼?)u', '$1ૌ'],

			['([ક-હ]઼?)ૃa', '$1્ર'],
			['([ક-હ]઼?)ૃA', '$1્રા'],
			['([ક-હ]઼?)ૃi', '$1્રિ'],
			['([ક-હ]઼?)ૃI', '$1્રી'],
			['([ક-હ]઼?)ૃu', '$1્રુ'],
			['([ક-હ]઼?)ૃU', '$1્રૂ'],
			['([ક-હ]઼?)ૃ\\^', '$1્રૅ'],
			['([ક-હ]઼?)ૃe', '$1્રે'],
			['([ક-હ]઼?)ૃE', '$1્રૅ'],
			['([ક-હ]઼?)ૃo', '$1્રો'],
			['([ક-હ]઼?)ૃO', '$1્રો'],
			['([ક-હ]઼?)ૃ\\~', '$1્ર્'],

			['([ક-હ])્J', '$1઼્'],

			['અa', 'આ'],
			['(ઑo|ઉu)', 'ઊ'],
			['ઍ\\^', 'એ'],
			['અi', 'ઐ'],
			['અ\\^', 'ઍ'],
			['(ઇi|ઍe)', 'ઈ'],
			['ઑ\\^', 'ઓ'],
			['અu', 'ઔ'],
			['ઋR', 'ૠ'],
			['ળ્l', 'ઌ'],
			['ઌl', 'ૡ'],
			['ં\\^', 'ઁ'],
			['ઑM', 'ૐ'],

			['રY', 'ર્ય'],

			['ક્h', 'ખ્'], // kh
			['ગ્h', 'ઘ્'], // gh
			['ન્g', 'ઙ્'], // ng
			['ચ્h', 'છ્'], // chh
			['જ્h', 'ઝ્'], // jh
			['જ્n', 'જ્ઞ્'], // jn
			['ગ્n', 'જ્ઞ્'], //gn
			['ન્j', 'ઞ્'], // ny
			['ટ્h', 'ઠ્'], // Th
			['ડ્h', 'ઢ્'], // Dh
			['ત્h', 'થ્'], // th
			['દ્h', 'ધ્'], // dh
			['પ્h', 'ફ્'], // ph
			['બ્h', 'ભ્'], // bh

			['ઋa', 'ર'],
			['ઋA', 'રા'],
			['ઋi', 'રિ'],
			['ઋI', 'રી'],
			['ઋu', 'રુ'],
			['ઋU', 'રૂ'],
			['ઋ\\^', 'રૅ'],
			['ઋe', 'રે'],
			['ઋE', 'રૅ'],
			['ઋo', 'રો'],
			['ઋ\\~', 'ર્'],

			['સ્h', 'શ્'],
			['ક઼્h', 'ખ'],

			['a', 'અ'],
			['b', 'બ્'],
			['c', 'ચ્'],
			['d', 'દ્'],
			['e', 'એ'],
			['f', 'ફ્'],
			['g', 'ગ્'],
			['h', 'હ્'],
			['i', 'ઇ'],
			['j', 'જ્'],
			['k', 'ક્'],
			['l', 'લ્'],
			['m', 'મ્'],
			['n', 'ન્'],
			['o', 'ઓ'],
			['p', 'પ્'],
			['r', 'ર્'],
			['s', 'સ્'],
			['t', 'ત્'],
			['u', 'ઉ'],
			['(v|w)', 'વ્'],
			['x', 'ક્ષ્'],
			['y', 'ય્'],
			['(z|Z)', 'ઝ્'],
			['A', 'આ'],
			['D', 'ડ્'],
			['E', 'ઍ'],
			['F', 'ફ્'],
			['H', 'ઃ'],
			['I', 'ઈ'],
			['L', 'ળ્'],
			['M', 'ં'],
			['N', 'ણ્'],
			['O', 'ઑ'],
			['R', 'ઋ'],
			['S', 'ષ્'],
			['T', 'ટ્'],
			['U', 'ઊ'],
			['0', '૦'],
			['1', '૧'],
			['2', '૨'],
			['3', '૩'],
			['4', '૪'],
			['5', '૫'],
			['6', '૬'],
			['7', '૭'],
			['8', '૮'],
			['9', '૯'],

			// Danda characters are only needed in some text, so '.' is not mapped to it.
			['।K', '॥'], // Double danda, must be before danda
			['K', '।'], // Danda
			['//', 'ઽ'],
			['J', '઼'], // Nukta
			['(\u200C)*`', '\u200C']] // ZWNJ
	};
	$.ime.register( guTransliteration );

}( jQuery ) );

