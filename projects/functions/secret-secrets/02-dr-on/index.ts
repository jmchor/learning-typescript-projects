// Write your createAdvancedCipher function here! ✨

export type Cipher = (character: string) => string;

export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPunctuation: Cipher
) {
	let vowelReg = /[aeiou]/i;
	let consReg = /[bcdfghjklmnpqrstvwxyz]/i;

	return (text: string) => {
		let result = "";

		for (const character of text) {
			if (character.match(vowelReg)) {
				result += onVowel(character);
			} else if (character.match(consReg)) {
				result += onConsonant(character);
			} else {
				result += onPunctuation(character);
			}
		}
		return result;
	};
}

// You'll need to export it so the tests can run it.
